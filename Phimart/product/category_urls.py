from django.urls import path
from product import views

urlpatterns = [
    path('', views.ListCategory.as_view(), name='view-category'),
    path('<int:id>/', views.CategoryDetails.as_view(), name='specific-category')
]