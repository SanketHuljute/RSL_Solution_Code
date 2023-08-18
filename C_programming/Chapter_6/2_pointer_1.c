#include<stdio.h>

int main()
{
    int age=22;
    int *ptr = &age;
    int _age = *ptr;

    

  //value 
    printf("%d\n",age);

//pointer value 
    printf("%d\n",*ptr);

    //adderes of age value
    printf("%d\n",*(&age));

    
    return 0;
}