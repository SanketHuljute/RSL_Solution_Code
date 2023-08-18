//print 1 to 10 number except 6
#include<stdio.h>
int main()
{
//iterator counter
for(int i=1;i<=10;i++)
{
    if(i==6)
    {
        continue;
    }
    printf("%d \n",i);
}
return 0;
}