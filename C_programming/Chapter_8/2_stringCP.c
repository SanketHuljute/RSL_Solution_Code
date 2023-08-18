#include<stdio.h>
#include <string.h>
int countLength(char arr[]);

int main()
{
    char oldStr[] = "OldSTR";
    char newStr[] = "NewStr";
    strcpy(newStr,oldStr);
    puts(newStr);
    return 0;
}