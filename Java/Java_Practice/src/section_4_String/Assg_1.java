//Write the program to reverse the string
package section_4_String;
import java.util.*;
public class Assg_1 {

	public static void main(String[] args) {
		
		System.out.println("Input String Is: ");
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		String reverse = "";
		for(int i=str.length()-1; i>=0; i--)
		{
			reverse = reverse + str.charAt(i);
		}
		System.out.println("Reverse  String Is: "+reverse);
	}

}
