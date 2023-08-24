package section_5;


class Bank
{
	double rateOfIntrest()
	{
		return 0;
	}
	
}

class SBI extends Bank
{
	double rateOfIntrest()
	{
		return 10.5;
	}
}

class ICICI extends Bank
{
	double rateOfIntrest()
	{
		return 12.5;
	}
}

public class MethodOverridingDemo {

	public static void main(String[] args) {
		
		SBI sbiobj=new SBI();
		System.out.println(sbiobj.rateOfIntrest());
		
		
		ICICI iciciobj=new ICICI();
		System.out.println(iciciobj.rateOfIntrest());
		
	}

}












