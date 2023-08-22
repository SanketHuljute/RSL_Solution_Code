package section_3;
import java.util.Arrays;
public class Assg_7 {

	public static void main(String[] args) {

		int a[] = {11, 45, 6, 7, 9};
		int b[] = {11, 43, 9 , 1};
		
		boolean result = Arrays.equals(a, b);
		
		if(result == true)
		{
			System.out.println("Two array are equal");
		}
		else
		{
			System.out.println("Two array are not equal");
		}
		
		int c[] = {11, 33, 44};
		int d[] = {11, 33, 44};
		
		boolean res = true;
		if(c.length == b.length)
		{
			for(int i=0; i<c.length; i++)
			{
				if(a[i] != b[i])
				{
					res = false;
				}
			}
		}
		else
		{
			res = false;
		}
		
		if(res == true)
		{
			System.out.println("Arrays are equal");
		}
		else
		{
			System.out.println("Arrays are not equal");
		}

	}

}
