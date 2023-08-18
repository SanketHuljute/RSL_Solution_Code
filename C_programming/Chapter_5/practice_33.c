//Write a function to calculate percentage of a student from marks in science,math & sanskrite.
#include<stdio.h>

int calPercentage(int science,int math, int sanskrit);
int main()
{
    int sc=98;
    int math= 95;
    int sanskrit = 99;
    printf("percentage is : %d ",calPercentage(sc,math,sanskrit));
    return 0;
}

int calPercentage(int science , int math, int sanskrit)
{
    return((science+math+sanskrit)/3);
}