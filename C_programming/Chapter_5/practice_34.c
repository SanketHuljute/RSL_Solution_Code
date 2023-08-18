#include<stdio.h>

int fab(int n);
int main()
{
   printf("%d", fab(6));
    return 0;
}

int fab(int n)
{
    if(n==0)
    {
        return 0;
    }
    if(n==1)
    {
        return 1;
    }
    int fabNm1= fab(n-1);
    int fabNm2= fab(n-2);
    int fabN = fabNm1 + fabNm2; 
   // printf("Fab of %d is : %d \n",n,fabN);
    return fabN;
}