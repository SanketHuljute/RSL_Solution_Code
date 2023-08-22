package section_2;

import java.util.Scanner;

//Write a Java program to find greatest of 3 numbers.
public class Assg_2 {

	public static void main(String[] args) {

		System.out.println("Enter the three number: ");
		
		Scanner sc = new Scanner(System.in);
		int num1= sc.nextInt();
		int num2= sc.nextInt();
		int num3= sc.nextInt();
		
		if(num1 > num2 && num1 > num3)
		{
			System.out.print("Number 1 is greater "+num1);
		}
		else if(num2 > num1 && num2 > num3)
		{
			System.out.print("Number 2 is greater "+num2);
		}
		else
		{
			System.out.print("Number 3 is greater "+num3);
		}
		

	}

}
