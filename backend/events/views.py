from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Count
from .models import EventRegistration
from .serializers import EventRegistrationSerializer

class EventRegistrationViewSet(viewsets.ModelViewSet):
    """
    API endpoint for event registrations
    
    list: Get all registrations
    create: Create a new registration
    retrieve: Get a single registration by ID
    update: Update a registration
    destroy: Delete a registration
    """
    queryset = EventRegistration.objects.all()
    serializer_class = EventRegistrationSerializer
    
    def create(self, request, *args, **kwargs):
        """
        Create a new registration with custom response
        """
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    'success': True,
                    'message': 'Inscription réussie !',
                    'data': serializer.data
                },
                status=status.HTTP_201_CREATED
            )
        
        return Response(
            {
                'success': False,
                'message': 'Erreur lors de l\'inscription',
                'errors': serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )
    
    @action(detail=False, methods=['get'])
    def stats(self, request):
        """
        Get registration statistics
        Accessible at: /api/registrations/stats/
        """
        stats = EventRegistration.objects.values('registration_type').annotate(
            count=Count('id')
        )
        
        total = EventRegistration.objects.count()
        
        return Response({
            'total': total,
            'by_type': list(stats)
        })
    
    @action(detail=False, methods=['get'])
    def check_email(self, request):
        """
        Check if an email is already registered
        Accessible at: /api/registrations/check_email/?email=test@example.com
        """
        email = request.query_params.get('email', '').lower()
        
        if not email:
            return Response(
                {'error': 'Email parameter is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        exists = EventRegistration.objects.filter(email__iexact=email).exists()
        
        return Response({
            'email': email,
            'is_registered': exists
        })