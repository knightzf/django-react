from django.contrib import admin
from .models import EquityModel

class EquityModelAdmin(admin.ModelAdmin):
    list_display = ('ticker', 'description', 'pe')

# Register your models here.

admin.site.register(EquityModel, EquityModelAdmin)