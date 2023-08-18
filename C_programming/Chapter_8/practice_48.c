#include<stdio.h>

void printString(char arr[]);
int main()
{
    // char firstName[10];
    // scanf("%s", firstName);
    // printf("Your name is  %s",firstName);
    
    
    // char fullName[50];
    // scanf("%s", fullName);
    // printf("Your full name is %s",fullName);
       
    //  char str[50];  
    //    fgets(str,50,stdin);
    //    puts(str);

     char *canChange = "Hello World";
     puts(canChange);
     canChange = "Hello";
     puts(canChange);

     char *canNotChange[] = "Hello World";
     puts(canNotChange);
   // canNotChange = "Helloo";

       return 0;
}