package section_2;
import java.util.*;

//Write a Java program to check a number it is positive or negative.

public class Assg_1 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		
		if(num > 0)
		{
			System.out.print("Number is Positive.");
		}
		else if(num < 0)
		{
			System.out.print("Number is Negative.");
		}
		else if(num == 0)
		{
			System.out.print("Number is Zero.");
		}
			

	}

}
