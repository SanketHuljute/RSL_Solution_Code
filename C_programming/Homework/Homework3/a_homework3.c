#include<stdio.h>
int main()
{
    int num,rem;
    printf("Enter the number: ");
    scanf("%d",&num);
     int n=num;
     int sum=0;
     while (num!=0)
     {
    rem=num%10;
    sum+=(rem*rem*rem);
    num=num/10;
     }
     
    
    if(n==sum)
    {
        printf("The number is armstrong.",n);
    }
    else
    {
        printf("The number is not armstrong.",n);
    }
    
}