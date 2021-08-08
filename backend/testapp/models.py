from django.db import models

# Create your models here.
class EquityModel(models.Model):
    ticker = models.CharField(max_length=10)
    description = models.TextField()
    pe = models.FloatField()

    def _str_(self):
        return self.ticker