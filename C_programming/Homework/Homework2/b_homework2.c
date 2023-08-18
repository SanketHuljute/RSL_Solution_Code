/*Write a program to check if given character is digit
or not.*/

#include<stdio.h>
int main()
{
   char ch;
   printf("Enetr the character: ");
   scanf("%c",&ch);

   if(ch>='0' && ch<='9')
    {
    printf("Character is digit");
    }
else
    {
        printf("Charater is not digit");
    }
    
    return 0;
}