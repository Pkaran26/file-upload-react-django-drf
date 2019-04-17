from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import *
import json

class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, format=None):
        if 'file' not in request.data and 'payload' not in request.data:
            raise ParseError("Empty content")

        f = request.data['file']
        data = json.loads(request.data['payload'])
        print(data)
        obj = Files.objects.create(uploader= data['name'], filename=f.name, file=f)
        obj.save()
        
        print()
        #mymodel.my_file_field.save(f.name, f, save=True)
        return Response(status=status.HTTP_201_CREATED)
