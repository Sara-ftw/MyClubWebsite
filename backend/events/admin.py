from django.contrib import admin
from django.utils.html import format_html
from .models import EventRegistration

@admin.register(EventRegistration)
class EventRegistrationAdmin(admin.ModelAdmin):
    """
    Admin interface for EventRegistration
    """
    list_display = [
        'name',
        'email',
        'phone',
        'registration_type_badge',
        'institution',
        'created_at'
    ]
    
    list_filter = [
        'registration_type',
        'created_at',
    ]
    
    search_fields = [
        'name',
        'email',
        'phone',
        'institution'
    ]
    
    readonly_fields = ['created_at', 'updated_at']
    
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('name', 'email', 'phone')
        }),
        ('Type d\'inscription', {
            'fields': ('registration_type', 'institution')
        }),
        ('Métadonnées', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def registration_type_badge(self, obj):
        """
        Display registration type with colored badge
        """
        colors = {
            'etudiant': '#4CAF50',
            'partenaire': '#2196F3',
            'sponsor': '#FF9800'
        }
        color = colors.get(obj.registration_type, '#777')
        
        return format_html(
            '<span style="background-color: {}; color: white; padding: 3px 10px; '
            'border-radius: 3px; font-weight: bold;">{}</span>',
            color,
            obj.get_registration_type_display()
        )
    
    registration_type_badge.short_description = 'Type'
    
    # Bulk actions
    actions = ['export_to_csv']
    
    def export_to_csv(self, request, queryset):
        """
        Export selected registrations to CSV
        """
        import csv
        from django.http import HttpResponse
        
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="registrations.csv"'
        
        writer = csv.writer(response)
        writer.writerow(['Nom', 'Email', 'Téléphone', 'Type', 'Institution', 'Date'])
        
        for registration in queryset:
            writer.writerow([
                registration.name,
                registration.email,
                registration.phone,
                registration.get_registration_type_display(),
                registration.institution or 'N/A',
                registration.created_at.strftime('%Y-%m-%d %H:%M')
            ])
        
        return response
    
    export_to_csv.short_description = "Exporter en CSV"

# Customize admin site
admin.site.site_header = "Forum ENSTAB 2025 - Administration"
admin.site.site_title = "Forum ENSTAB Admin"
admin.site.index_title = "Gestion des inscriptions"