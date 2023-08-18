//Write functions to calculate area of a square, a circle & a rectangle.
#include<stdio.h>

float areaSquare(float side);
float areaCircle(float rad);
float areaRectangle(float a, float b);
int main()
{
    float a=0.5;
    float b=10.0;
    float side=5;
    float rad=5;

    printf("area is : %f\n",areaRectangle(a,b));
    printf("area is : %f\n",areaSquare(side));
    printf("area is : %f",areaCircle(rad));
    return 0;
}

float areaSquare(float side)
{
    return side*side;
}
float areaCircle(float rad)
{
    return 3.14*rad*rad;
}
float areaRectangle(float a,float b)
{
    return a*b;
}