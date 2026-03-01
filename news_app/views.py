from django.shortcuts import render, get_object_or_404, redirect
from .models import Post, Category, Adv
from django.db.models import Q
from django.core.paginator import Paginator
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

def home_page(request):
    hot_posts = Post.objects.all().order_by('-created_at')[:4]
    all_posts = Post.objects.all().order_by('-created_at')
    advs = Adv.objects.all()[:4]

    # pagination (show 10 per page)
    paginator = Paginator(all_posts, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    # trending - top 5 latest
    trending = Post.objects.all().order_by('-created_at')[:5]

    context = {
        'hot_posts': hot_posts,
        'posts': page_obj.object_list,
        'advs': advs,
        'is_paginated': page_obj.has_other_pages(),
        'paginator': paginator,
        'page_obj': page_obj,
        'trending': trending,
    }
    return render(request, "index.html", context)

def all_news_page(request):
    posts_list = Post.objects.all().order_by('-created_at')
    paginator = Paginator(posts_list, 12)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context = {
        'posts': page_obj.object_list,
        'is_paginated': page_obj.has_other_pages(),
        'paginator': paginator,
        'page_obj': page_obj,
    }
    return render(request, "all-news.html", context)


def news_by_category(request, pk):
    category = get_object_or_404(Category, pk=pk)
    posts_list = Post.objects.filter(category=category).order_by('-created_at')
    paginator = Paginator(posts_list, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context = {
        'category': category,
        'posts': page_obj.object_list,
        'is_paginated': page_obj.has_other_pages(),
        'paginator': paginator,
        'page_obj': page_obj,
    }
    return render(request, "news-by-category.html", context)


def search_page(request):
    return render(request, "search.html")

def search_results(request):
    query = request.GET.get('q')
    results = []
    if query:
        results = Post.objects.filter(
            Q(title__icontains=query) | Q(content__icontains=query)
        )
    context = {
        'query': query,
        'results': results
    }
    return render(request, "search-results.html", context)

def read_news_page(request, pk):
    post = get_object_or_404(Post, pk=pk)
    context = {
        'post': post
    }
    return render(request, "read-news.html", context)


def archive_page(request):
    """Simple archive page view. Renders archive.html. You can expand it later
    to group posts by month/year if desired."""
    posts_list = Post.objects.all().order_by('-created_at')
    context = {
        'posts': posts_list,
    }
    return render(request, 'archive.html', context)


def about_page(request):
    """Render the About page."""
    return render(request, 'about.html', {})


def contacts_page(request):
    """Render the Contacts page."""
    return render(request, 'contacts.html', {})


def login_page(request):
    """Render and handle the login/register page.

    POST (login): expects fields `username` and `password`. On success the
    user is logged in and redirected to `next` or home. On failure a message
    is shown.
    """
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '')
        next_url = request.POST.get('next') or request.GET.get('next')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f'Вход выполнен: {user.username}')
            return redirect(next_url or 'home_page')
        else:
            messages.error(request, 'Неверное имя пользователя или пароль')

    # GET or failed POST: render the page
    return render(request, 'login.html', {'title': 'Вход'})


def logout_view(request):
    """Log the user out and redirect to home."""
    logout(request)
    messages.info(request, 'Вы вышли из системы')
    return redirect('home_page')
