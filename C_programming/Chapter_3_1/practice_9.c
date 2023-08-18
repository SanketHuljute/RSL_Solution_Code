#include<stdio.h>
int main()

{
    int marks;
    printf("Enter the marks: ");
    scanf("%d" , &marks);

    if (marks>30)
    {
        printf("Pass");
    }
    else
    {
        printf("Fail.");
    }
    
    
    return 0;
}
