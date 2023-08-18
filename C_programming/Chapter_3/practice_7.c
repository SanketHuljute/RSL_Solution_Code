#include<stdio.h>
int main()
{
    //1
    printf("%d",8^8); //valid
    //2
    int x;
    int y=x; //valid
    //3
    int x,y=x; //invalid
    //4
    char stars = '**'; //invalid
    
    return 0;
}