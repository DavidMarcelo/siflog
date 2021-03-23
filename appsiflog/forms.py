from django import forms
from appsiflog.models import User

class Formulario(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
        #widgets = {'huellas': forms.ImageField(attrs={'type':'field'})}