g++//Largest of 3 Numbers
#include <iostream>
using namespace std;
int main() {
int no1;
int no2;
int no3;
//Read 3 numbers
cin >> no1 >> no2 >> no3; //chaining or cascading
/*
Same as doing

9
LaunchPad

cin >> no1;
cin >> no2;
cin >> no3;
*/
if (no1 > no2 and no1 > no3) {
cout << no1 << " is largest" << endl;
}
else if (no2 > no1 && no2 > no1) {
//same as if (no2 > no1 and no2 > no1)
cout << no2 << "is largest" << endl;
}
else {
cout << no3 << "is largest"<< endl;
}
}