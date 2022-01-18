# Generated by Django 3.2.9 on 2021-12-03 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('careers', '0007_alter_application_forms_li_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application_forms',
            name='cv_file',
            field=models.FileField(blank=True, max_length=254, null=True, upload_to='resume'),
        ),
        migrations.AlterField(
            model_name='application_forms',
            name='git_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='application_forms',
            name='li_link',
            field=models.URLField(blank=True, null=True),
        ),
    ]