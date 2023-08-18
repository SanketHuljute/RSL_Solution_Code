#include<stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("ram.txt","w");
    
    fprintf(fptr, "%c", 'M');
    fprintf(fptr, "%c", 'A');
    fprintf(fptr, "%c", 'N');
    fprintf(fptr, "%c", 'O');
    fprintf(fptr, "%c", 'P');

    fprintf(fptr, "%d", 143);
    
    fclose(fptr);
    return 0;
}