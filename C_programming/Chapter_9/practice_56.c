#include<stdio.h>
#include<string.h>

typedef struct address
{
    int house_no;
    int blcok;
    char city[100];
    char state[100];
} add;

void printAdd(struct address add);

int main()
{
    struct address add[5];
    printf("Enter info of 1st person: ");
    scanf("%d",&add[0].house_no);
    scanf("%d",&add[0].blcok);
    scanf("%s",&add[0].city);
    scanf("%s",&add[0].state);

    printf("Enter info of 2nt person: ");
    scanf("%d",&add[1].house_no);
    scanf("%d",&add[1].blcok);
    scanf("%s",&add[1].city);
    scanf("%s",&add[1].state);

    printf("Enter info of 3rd person: ");
    scanf("%d",&add[2].house_no);
    scanf("%d",&add[2].blcok);
    scanf("%s",&add[2].city);
    scanf("%s",&add[2].state);

    printf("Enter info of 4th person: ");
    scanf("%d",&add[3].house_no);
    scanf("%d",&add[3].blcok);
    scanf("%s",&add[3].city);
    scanf("%s",&add[3].state);

    printf("Enter info of 5th person: ");
    scanf("%d",&add[4].house_no);
    scanf("%d",&add[4].blcok);
    scanf("%s",&add[4].city);
    scanf("%s",&add[4].state);

    printAdd(add[0]);
    printAdd(add[1]);
    printAdd(add[2]);
    printAdd(add[3]);
    printAdd(add[4]);
    
    return 0;
}

void printAdd(struct address add)
{ 
    printf("Address is: %d, %d, %s, %s\n",add.house_no, add.blcok, add.city, add.state);
}