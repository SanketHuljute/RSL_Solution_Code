#include<stdio.h>
#include<string.h>

struct student{
    int roll;
    char name[100];
    float cgpa;
};
int main()
{
    struct student s1;
    s1.roll = 1234;
    s1.cgpa=7.45;
    strcpy(s1.name,"Shradha");

    printf("The name is %s\n",s1.name);
    printf("The roll number is %d\n",s1.roll);
    printf("The cgpa is %f\n", s1.cgpa);
    return 0;
}