package section_5;


public class FinalVariableDemo {

	final int speed=100;
		
	public static void main(String[] args) {
	
		FinalVariableDemo fm=new FinalVariableDemo();
		fm.speed=200;// incorrect, compile time error
		
		System.out.println(fm.speed);

	}

}
