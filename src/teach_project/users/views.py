from django.shortcuts import render
from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer


#  Provide default create(), retrieve(), update(),
#  partial_update(), destroy() and list() actions
#  for abstract User
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
