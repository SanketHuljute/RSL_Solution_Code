#include<stdio.h>
//Write 2 function to print "Hello" and second to print "Good Bye"
void printHello();
void printGoodBye();

int main()
{
    printHello();
    printGoodBye(); 
    return 0;
}


void printHello()
{
    printf("Hello...!\n");
}

void printGoodBye()
{
    printf("Good Bye..!");
}