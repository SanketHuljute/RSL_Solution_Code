#include<stdio.h>
int main()
{
   int a,b;
   printf("Enter the a value ");
   scanf("%d" , &a);
   
   printf("Enter the b value ");
   scanf("%d" , &b);

   int sum = a+b;
   printf("The addition of %d and %d is number %d",a,b,sum);
    return 0;
}