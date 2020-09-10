#include <iostream>
using namespace std;
int main() {
int const SIZE = 5;
int a1[SIZE]; // Uninitialized
for (int i = 0; i < SIZE; ++i) cout << a1[i] << " ";
cout << endl; // ? ? ? ? ?
int a2[SIZE] = {21, 22, 23, 24, 25}; // All elements initialized
for (int i = 0; i < SIZE; ++i) cout << a2[i] << " ";
cout << endl; // 21 22 23 24 25
int a3[] = {31, 32, 33, 34, 35}; // Size deduced from init values
int a3Size = sizeof(a3)/sizeof(int);
cout << "Size is " << a3Size << endl; // 5
for (int i = 0; i < a3Size; ++i) cout << a3[i] << " ";
cout << endl; // 31 32 33 34 35
int a4[SIZE] = {41, 42}; // Leading elements initialized, the rests to 0
for (int i = 0; i < SIZE; ++i) cout << a4[i] << " ";
cout << endl; // 41 42 0 0 0
int a5[SIZE] = {0}; // First elements to 0, the rests to 0 too
for (int i = 0; i < SIZE; ++i) cout << a5[i] << " ";
cout << endl; // 0 0 0 0 0
int a6[SIZE] = {}; // All elements to 0 too
for (int i = 0; i < SIZE; ++i) cout << a6[i] << " ";
cout << endl; // 0 0 0 0 0
}

