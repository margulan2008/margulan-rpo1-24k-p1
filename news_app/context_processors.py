from .models import Category, Adv


def categories_processor(request):
    categories = Category.objects.all()
    # include ads grouped by position for template rendering (only active ads)
    ads = Adv.objects.filter(active=True).order_by('ordering')
    ads_sidebar = ads.filter(position=Adv.POSITION_SIDEBAR)
    ads_infeed = ads.filter(position=Adv.POSITION_INFEED)
    ads_header = ads.filter(position=Adv.POSITION_HEADER)
    return {
        'categories': categories,
        'ads': ads,
        'ads_sidebar': ads_sidebar,
        'ads_infeed': ads_infeed,
        'ads_header': ads_header,
    }