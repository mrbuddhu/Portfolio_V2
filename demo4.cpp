// Largest of 3 Numbers using nested if...else
#include <iostream>
using namespace std;
int main(){
int no1, no2, no3; //3 variables in one row
if (no1 > no2){
    if (no1 > no3){
        cout << no1 <<" is Largest"<< endl;
        }
    else {
        cout << no3 << "is Largest" << endl;
    }
}
else {
//this means no2 is larger than no1
    if (no2 > no3){
        cout << no2 << " is Largest"<< endl;
    }
    else {
        cout << no3 << "is Largest" << endl;
    }
}
}