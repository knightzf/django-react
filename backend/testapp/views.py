from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EquityModelSerializer
from .models import EquityModel

# Create your views here.

class EquityModelView(viewsets.ModelViewSet):
    serializer_class = EquityModelSerializer
    queryset = EquityModel.objects.all()