package section_5;


class A //Parent
{
	int a;
	
	void display()
	{
		System.out.println(a);
	}
	
}

class B extends A   // B is child class of A
{
	int b;
	void print()
	{
		System.out.println(b);
	}
}

class C extends B  // C IS CHILD CLASS OF B
{
	int c;
	
	void show()
	{
		System.out.println(c);
	}
}

public class InheritanceTypesDemo {

	public static void main(String[] args) {
	
		A aobj=new A();
		aobj.a=100;
		aobj.display();
		
		B bobj=new B();
		bobj.a=10;
		bobj.b=20;
		bobj.display();
		bobj.print();
		
		C cobj=new C();
		cobj.a=15;
		cobj.b=25;
		cobj.c=35;
		cobj.display();
		cobj.print();
		cobj.show();
				
		
	}

}

