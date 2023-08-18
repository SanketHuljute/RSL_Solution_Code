//Write a program to convert celsius to fahrenheit.

#include<stdio.h>
#include<math.h>

float convertTemp(float celsius);

int main()
{
    float far = convertTemp(0);
    printf("Far : %f",far);
    return 0;
}

float convertTemp(float celsius)
{
    float far =(celsius *0.18)+32;
    return far;
}