# include <iostream>
using namespace std;
void swp2(int& x, int& y){
//x and y are references...call by reference
int tmp = x;
x = y;
y = tmp;
}

int main() {
int a, b;



cin >> a >> b;

swp2(a, b);
cout << a << “ “ << b << endl; //values actually swapped
}