# from django.shortcuts import render

# from rest_framework import viewsets
# from .models import dataAnalysis
# from .serializers import DataAnalysisSerializer

# class DataAnalysisList(viewsets.ModelViewSet):
#     queryset = dataAnalysis.objects.all()
#     serializer_class = DataAnalysisSerializer


from django.shortcuts import render

from rest_framework import viewsets
from .models import dataAnalysis
from .serializers import DataAnalysisSerializer
from rest_framework.response import Response

class DataAnalysisList(viewsets.ModelViewSet):
    serializer_class = DataAnalysisSerializer
    queryset = dataAnalysis.objects.all()  # Specify the queryset

    # Define a basename explicitly
    basename = 'dataanalysis'

    def list(self, request):
        queryset = dataAnalysis.objects.all()
        data_list = list(queryset)
        serializer = DataAnalysisSerializer(data_list, many=True)
        return Response(serializer.data)



