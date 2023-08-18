#include<stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("Sum.txt","r");

    int a; // 2
    fscanf(fptr, "%d", &a);

    int b; // 3
    fscanf(fptr, "%d", &b);

    fclose(fptr);

    fptr = fopen("Sum.txt","w");
    fprintf(fptr, "%d", a+b);

    return 0;
}