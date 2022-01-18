from django.shortcuts import render
from django.http import JsonResponse
import careers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CareersSerializer,Application_formsSerializer
from crossml.settings import EMAIL_HOST_PASSWORD, EMAIL_HOST_USER

from .models import Careers,Application_forms
from careers import serializers
from django.conf import settings
from django.core.mail import send_mail


# function for show API urls overview

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'careers/list/',
		'Detail View':'careers/detail/<str:pk>/',
		'Create':'careers/create/',
		'Update':'careers/update/<str:pk>/',
		'Delete':'careers/delete/<str:pk>/',
        'Application List':'careers/application/',
        'Create Form':'/careers/createform/'

  
		}

	return Response(api_urls)

#    ************ careers API Methods  **************
   
#Get all data
@api_view(['GET'])
def List(request):
	tasks = Careers.objects.all().order_by('-id')
	serializer = CareersSerializer(tasks, many=True)
	return Response(serializer.data)

# Get data by id like /detail/2
@api_view(['GET'])
def Detail(request, pk):
	tasks = Careers.objects.get(id=pk)
	serializer = CareersSerializer(tasks, many=False)
	return Response(serializer.data)

# add new data
@api_view(['POST'])
def Create(request):
    serializer = CareersSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

# update data by id
@api_view(['POST'])
def Update(request,pk):
    tasks = Careers.objects.get(id=pk)
    serializer = CareersSerializer(instance=tasks,data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

# Delete by Id by id
@api_view(['DELETE'])
def Delete(request, pk):
	tasks = Careers.objects.get(id=pk)
	tasks.delete()

	return Response('Item succsesfully delete!')

# *****************Applications form Methos******************

@api_view(['GET'])
def Appl_list(request):
	tasks = Application_forms.objects.all().order_by('-id')
	serializer = Application_formsSerializer(tasks, many=True)
	return Response(serializer.data)

# ***
# In this Createform API POST candidates All_information  in database and aslo send email to HR 
# to inform to someone candidate  apply for job. 

@api_view(['POST'])
def Createform(request):
    job_id = None
    if request.data.get('job_id'):
        
        job_id = request.data.get('job_id')
        
    serializer = Application_formsSerializer(data=request.data)
    # breakpoint()
    if serializer.is_valid():
        if job_id:
            job_title = Careers.objects.get(id=job_id)
            
        else:
            job_title = request.data.get('job_title')
        serializer.save(job_title = job_title)
        appli=Application_forms.objects.get(email=request.data.get('email'))
        subject = ' Job application added in the database'
        idd=str(appli.id)
        profileurl='http://127.0.0.1:8000/dashboard/profile/'+idd+'/'
        message =  ' Dear HR, '+ request.data.get('name')+''+ idd + ',  applies for a Job .Click here for more information:'+profileurl
        
    
        email_from = EMAIL_HOST_USER
        recipient_list = ['pinkal@crossml.com']
        try:
            print("OK")
            send_mail( subject, message, email_from, recipient_list)
        except:
            print("ERROR")
            
        
    return Response(serializer.data)


