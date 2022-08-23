from django.db import models

# Create your models here.

class Performer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)

class Practice_session(models.Model):
    length = models.PositiveIntegerField(default=0)
    performer = models.ForeignKey(Performer, on_delete=models.CASCADE)