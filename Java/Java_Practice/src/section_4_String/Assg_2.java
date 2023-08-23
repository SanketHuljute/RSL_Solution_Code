//Write the program to compare two string, ignore cAse differnce
package section_4_String;
import java.util.*;
public class Assg_2 {

	public static void main(String[] args) {
		
		System.out.println("First String Is: ");
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		
		System.out.println("Second String Is: ");
		String str1 = sc.next();
		
		System.out.println(	str.equalsIgnoreCase(str1));	
	}

}
