#include<stdio.h>
#include<string.h>

struct student{
    int roll;
    char name[100];
    float cgpa;
};
void printInfo(struct student s1);

int main()
{
    struct student s1 = {11, "Kon", 8.88};
    printInfo(s1);
    return 0;
}

void printInfo(struct student s1)
{
    printf("Student Information: \n");
    printf("The name is %s\n",s1.name);
    printf("The roll number is %d\n",s1.roll);
    printf("The cgpa is %f\n", s1.cgpa);
}