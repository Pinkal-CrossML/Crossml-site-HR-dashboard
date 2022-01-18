from django.urls import path
from django.conf import settings


from . import views

urlpatterns = [
    # career urls
	path('', views.apiOverview, name="API-Overview"),
	path('list/', views.List, name="List"),
	path('detail/<str:pk>/', views.Detail, name="Detail"),
	path('create/',views.Create, name="Create"),
	path('update/<str:pk>/',views.Update, name="Update"),
    path('delete/<str:pk>/', views.Delete, name="Delete"),
    # 
    path('application/', views.Appl_list,name="Applications"),
    path('createform/',views.Createform, name="Create Form")
    
 ]

