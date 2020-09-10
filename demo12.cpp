//sum function
# include <iostream>
using namespace std;

int add(int num1, int b){
return num1 + b;
}

int main(){
int num1 = 3;
int num2 = 5;
int sum = add(num1, num2);
cout << sum << endl;
return 0;
}