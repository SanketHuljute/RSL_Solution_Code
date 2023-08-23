//Write the program to get a substring of a given string between two specific index
package section_4_String;
import java.util.*;
public class Assg_5 {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("String Is: ");
		String str = sc.next();
		
		String s1 = str.substring(0, 4);
		String s2 = str.substring(1,4);
		String s3 = str.substring(2,4);
		
		System.out.println("First: "+s1+"\nSecond: "+s2+"\nThird: "+s3	);	
	}

}

