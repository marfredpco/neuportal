from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def loginPage(request):
    return render(request, 'automate/login.html')

def home(request):
    return render(request, 'automate/dashboard.html')

def courseMan(request):
    return render(request, 'automate/courseMan.html')