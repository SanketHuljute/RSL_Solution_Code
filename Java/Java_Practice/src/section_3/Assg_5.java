//Write a program to find greatest and smallest element in an array.

package section_3;

public class Assg_5 {

	public static void main(String[] args) {
		int arr[] = {10, 13, 5, 6, 1, 10};
		
		int max= arr[0];
		int min= arr[0];
		
		
		for(int i=0; i<arr.length; i++)
		{
			if(arr[i] > max)
			{
				max= arr[i];
			}
		}
		System.out.println("Maximum element is: "+ max);
		

		for(int i=0; i<arr.length; i++)
		{
			if(arr[i] < min)
			{
				min= arr[i];
			}
		}
		System.out.println("Minimum element is: "+ min);


	}

}
