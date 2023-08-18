#include<stdio.h> 
#include<math.h>  
void squareRoot(int m); 
int main() 
{     
    int num;     
    printf("Enter the number: ");     
    scanf("%d",&num);     
    squareRoot(num);     
    return 0; 
} 
    void squareRoot(int m) 
    {          
        int n=sqrt(m);     
        printf("Square Root is : %d",n); 
    }