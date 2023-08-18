#include<stdio.h>
int main()

{
    int marks;
    printf("Enter the marks: ");
    scanf("%d" , &marks);

    if (marks<30)
    {
        printf("Grade c");
    }
    else if(marks >=30 && marks < 70)
    {
        printf("Grade B");
    }
    else if(marks >=70 && marks < 90)
    {
        printf("Grade A");
    }
    else if(marks >=90 && marks <=100)
    {
        printf("Grade A+");
    }
    
    
    
    return 0;
}