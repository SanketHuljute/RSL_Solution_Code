//write program  until user not n=enter the odd number
#include<stdio.h>
int main()
{
//iterator counter
int n;
// printf("Enter the number: ");
// scanf("%d ",&n);
// if(n%2 ==0)
// {
//     printf("%d",n);
// }
// else
// {
//    if(n%2 !=0){ break; } 
// }



do
{
    printf("Enter the number: ");
 scanf("%d",&n);
 printf("%d\n",n);
 if(n%2 !=0)
 {
     break;
 }

} while (1);
printf("Thank You");

return 0;
}