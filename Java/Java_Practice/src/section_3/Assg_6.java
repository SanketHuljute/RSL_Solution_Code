//Write a program count multiples of a number in an array
package section_3;

public class Assg_6 {

	static int multiNum(int arr[], int n)
	{
		int cnt=0;
		for(int i=0; i<arr.length; i++)
		{
			if(arr[i]%n == 0)
			{
				cnt++;
			}
		}
		return cnt;
	}
	public static void main(String[] args) {
		
		 int arr[] = {11, 23, 15, 1, 25, 35, 30};
		 int multiple = multiNum(arr, 5);
		 System.out.println("The multiple number count is :"+multiple);

	}

}
