from rest_framework import serializers
from .models import EventRegistration

class EventRegistrationSerializer(serializers.ModelSerializer):
    """
    Serializer for EventRegistration model
    """
    
    class Meta:
        model = EventRegistration
        fields = [
            'id',
            'name',
            'email',
            'phone',
            'institution',
            'registration_type',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def validate_email(self, value):
        """
        Check that email is unique (case-insensitive)
        """
        # Convert to lowercase for comparison
        value = value.lower()
        
        # If this is an update, exclude the current instance
        if self.instance:
            if EventRegistration.objects.filter(
                email__iexact=value
            ).exclude(pk=self.instance.pk).exists():
                raise serializers.ValidationError(
                    "Un participant avec cet email est déjà inscrit."
                )
        else:
            # For new registrations
            if EventRegistration.objects.filter(email__iexact=value).exists():
                raise serializers.ValidationError(
                    "Un participant avec cet email est déjà inscrit."
                )
        
        return value
    
    def validate_phone(self, value):
        """
        Basic phone number validation
        """
        # Remove spaces and special characters
        cleaned = ''.join(filter(str.isdigit, value))
        
        if len(cleaned) < 8:
            raise serializers.ValidationError(
                "Le numéro de téléphone doit contenir au moins 8 chiffres."
            )
        
        return value
    
    def validate(self, data):
        """
        Validate that students can provide institution, but others cannot
        """
        registration_type = data.get('registration_type')
        institution = data.get('institution')
        
        # If not a student, clear the institution field
        if registration_type != 'etudiant':
            data['institution'] = None
        
        return data