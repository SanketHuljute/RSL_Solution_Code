#include<stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("Odd.txt","w");

    int n;
    printf("Enter the number ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        if(i%2 != 0)
        {
            fprintf(fptr,"%d\t",i);
        }
    }
    
    fclose(fptr);
    return 0;
}