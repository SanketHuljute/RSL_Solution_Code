#include<stdio.h>
#include<string.h>

typedef struct student{
    int roll;
    char name[100];
    float cgpa;
} stu;

typedef struct computeengieerstudent{
    int roll;
    char name[100];
    float cgpa;
} coe;
int main()
{
    coe s1;
    s1.roll = 1234;
    s1.cgpa=7.45;
    strcpy(s1.name,"Shradha");

    printf("The name is %s\n",s1.name);
    printf("The roll number is %d\n",s1.roll);
    printf("The cgpa is %f\n", s1.cgpa);
    return 0;
}