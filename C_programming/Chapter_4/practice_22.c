#include<stdio.h>
int main()
{
//iterator counter
int n;
printf("Enter the number: ");
scanf("%d",&n);
for(int i=10;i>0;i--)
{
    printf("%d \n",i*n);
}
return 0;
}