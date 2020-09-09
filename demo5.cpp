g++//Add N numbers input by user
#include <iostream>
using namespace std;
int main(){
int N;
cin >> N;
int sum = 0;
int x;
int i = 1; //number to be read
while (i <= N){ //Loop begins here.
//equivalent to UNTIL (i <= N)
cin >> x; //read x
sum = sum + x; //add x to sum
i = i + 1; //one number has been read. So read the next number
} //Loop ends here.
cout << sum << endl;
}