// Recursion print hello world 5 times
#include<stdio.h>
#include<math.h>

void printHW(int count);
int main()
{
    printHW(5);
    return 0;
}

//recursion function
void printHW(int count)
{
    if(count==0)
    {
        return;
    }
printf("Hello World \n");
printHW(count-1);
}