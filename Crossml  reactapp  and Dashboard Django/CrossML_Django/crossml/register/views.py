from django.shortcuts import render, redirect
from django.contrib.auth.models import  auth

# function for login for HR

def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('dashboard')
        else:
            return render(request, 'register/login.html')
    else:
        return render(request,'register/login.html')
    
# function for logout

def logout(request):
    auth.logout(request)
    return render(request,'register/login.html')

