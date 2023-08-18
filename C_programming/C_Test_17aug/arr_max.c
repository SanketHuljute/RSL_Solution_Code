#include<stdio.h> 
void largestNum(int arr[],int size); 
int main() 
{     
    int arr[5]={1,4,6,2,3};     
    largestNum(arr,5);     
    return 0; 
    }  
void largestNum(int arr[],int size) 
{     
    int max=arr[0];     
    for (int i = 0; i<size; i++)     
    {         
        if(arr[i]>max)         
        {            
             max=arr[i];         
        }     
    }          
    printf("Largest number is: %d",max);
}