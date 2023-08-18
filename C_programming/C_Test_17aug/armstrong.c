#include<stdio.h> 
void armStrong(int n); 
int main() 
{
 int n;
    printf("Enter the number: ");     
    scanf("%d",&n);     armStrong(n);    
    return 0; 
}  
void armStrong(int n) 
{     
    int num=n;     
    int rem;     
    int result=0;     
    while (n>0)  //371     
    {        rem=n%10;         
             result=result+(rem*rem*rem);
             n=n/10;     
    }     
    if(num==result)     
    {         
        printf("The number is Armstrong.");
    }     
    else     
    {         
        printf("The number is not Armstrong.");
    } 
    }


    