// write a program to enter price of 3 items & print their
// final cost with gst.
#include<stdio.h>

void printAddress(int n);

int main()
{
    float price[3];
    printf("Enter three price : ");
    scanf("%f",&price[0]);

    scanf("%f",&price[1]);

    scanf("%f",&price[2]);

    printf("Toal price 1st = %f \n", price[0]+(0.18*price[0]));
    printf("Toal price 2nd = %f \n", price[1]+(0.18*price[1]));
    printf("Toal price 3rd = %f \n", price[2]+(0.18*price[2]));

    return 0;
}



