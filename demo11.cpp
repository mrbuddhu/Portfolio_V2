//factorial using function

# include <iostream>
using namespace std;
int factorial(int n); //function declaration

int main(){
int n1, n2;
cin >> n1 >> n2;

int fact1 = factorial(n1); //function invocation
int fact2 = factorial(n2); //or simply function calling

cout << "Factorial of " << n1 << " " << fact1 << endl;
cout << "Factorial of " << n2 << " "<< fact2 << endl;
 }

//function definition
int factorial(int n){
int fact = 1;

//computing factorial of n
for(int i = 2; i <= n; ++i) fact = fact * i;

return fact;
}