from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .serializers import TeacherSerializer,CategorySerializer,CourseSerializer,ChapterSerializer
from rest_framework import permissions
# from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from . import models

# Create your views here.
class TeacherList(generics.ListCreateAPIView):
        # authentication_classes = [SessionAuthentication, BasicAuthentication]
        queryset=models.Teacher.objects.all()
        serializer_class = TeacherSerializer
        # permission_classes=[permissions.IsAuthenticated]
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
        # authentication_classes = [SessionAuthentication, BasicAuthentication]
        queryset=models.Teacher.objects.all()
        serializer_class = TeacherSerializer
        # permission_classes=[permissions.IsAuthenticated]
@csrf_exempt
def teacher_login(request):
        email=request.POST['email']
        password = request.POST['password']
        try:
                teacherData=models.Teacher.objects.get(email=email,password=password)
        except models.Teacher.DoesNotExist:
                teacherData=None
        if teacherData:
                return JsonResponse({'bool':True,'teacher_id':teacherData.id})
        else:
                return JsonResponse({'bool':False})
class CategoryList(generics.ListCreateAPIView):
        # authentication_classes = [SessionAuthentication, BasicAuthentication]
        queryset=models.CourseCategory.objects.all()
        serializer_class = CategorySerializer
        # permission_classes=[permissions.IsAuthenticated]

#Course
class CourseList(generics.ListCreateAPIView):
        # authentication_classes = [SessionAuthentication, BasicAuthentication]
        queryset=models.Course.objects.all()
        serializer_class = CourseSerializer
        # permission_classes=[permissions.IsAuthenticated]
# Specific Teacher Course
class TeacherCourseList(generics.ListAPIView):
        # authentication_classes = [SessionAuthentication, BasicAuthentication]
        serializer_class = CourseSerializer
        # permission_classes=[permissions.IsAuthenticated]
        def get_queryset(self):
                teacher_id=self.kwargs['teacher_id']
                teacher=models.Teacher.objects.get(pk=teacher_id)
                return models.Course.objects.filter(teacher=teacher)
#Chapter List
class ChapterList(generics.ListCreateAPIView):
        # authentication_classes = [SessionAuthentication, BasicAuthentication]
        queryset=models.Chapter.objects.all()
        serializer_class = ChapterSerializer
        # permission_classes=[permissions.IsAuthenticated]

class CourseChapterList(generics.ListAPIView):
        # authentication_classes = [SessionAuthentication, BasicAuthentication]
        serializer_class = ChapterSerializer
        # permission_classes=[permissions.IsAuthenticated]
        def get_queryset(self):
                course_id=self.kwargs['course_id']
                course=models.Course.objects.get(pk=course_id)
                return models.Chapter.objects.filter(course=course)
