from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect, response
from django.shortcuts import render, get_object_or_404
from careers.models import Application_forms,Careers
from django.views.generic import ListView
from django.shortcuts import redirect
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.utils.html import escape
from datetime import datetime
import datetime
import xlwt
from django.db.models import Q
# Create your views here.

# function for show dashboard with all jobs
@login_required
def show_dashboard(request):
    jobData = Careers.objects.all()
    # breakpoint()
    return render(request, 'dashboard/dashboard.html',{'jobDatas':jobData})


# function for show All Candidates
@login_required
def Show_all_candidates(request):
    # cndtData = Application_forms.objects.all().order_by('-id')[0:]
    # return render(request, 'dashboard/all_candidates.html',{'cndtDatas':cndtData})
    return render(request, 'dashboard/all_candidates.html')

# function for show All jobs
@login_required
def Show_all_jobs(request):
    jobData = Careers.objects.all()
    return render(request, 'dashboard/all_jobs.html',{'jobDatas':jobData})

# function for show Candidate profile by click on view button
@login_required
def Show_candidates_profile(request,pk):
    cadidt=get_object_or_404(Application_forms,pk=pk)
    context={
        'cadidt':cadidt,
    }
    
    return render(request, 'dashboard/profile.html',context)

# function for show job  by click on view Job button
@login_required
def show_job(request,pk):
    cadidt=get_object_or_404(Careers,pk=pk)
    context={
        'cadidt':cadidt,
    }
    
    return render(request, 'dashboard/job.html',context)


# function for delete  Candidate  by click on delete button
@login_required
def Delete_candidate(request,pk):
    cadidt=get_object_or_404(Application_forms,pk=pk)
    cadidt.delete()
    return HttpResponseRedirect('/dashboard/candidates/')


# function for show candidates by search name
@login_required
def search_candidates_name(request,):
    search_term = ''
    if 'search' in request.GET:
        search_term = request.GET['search']
        search_result = Application_forms.objects.all().filter(name__icontains=search_term)
    return render(request,'dashboard/search_candi_name.html',{'cndtDatas':search_result})

# function for show job by search job title 
@login_required
def search_jobtitle(request,):
    search_term = ''
    if 'search' in request.GET:
        search_term = request.GET['search']
        search_result = Careers.objects.all().filter(job_title__icontains=search_term)
    return render(request, 'dashboard/search_job_title.html',{'jobDatas':search_result})



# function for show  Candidates who apply for same job role like  Python developer
@login_required
def Show_all_candidates_byjobrole(request,job_title):
    search_result = Application_forms.objects.all().filter(job_title__icontains=job_title)
    return render(request, 'dashboard/byjobrole.html',{'cndtDatas':search_result})

# ussing data table
class OrderListJson(BaseDatatableView):
    model=Application_forms
    columns = ['pk', 'name', 'email', 'phone_number', 'li_link', 'git_link', 'cv_file', 'job_title', 'created_at', 'id']
    order_columns = ['pk', 'name', 'email', 'phone_number', 'li_link', 'git_link', 'cv_file', 'job_title', 'created_at', 'id']


    def render_column(self, row, column):
        if column=="id":
            action=("<a href='/dashboard/profile/{id}'>View</a>").format(id=row.id)
            return action           
        return super(OrderListJson, self).render_column(row, column)


    def filter_queryset(self, qs):
        filter_end_date = self.request.GET.get('filter_end_date', None)
        filter_title = self.request.GET.get('filter_title', None)
        filter_name = self.request.GET.get('filter_name', None)
        between_at = self.request.GET.get('between_at', None)
        between = self.request.GET.get('between', None)
        if between_at:
            qs=qs.filter(created_at__date__gte = between_at)
        if between:
            qs=qs.filter(created_at__date__lte=between)
        if filter_end_date:
            qs=qs.filter(created_at__date=filter_end_date)
        if filter_name:
            qs=qs.filter(name=filter_name)    
        if filter_title:
            qs=qs.filter(job_title__istartswith=filter_title)
        return qs

    def get_initial_queryset(self):
        qs= Application_forms.objects.all()
        return qs
    
    
# function for show data in excle format

def export_excel(request):
        response = HttpResponse(content_type='application/ms-excel')
        response['Content-Disposition']='attachment; filename=Expenses' + \
            str(datetime.datetime.now())+'.xls'
        wb = xlwt.Workbook('utf-8')
        ws = wb.add_sheet('Expenses')
        row_num = 0
        font_style= xlwt.XFStyle()
        font_style.font.b=old=True
        
        columns = ['id','name','email','phone_number','li_link','git_link','cv_file','job_title','created_at']
        
        for col_num in range(len(columns)):
            ws.write(row_num, col_num,columns[col_num], font_style)
            
        font_style = xlwt.XFStyle()
        
        rows=Application_forms.objects.all().values_list('id','name','email','phone_number','li_link','git_link','cv_file','job_title','created_at')
        
        for row in rows:
            row_num+=1
            
            for col_num in range(len(row)):
                ws.write(row_num, col_num,str(row[col_num]), font_style)
        
        wb.save(response)
        return response
    
    