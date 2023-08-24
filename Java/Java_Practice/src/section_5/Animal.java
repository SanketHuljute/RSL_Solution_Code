package section_5;

public class Animal {

	String color="white";
	
	void eating()
	{
		System.out.println("Eating..............");
	}
}

class Dog extends Animal
{
	String color="Black";
	
	void eating()
	{
		System.out.println("Eating bread.......");
		super.eating();
	}
	
	void display()
	{
		System.out.println(color);//Black
		System.out.println(super.color); //white
	}
		
}
