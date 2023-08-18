#include<stdio.h>
int main()
{
//iterator counter
int n;
printf("Enter the number: ");
scanf("%d",&n);
int fact=1;
for(int i=1;i<=n;i++)
{
    fact *= i;
}
printf("%d \n",fact);
return 0;
}