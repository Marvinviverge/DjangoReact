from django.shortcuts import render
from django.http import JsonResponse
from api.models import User

from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer

from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == 'GET':
        response = f"Bravo {request.user}, l'API a répondu à ta requête GET"
        return Response({'response': response}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        response = f"L'API a répondu à une requête POST avec ce text: {text}"
        return Response({'response': response}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)