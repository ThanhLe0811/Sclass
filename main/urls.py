from django.urls import path
from . import views

urlpatterns = [
    # Teacher
    path("teacher/", views.TeacherList.as_view()),
    path("teacher/<int:pk>/", views.TeacherDetail.as_view()),
    path("teacher-login", views.teacher_login),
    # Category
    path("category/", views.CategoryList.as_view()),
    #course
    path("course/", views.CourseList.as_view()),
    #Chapter
    path("chapter/", views.ChapterList.as_view()),
    #Specific Course Chapter
    path("course-chapters/<int:course_id>", views.CourseChapterList.as_view()),
    # Teacher course
    path("teacher-course/<int:teacher_id>", views.TeacherCourseList.as_view()),
]   