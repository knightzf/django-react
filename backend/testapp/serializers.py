from rest_framework import serializers
from .models import EquityModel

class EquityModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquityModel
        fields = ('id', 'ticker', 'description', 'pe')