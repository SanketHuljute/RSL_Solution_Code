#include<stdio.h>
// Sum of first n natural number.
int main()
{
int n;
printf("Enter the number: ");
scanf("%d",&n);

int sum=0;
for (int i = 0; i <= n; i++)
{
   sum+=i;
}
printf("Sum of %d number is %d .\n",n,sum);

for (int i = n; i >= 1; i--)
{
    printf("%d\n",i);
}

return 0;
}