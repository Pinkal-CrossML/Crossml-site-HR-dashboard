from django.db import models
from django.db.models.deletion import CASCADE
from ckeditor.fields import RichTextField
from django.db.models.fields import TextField
from django.core.validators import FileExtensionValidator

#  here careers model we add  recruitment fields like
# job role, experience , job_description, roles_and_responsibilities

class Careers(models.Model):
    job_choices = (
        ('Senior Role','Senior Role'),
        ('Junior Role','Junior Role'),
        ('Fresher','Fresher'),
        ('Intern','Intern'),
    )
    job_role = models.CharField(max_length=20, choices=job_choices,null=True)
    
    experience_choices_min = (
        
        ('0','0'),
        ('1','1'),
        ('2','2'),
        ('3','3'),
        ('4','4'),
        ('5','5'),
        ('6','6'),
        ('7','7'),
        ('8','8'),
        ('9','9'),
        ('10','10'),
    )
    min_experience = models.CharField(max_length=50, choices=experience_choices_min,null=True)
    
    experience_choices_mix = (
        ('0','0'),
        ('1','1'),
        ('2','2'),
        ('3','3'),
        ('4','4'),
        ('5','5'),
        ('6','6'),
        ('7','7'),
        ('8','8'),
        ('9','9'),
        ('10','10'),
    )
    max_experience = models.CharField(max_length=50, choices=experience_choices_mix,null=True)
    
    # jon small Description careear first page
    job_title = models.CharField(max_length=50)
    job_description = RichTextField()
    loction = models.CharField(max_length=20)
    post_date = models.DateField()
    # Job Full Description for  candidate view job Full Description
    company_introduction = RichTextField(null=True)
    eligibility_criteria = RichTextField(null=True)
    job_full_description = RichTextField(null=True)
    roles_and_responsibilities= RichTextField(null=True)
    
    def __str__(self):
        return self.job_title
    
# here Application_forms model we add  fields for candidate apply for job like
# name, email, phone number, links, CV

class  Application_forms(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=12)
    li_link =models.URLField(max_length=500,blank=True,null=True)
    git_link =models.URLField(max_length=500,blank=True,null=True)
    cv_file = models.FileField(validators=[FileExtensionValidator(['pdf'])], upload_to='resume')
    job_title = models.CharField(max_length=100, null=True)
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    
    def __str__(self):
        
        return self.name
    

