
#include<stdio.h>

void printAddress(int n);

int main()
{
    int age =22;
    int _age=23;
    int *ptr = &age;
    int*_ptr = &_age;

    printf("Differnce = %u\n",ptr-_ptr);
    _ptr = &age;
    printf("Comparison = %u\n",ptr == _ptr);
    return 0;
}



