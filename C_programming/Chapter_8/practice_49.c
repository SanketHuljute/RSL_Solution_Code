//Make a program that inputs user's name & prints its length.

#include<stdio.h>
#include <string.h>
int countLength(char arr[]);

int main()
{
     char name[50] ;
     fgets(name, 50, stdin);

     printf("Length is : %d",countLength(name));
    int length = strlen(name);
    printf("Str length is: %d",length);
    return 0;
}

int countLength(char arr[])
{
    int count=0;
    for(int i=0;arr[i] != '\0'; i++)
    {
        count++;
    }
    return count-1;
}