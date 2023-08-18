#include<iostream>

using namespace std;

int main()
{
    int i=2;

    cout << "Compare the i value "<< endl;


switch (i)
{
case 1:
    cout << "My value is 1." << endl ;
    break;

case 2:
    cout << "My value is 2." << endl ;
    break;

case 3:
    cout << "My value is 3." << endl ;
    break; 


default:
cout << "My value is betwent 1 to 10" << endl ;
    break;
}
   
    return 0;
}
