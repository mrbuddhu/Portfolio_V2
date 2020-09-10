#include <iostream>
#include <iomanip>
#include <cmath>
#define SIZE 7
using namespace std;
int main() {
int marks[] = {74, 43, 58, 60, 90, 64, 70};
int sum = 0;
int sumSq = 0;
double mean, stdDev;
for (int i = 0; i < SIZE; i++) {
sum += marks[i];
sumSq += marks[i]*marks[i];
}
mean = (double)sum/SIZE;
cout << fixed << "Mean is " << setprecision(2) << mean << endl;
stdDev = sqrt((double)sumSq/SIZE - mean*mean);
cout << fixed << "Std dev is " << setprecision(2) << stdDev << endl;
return 0;
}