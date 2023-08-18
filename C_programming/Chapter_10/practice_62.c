//Write a program to input student information from a
// user and enter it to a file.

#include<stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("Student.txt","w");

    char name[100];
    int age;
    float cgpa;

    printf("Enter the name of Student:");
    scanf("%s",&name);

    printf("Enter the age of Student:");
    scanf("%d",&age);

    printf("Enter the CGPA of Student:");
    scanf("%f",&cgpa);

fprintf(fptr, "%s\n", name);
fprintf(fptr, "%d\n", age);
fprintf(fptr, "%f\n", cgpa);

    fclose(fptr);
    return 0;
}