/*Write a program to check if the given number is a
natural number*/
#include<stdio.h>
int main()
{
    int num=1;
    printf("Enter the number: ");
    scanf("%d",&num);

    if(num>=1)
    {
        printf("The number is natural number.");
    }
    else
    {
        printf("The number is not natural number.");
    }
    
}