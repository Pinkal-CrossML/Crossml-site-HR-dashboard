# Generated by Django 3.2.9 on 2021-12-06 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('careers', '0008_auto_20211203_1138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application_forms',
            name='git_link',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='application_forms',
            name='li_link',
            field=models.URLField(blank=True),
        ),
    ]