#include<stdio.h>
#include <string.h>
//Find the salted from a password entered by user
//if the salt "123" & added at the end.

void salting(char password[]);
int main()
{
    char password[100];
    scanf("%s",password);
    salting(password);
    return 0;
}

void salting(char password[])
{
    char salt[] = "123";
    char newPass[200];

    strcpy(newPass,password); //newpass = "test"
    strcat(newPass,salt); //newPass = "test" +"123";
    puts(newPass);
}