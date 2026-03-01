from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('news/read/<int:pk>/', views.read_news_page, name='read_news_page'),
    path('news/search/', views.search_page, name='search_page'),
    path('news/search/results/', views.search_results, name='search_results'),
    path('news/all/', views.all_news_page, name='all_news_page'),
    path('news/categories/<int:pk>/', views.news_by_category, name='news_by_category'),
    path('archive/', views.archive_page, name='archive_page'),
    path('about/', views.about_page, name='about_page'),
    path('contacts/', views.contacts_page, name='contacts_page'),
    path('login/', views.login_page, name='login_page'),
    path('logout/', views.logout_view, name='logout'),
]