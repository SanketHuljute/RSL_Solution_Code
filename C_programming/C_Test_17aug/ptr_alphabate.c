#include<stdio.h>
int main()
{
    char ch = 'A';
    char *ptr = &ch;

    for(int i = 0; i<26; i++)
    {
        printf("%c\t", *ptr);
        ch++;
    }
    return 0;
}