#include<stdio.h>
#include<string.h>

struct student{
    int roll;
    char name[100];
    float cgpa;
};
int main()
{
    struct student s1={ 1000, "Ram", 9.99};

    struct student *ptr = &s1;
 printf("The roll number is %d\n",(*ptr).roll);
 printf("The roll number is %d\n",ptr->roll);


    printf("The name is %s\n",s1.name);
    printf("The roll number is %d\n",s1.roll);
    printf("The cgpa is %f\n", s1.cgpa);
    return 0;
}