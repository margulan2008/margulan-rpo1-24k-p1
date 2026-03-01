from django.db import models

class Category(models.Model):
    name = models.CharField("Категория атауы", max_length=100)
     
    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField("Жаңалықтың тақырыбы", max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Категория")
    content = models.TextField("Жаңалықтың сипаттамасы")
    image_url = models.CharField("Суреттің URL сілтемесі", max_length=500)
    created_at = models.DateTimeField("Жариялау уақыты мен күні", auto_now_add=True)

    def __str__(self):
        return self.title

class Adv(models.Model):
    name = models.CharField("Компания аты", max_length=255, default="Company name")
    # new: allow image uploads via admin (will be stored in MEDIA_ROOT/ads/)
    image = models.ImageField("Изображение объявления", upload_to='ads/', blank=True, null=True)
    # optional destination link for the ad
    link = models.URLField("Ссылка (при клике)", blank=True, null=True)
    # legacy field kept for compatibility (optional)
    image_url = models.CharField("URL сілтемесі", max_length=500, blank=True, null=True)
    # where the ad should appear on the site
    POSITION_SIDEBAR = 'sidebar'
    POSITION_INFEED = 'infeed'
    POSITION_HEADER = 'header'
    POSITION_CHOICES = [
        (POSITION_SIDEBAR, 'Sidebar'),
        (POSITION_INFEED, 'In-feed'),
        (POSITION_HEADER, 'Header'),
    ]
    position = models.CharField('Расположение', max_length=32, choices=POSITION_CHOICES, default=POSITION_SIDEBAR)
    active = models.BooleanField('Активно', default=True)
    ordering = models.IntegerField('Порядок', default=0)

    def __str__(self):
        return self.name