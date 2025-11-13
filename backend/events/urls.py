from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventRegistrationViewSet

# Create router and register viewsets
router = DefaultRouter()
router.register(r'registrations', EventRegistrationViewSet, basename='registration')

urlpatterns = [
    path('', include(router.urls)),
]