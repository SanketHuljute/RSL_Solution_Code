#include<stdio.h>
int main()
{
    int age=19;
    printf("Emetr the age: ");
    scanf("%d",&age);

    if(age>18)
    {
        printf("Adult \n");
        printf("They can vote. \n");
        printf("They can drive.");
    }
    else
    {
        printf("Not adult. \n");
    }
    
    return 0;
}