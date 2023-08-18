#include<stdio.h>
int main()
{
    char day;
    printf("Enter the character: ");
    scanf("%ch",&day);

    switch (day)
    {
        case 'm':printf("Monday \n");
        break;

        case 'T':printf("Tuesday \n");
        break;

        case 'w':printf("Wensday \n");
        break;

        case 't':printf("Thursday \n");
        break;

        case 'f':printf("Friday \n");
        break;
        
        case 'S':printf("Sturday \n");
        break;
        
        case 's':printf("Sunday \n");
        break;
        
        default:printf("Not a valid day \n");
        break;
    }
        return 0;
}