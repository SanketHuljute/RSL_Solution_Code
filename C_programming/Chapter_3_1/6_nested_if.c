#include<stdio.h>
int main()
{
    int num ;
    printf("Enter the number: ");
    scanf("%d", &num);

if (num>=0)
{
    printf("Number is positivs.\n");
    if(num%2 == 0 )
    {
        printf("Number is even.");
    }
    else
    {
        printf("Number is odd.");
    }
    
}
else
{
    printf("Number is negative.");
}



    return 0;

}    