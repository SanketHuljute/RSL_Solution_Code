package section_5;



final class Bike
{
	final void run()
	{
		System.out.println("Running.............");
	}
}


class Honda extends Bike
{
	void run()// incorrect, compile time error
	{
		System.out.println("Started..............");
	}
}


public class FinalMethodDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
