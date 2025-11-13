from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root(request):
    """
    API root endpoint
    """
    return JsonResponse({
        'message': 'Forum ENSTAB 2025 API',
        'version': '1.0',
        'endpoints': {
            'registrations': '/api/registrations/',
            'stats': '/api/registrations/stats/',
            'admin': '/admin/',
        }
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('events.urls')),
    path('', api_root),
]