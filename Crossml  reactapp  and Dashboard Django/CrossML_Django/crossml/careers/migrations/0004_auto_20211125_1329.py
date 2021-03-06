# Generated by Django 3.2.8 on 2021-11-25 07:59

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('careers', '0003_application_forms_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='careers',
            name='company_introduction',
            field=ckeditor.fields.RichTextField(null=True),
        ),
        migrations.AlterField(
            model_name='careers',
            name='eligibility_criteria',
            field=ckeditor.fields.RichTextField(null=True),
        ),
        migrations.AlterField(
            model_name='careers',
            name='experience_reguired',
            field=ckeditor.fields.RichTextField(null=True),
        ),
        migrations.AlterField(
            model_name='careers',
            name='job_description',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='careers',
            name='job_full_description',
            field=ckeditor.fields.RichTextField(null=True),
        ),
        migrations.AlterField(
            model_name='careers',
            name='roles_and_responsibilities',
            field=ckeditor.fields.RichTextField(null=True),
        ),
    ]
