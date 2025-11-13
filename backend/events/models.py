from django.db import models

class EventRegistration(models.Model):
    """
    Model for storing event registration data
    """
    REGISTRATION_TYPES = [
        ('etudiant', 'Étudiant'),
        ('partenaire', 'Partenaire'),
        ('sponsor', 'Sponsor'),
    ]
    
    # Registration details
    name = models.CharField(
        max_length=200,
        verbose_name="Nom complet",
        help_text="Nom complet du participant"
    )
    email = models.EmailField(
        unique=True,
        verbose_name="Email",
        help_text="Adresse email (doit être unique)"
    )
    phone = models.CharField(
        max_length=20,
        verbose_name="Téléphone",
        help_text="Numéro de téléphone"
    )
    institution = models.CharField(
        max_length=200,
        blank=True,
        null=True,
        verbose_name="Établissement",
        help_text="Établissement d'étude (pour étudiants)"
    )
    registration_type = models.CharField(
        max_length=20,
        choices=REGISTRATION_TYPES,
        default='etudiant',
        verbose_name="Type d'inscription"
    )
    
    # Metadata
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Date d'inscription"
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Dernière modification"
    )
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "Inscription à l'événement"
        verbose_name_plural = "Inscriptions à l'événement"
        indexes = [
            models.Index(fields=['-created_at']),
            models.Index(fields=['email']),
        ]
    
    def __str__(self):
        return f"{self.name} ({self.get_registration_type_display()}) - {self.email}"