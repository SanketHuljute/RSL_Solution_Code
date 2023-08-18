#include<stdio.h>
#include <string.h>
int countLength(char arr[]);

int main()
{
    char firstStr[100] = "Hello";
    char secStr[] = "NewStr";
    strcat(firstStr,secStr);
   puts(firstStr);
    return 0;
}