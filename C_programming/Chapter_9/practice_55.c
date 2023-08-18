//write program to store the 3 student data
#include<stdio.h>
#include<string.h>

struct student
{
    int roll;
    float cgpa;
    char name[100];
};

int main()
{
    struct student s1;
    s1.roll=101;
    s1.cgpa=7.45;
    strcpy(s1.name,"Ram");
    printf("Name is: %s\n",s1.name);
    printf("Roll no is: %d\n",s1.roll);
    printf("CGPA : %f\n",s1.cgpa);
    printf("\n");

    struct student s2;
    s2.roll=102;
    s2.cgpa=8.65;
    strcpy(s2.name,"Sham");
    printf("Name is: %s\n",s2.name);
    printf("Roll no is: %d\n",s2.roll);
    printf("CGPA : %f\n",s2.cgpa);
    printf("\n");

    struct student s3;
    s3.roll=103;
    s3.cgpa=9.45;
    strcpy(s3.name,"Kam");
    printf("Name is: %s\n",s3.name);
    printf("Roll no is: %d\n",s3.roll);
    printf("CGPA : %f\n",s3.cgpa);
    printf("\n");
    
    return 0;
}