//Write the program to reverse the given sentence.
package section_4_String;
import java.util.*;
public class Assg_7 {

	public static void main(String[] args) {
		
		System.out.println("The given sentence is: ");
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		
		String arr[] = null;
		arr = str.split(" ");
		
		for(int i=0; i<arr.length; i++)
		{
			String s1 = new String (arr[i]);
			
			for(int j=s1.length()-1; j>=0; j--)
			{
				System.out.print(s1.charAt(j));
			}
			System.out.print(" ");
		}
		
		

	}

}


