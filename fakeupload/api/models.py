from django.db import models

class Files(models.Model):
    uploader = models.CharField(max_length=25)
    filename =  models.CharField(max_length=50)
    file = models.FileField(upload_to='imgs/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.filename
