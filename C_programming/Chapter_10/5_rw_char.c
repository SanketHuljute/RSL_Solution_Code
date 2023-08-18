#include<stdio.h>

int main()
{
    FILE *fptr;
    //fptr = fopen("ram.txt","r");
    fptr = fopen("radha.txt","w");
    
    
    // printf("%c\n",fgetc(fptr));
    // printf("%c\n",fgetc(fptr));
    // printf("%c\n",fgetc(fptr));
    // printf("%c\n",fgetc(fptr));
    // printf("%c\n",fgetc(fptr));

    fputc('M',fptr);
    fputc('O',fptr);
    fputc('N',fptr);
    fputc('K',fptr);
    fputc('E',fptr);
    fputc('Y',fptr);

    
    fclose(fptr);
    return 0;
}