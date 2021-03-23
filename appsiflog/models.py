from django.db import models

# Create your models here.
class User(models.Model):
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    email = models.CharField(max_length=30)
    huellas = models.ImageField(upload_to='users')
    #idUser = models.IntegerField(max_length=10)