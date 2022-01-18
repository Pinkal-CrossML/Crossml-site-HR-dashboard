from django.contrib import admin

from careers.models import Careers,Application_forms


# search_fields 
class Application_formsAdmin(admin.ModelAdmin):
    search_fields=('job_title','name',)
    list_display=['name','job_title']

admin.site.register(Careers,)
admin.site.register(Application_forms,Application_formsAdmin)
