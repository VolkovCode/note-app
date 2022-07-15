from django.shortcuts import render
from django.http import JsonResponse

def getRoutes(request):
    # print(JsonResponse("Our API", safe=False))
    return JsonResponse("Our API", safe=False)
