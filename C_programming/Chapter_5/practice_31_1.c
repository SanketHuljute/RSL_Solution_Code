// Factorial of n

#include<stdio.h>

int fact(int n);
int main()
{
    printf("Factorial of n: %d",fact(5));
    return 0;
}

int fact(int n)
{
    if (n==1)
    {
        return 1;
    }
    int factNm = fact(n-1);
    int f = factNm * n;
    return f; 
}