//Write a function to calculate the sum, product & average of 2 numbers. Print that average in th main function.
#include<stdio.h>

void doWork(int a,int b,int *sum, int *prod, int *avg);

int main()
{
    int a=3;
    int b=5;
    int sum,prod,avg;
    doWork(a,b,&sum,&prod,&avg);

    printf("Sum = %d, prod = %d ,avg= %d \n",sum,prod,avg);
    return 0;
}

void doWork(int a,int b, int *sum, int *prod, int *avg)
{
    *sum = a+b;
    *prod = a*b;
    *avg =(a+b)/2;
}