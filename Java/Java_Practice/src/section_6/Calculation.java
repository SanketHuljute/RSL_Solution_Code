package section_6;


public class Calculation {
	
	int x=100,y=200;

	int sum(int a, int b)
	{
	x=a;
	y=b;
	return(x+y);
	}
	
	
	public static void main(String[] args) {
	
		Calculation cal=new Calculation();
		
		//int res=cal.sum();
		//System.out.println(cal.sum());
	
		int res=cal.sum(10, 20);
		System.out.println(res);
	}

}

