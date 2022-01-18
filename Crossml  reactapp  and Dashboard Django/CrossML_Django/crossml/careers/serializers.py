from rest_framework import serializers
from .models import Careers
from .models import Application_forms

class CareersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Careers
        # fields = ('id','job_role','min_experience','max_experience','job_title','job_description','loction','post_date')
        fields = '__all__'
        
class Application_formsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application_forms
        # fields = ('id','name','li_link','git_link','email', 'phone_number', 'cv_file')
        fields = '__all__'
        


