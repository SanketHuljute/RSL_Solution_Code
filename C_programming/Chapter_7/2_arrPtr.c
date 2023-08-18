
#include<stdio.h>

void printAddress(int n);

int main()
{
    // //CASE I
    // int age=22;
    // int *ptr = &age;
    // printf("ptr = %u\n ",ptr);
    // ptr++;
    // printf("ptr = %u\n ",ptr);
    // ptr--;
    // printf("ptr = %u\n ",ptr);
    
    printf("\n");
    //CASE II
    // float price =100.00;
    // float *ptr = &price;
    // printf("Ptr = %u\n",ptr);
    // ptr++;
    // printf("ptr = %u\n",ptr);
    // ptr--;
    // printf("ptr = %u\n",ptr);

printf("\n");

    //CASE III
    char star = '*';
    char *ptr = &star;
    printf("Ptr = %u\n",ptr);
    ptr++;
    printf("ptr = %u\n",ptr);
    ptr--;
    printf("ptr = %u\n",ptr);

    return 0;
}



