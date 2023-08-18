#include<stdio.h>

int main()
{
    int x;
    int *ptr;

    ptr = &x;
    *ptr = 0;  //x=0

    printf("x = %d\n", x);  // 0
    printf("*ptr = %d\n", *ptr); //0

    *ptr += 5; // x=x+5
    printf("x = %d\n", x);
    printf("*ptr = %d\n", *ptr);

    (*ptr)++;
    printf("x = %d\n", x);
    printf("*ptr = %d\n", *ptr);
    
    return 0;
}