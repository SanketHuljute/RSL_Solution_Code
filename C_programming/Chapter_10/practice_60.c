#include<stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("NewText.txt","r");
    if(fptr == NULL)
    {
        printf("File Doesn't exists\n");
    }
    else
    {
        fclose(fptr);
    }
    
    return 0;
}