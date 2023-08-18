#include<stdio.h>
//Write the program to check if the number is divisible by 2 or not
int main()
{
    int x;
    printf("Enter a value : ");
    scanf("%d",&x);

    printf("Divisible or not %d :", x%2 == 0);
    return 0;
}