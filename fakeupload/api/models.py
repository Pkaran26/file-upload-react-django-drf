from django.db import models

class Files(models.Model):
    file = models.FileField(upload_to='imgs/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.uploaded_at
