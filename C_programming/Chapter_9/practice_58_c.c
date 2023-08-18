//Create a structure to store complex numbers. use arrow oprator

#include<stdio.h>
#include<string.h>

struct complex{
    int real;
    int img;
};


int main()
{
    struct complex number1 = {5, 10};
    struct complex *ptr = &number1;
    printf("real part = %d\n", ptr->real);
    printf("Img part = %d\n",ptr->img);
    return 0;
}


