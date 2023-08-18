//write a function to count the occurrence of vowels in a
// string

#include<stdio.h>
#include <string.h>

int countVowels(char str[]);
int main()
{
    char str [] = "Ram";
    printf("The vowles are : %d",countVowels(str));
    return 0;
}

int countVowels(char str[])
{
  int cnt=0;
  for (int i = 0; str[i] != '\0'; i++)
  {
      if(str[i]=='a' ||  str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
      {
          cnt++;
      } 
      return cnt;
  }
    
}