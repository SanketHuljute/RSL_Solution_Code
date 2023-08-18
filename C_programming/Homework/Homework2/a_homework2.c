//Write a program to print the average of 3 numbers.
#include<stdio.h>
int main()
{
    float a,b,c;
    printf("Enter the  number a: ");
    printf("Enter the  number b: ");
    printf("Enter the  number a: ");
    scanf("%f %f %f",&a,&b,&c);

    float avg=(a+b+c)/3;
    printf("The avg of three number is : %f",avg);

    return 0;
}
