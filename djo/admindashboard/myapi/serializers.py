from rest_framework import serializers
from .models import dataAnalysis

class DataAnalysisSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = dataAnalysis
        fields = '__all__'
