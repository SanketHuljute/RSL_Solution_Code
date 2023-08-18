//Write a program to read integers from a files.
#include<stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("new.txt","r");

    int i;
    fscanf(fptr,"%d",&i);
    printf("Integer is: %d\n",i);

    fscanf(fptr,"%d",&i);
    printf("Integer is: %d\n",i);

    fscanf(fptr,"%d",&i);
    printf("Integer is: %d\n",i);

    fscanf(fptr,"%d",&i);
    printf("Integer is: %d\n",i);
    fclose(fptr);
}