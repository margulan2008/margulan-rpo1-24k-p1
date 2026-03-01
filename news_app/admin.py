from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Post, Adv


class AdvAdmin(admin.ModelAdmin):
	list_display = ('name', 'position', 'active', 'ordering', 'preview', 'link')
	list_filter = ('position', 'active')
	readonly_fields = ('preview',)
	fields = ('name', 'image', 'image_url', 'link', 'position', 'active', 'ordering', 'preview')

	def preview(self, obj):
		url = None
		if obj and obj.image:
			url = obj.image.url
		elif obj and obj.image_url:
			url = obj.image_url
		if url:
			return format_html('<img src="{}" style="max-width:240px;max-height:120px;border-radius:6px;"/>', url)
		return "(no image)"

	preview.short_description = 'Preview'


admin.site.register(Category)
admin.site.register(Post)
admin.site.register(Adv, AdvAdmin)
