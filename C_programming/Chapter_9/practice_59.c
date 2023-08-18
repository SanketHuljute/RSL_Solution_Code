//make a structer to store Bank Account Information of a
//customer of ABC Bank . Also make an alias for it.

#include<stdio.h>
#include<string.h>

typedef struct bankAccount {
  int acc_no;
  char name[100];  
} acc;


int main()
{
    acc acc1 = {123,"Ram"};
    acc acc2 = {222, "Sham"}; 
    acc acc3 = {333, "Kiran"}; 

    printf("Account no = %d\n", acc1.acc_no);
    printf("Name: %s", acc1.name);
    return 0;
}

