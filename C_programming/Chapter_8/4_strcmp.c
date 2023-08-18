#include<stdio.h>
#include <string.h>


int main()
{
    char firstStr[] = "Hello";
    char secStr[] = "NewStr";
    printf("%d\n", strcmp(firstStr,secStr));
     printf("%d", strcmp(secStr,firstStr));
    return 0;
}