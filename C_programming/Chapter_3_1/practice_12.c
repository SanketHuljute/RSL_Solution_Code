#include<stdio.h>
int main()
{
    char ch;
    printf("Enter the character: ");
    scanf("%ch",&ch);

    if(ch >='A' && ch <='Z')
    {
        printf("CAPITAL LETTER");
    }
    else if(ch >='a' && ch <='z')
    {
        printf("small letter")  ;
    
    }
    else
    {
        printf("Not Letter");
    }
    
    
    return 0;
}