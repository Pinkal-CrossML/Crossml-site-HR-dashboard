from django.contrib import admin
from django.urls import path
from dashboard import views



urlpatterns = [
    # abc/ path for datatable
    path('abc/', views.OrderListJson.as_view(), name='abc'),
    path('', views.show_dashboard,name='dashboard'),
    path('candidates/', views.Show_all_candidates, name="candidates"), 
    path('jobs/', views.Show_all_jobs, name="jobs"), 
    path('profile/<int:pk>/', views.Show_candidates_profile, name="profile"),
    path('job/<int:pk>/', views.show_job, name="job"),
    path('profile/delete/<int:pk>/', views.Delete_candidate, name="delete_profile"),
    path('byjobrole/<str:job_title>', views.Show_all_candidates_byjobrole, name="byjobrole"),  
    path('candiname/', views.search_candidates_name, name="candiname"),  
    path('jobtitle/', views.search_jobtitle, name="jobtitle"),  
    path('export_excel/', views.export_excel, name="export-excel"),
]
