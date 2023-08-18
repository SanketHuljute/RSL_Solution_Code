//Write a program to print the smallest number of two.
#include<stdio.h>
int main()
{
  float num1,num2;
  printf("Enetr the first number: ");
  scanf("%f",&num1);

   printf("Enetr the second number: ");
  scanf("%f",&num2);

  if(num1>num2)
  {
      printf("First number is greater than second.");
  }
  else
  {
      printf("Second number is greater than first.");
  }
  
}