#include <iostream>
using namespace std;
int main() {
char msg[256]; // Hold a string of up to 255 characters (terminated by '\0')
cout << "Enter a message (with space)" << endl;
cin.getline(msg, 256); // Read up to 255 characters into msg
cout << msg << endl;
// Access via null-terminated character array
for (int i = 0; msg[i] != '\0'; ++i) {
cout << msg[i];
}
cout << endl;
cout << "Enter a word (without space)" << endl;
cin >> msg;
cout << msg << endl;
// Access via null-terminated character array
for (int i = 0; msg[i] != '\0'; ++i) {
cout << msg[i];
}
cout << endl;
return 0;
}