#include <iostream>
using namespace std;
int main() {
    int number = 88; 
    int * pNumber = &number; // Declare and assign the address of variable number to pointer pNumber (0x22ccec) 
    cout<< pNumber << endl ; // Print the content of the pointer variable, which contain an address (0x22ccec) 
    cout<< *pNumber << endl; // Print the value “pointed to” by the pointer, which is an int (88)
    *pNumber = 99; // Assign a value to where the pointer is pointed to, NOT to the pointer variable

    cout<< *pNumber << endl; // Print the new value “pointed to” by the pointer (99)
    cout<< number << endl; // The value of variable number changes as well (9)
    return 0;
}