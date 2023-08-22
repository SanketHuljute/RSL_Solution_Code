//Check a number is palidrome or not


package section_2;

import java.util.Scanner;

public class Assg_6 {

	public static void main(String[] args) {
    System.out.println("Enter the number: ");
		
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		int n=num;
		int rem;
		int revese=0;
		while(num != 0)
		{
			rem = num%10; //121
			revese = 10*revese + rem;
			num= num/10;
			
		}
		
		if(n == revese)
		{
			System.out.println("Palindrome");
		}
		else
		{
			System.out.println("Not Palindrome");
		}
		

	}

}

