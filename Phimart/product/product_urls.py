from django.urls import path
from product import views

urlpatterns = [
    path('', views.ListProduct.as_view(), name='view-product'),
    path('<int:id>/', views.ProductDetails.as_view(), name='specific-list')
]
