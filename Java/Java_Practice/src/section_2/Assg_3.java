
//Write a program in Java to display the multiplication table of 5. 
//
//Expected Output :
//5 X 0 = 0
//5 X 1 = 5
//5 X 2 = 10 
//----------
//------------
//5 X10 = 50 
package section_2;

import java.util.Scanner;

public class Assg_3 {

	public static void main(String[] args) {
    System.out.println("Enter the number: ");
		
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		System.out.println("Multiplication table of number "+num+" is");
		for(int i=1;i<=10;i++)
		{
			System.out.println(num+"*"+i+"="+num*i);
		}

	}

}
