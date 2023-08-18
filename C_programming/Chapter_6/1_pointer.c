#include<stdio.h>

int main()
{
    int age=22;
    int *ptr = &age;
    int _age = *ptr;

    printf("%d\n", _age);

    // address print
    printf("%p\n",&age);
    printf("%u\n",&age);

    //ptr value
    printf("%u\n",ptr);

    //ptr address value
    printf("%p\n",&ptr);
    return 0;
}