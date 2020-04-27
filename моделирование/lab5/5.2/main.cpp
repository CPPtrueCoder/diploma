#include <iostream>
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
  setlocale(LC_ALL, "RUSSIAN");
  double count1=0,count2=0,count3=0,count4=0,countsred;
   //0.32,0.1,0.68,0.96,0.48
cout << "Таблица: "<<endl;
  ifstream in("matrix.txt");
	if (in.is_open())
	{
		int count = 0;
		double temp;

		while (!in.eof())
		{
			in >> temp;
			count++;
		}
		in.seekg(0, ios::beg);
		in.clear();

		int count_space = 0;
		char symbol;
		while (!in.eof())
		{
			in.get(symbol);
			if (symbol == ' ') count_space++;
			if (symbol == '\n') break;
		}
		in.seekg(0, ios::beg);
		in.clear();
		int n = count / (count_space + 1);
		int m = count_space + 1;
		double **x;
		x = new double*[n];
		for (int i = 0; i<n; i++) x[i] = new double[m];

		for (int i = 0; i < n; i++)
			for (int j = 0; j < m; j++)
				in >> x[i][j];
		for (int i = 0; i < n; i++)
		{
			for (int j = 0; j < m; j++)
				cout <<x[i][j] << "\t";
			cout << "\n";
		}

cout << "Случайные числа : "<<endl;
ifstream f("matrix1.txt");
if (f.is_open())
	{
		int count = 0;
		double temp1;

		while (!f.eof())
		{
			f >> temp1;
			count++;
		}
		f.seekg(0, ios::beg);
		f.clear();

		int count_space = 0;
		char symbol;
		while (!f.eof())
		{
			f.get(symbol);
			if (symbol == ' ') count_space++;
			if (symbol == '\n') break;
		}
		f.seekg(0, ios::beg);
		f.clear();
		int n1 = count / (count_space + 1);
		int m1 = count_space + 1;
		double **x1;
		x1 = new double*[n1];
		for (int i = 0; i<n1; i++) x1[i] = new double[m1];

		for (int i = 0; i < n1; i++)
			for (int j = 0; j < m1; j++)
				f >> x1[i][j];

		for (int i = 0; i < n1; i++)
		{
			for (int j = 0; j < m1; j++)
				cout <<x1[i][j] << "\t";
			cout << "\n";
		}
countsred = n1;
cout << "Интвервалы : "<<endl;
cout << "A1 ="<<"[0"<<","<<x[0][1]<<"]"<<endl;
cout << "A2 =["<<x[0][1]<<","<<x[0][1]+x[1][1]<<"]"<<endl;
cout << "A3 =["<<x[0][1]+x[1][1]<<","<<x[0][1]+x[1][1]+x[2][1]<<"]"<<endl;
cout << "A4 =["<<x[0][1]+x[1][1]+x[2][1]<<","<<1<<"]"<<endl;
for (int i = 0; i < n1; i++){
if (x1[i][0]>=0 && x1[i][0]<=x[0][1])
    {cout<<x1[i][0]<<" -> X = "<<x[0][0]<<" Принадлежит A1"<<endl;count1++;}
if (x1[i][0]>=x[0][1] && x1[i][0]<= x[0][1]+x[1][1])
    {cout<<x1[i][0]<<" -> X = "<<x[1][0]<<" Принадлежит A2"<<endl;count2 = count2 + 2;}
if (x1[i][0]>= x[0][1]+x[1][1] && x1[i][0]<= x[0][1]+x[1][1]+x[2][1])
    {cout<<x1[i][0]<<" -> X = "<<x[1][0]<<" Принадлежит A3"<<endl;count2 = count3 + 3;}
if (x1[i][0]>=x[0][1]+x[1][1]+x[2][1] && x1[i][0]<= 1.0)
    {cout<<x1[i][0]<<" -> X = "<<x[2][0]<<" Принадлежит A4"<<endl;count3 = count4 + 4;}
}
cout << "Последовательность : "<<endl;
for (int i = 0; i < n1; i++){
   if (x1[i][0]>=0 && x1[i][0]<=x[0][1])
    {cout<<" A1 ";}
if (x1[i][0]>=x[0][1] && x1[i][0]<= 1.0 - x[3][1])
    {cout<<" A2 ";}
if (x1[i][0]>=1.0 - x[3][1] && x1[i][0]<= 1.0 - x[2][1])
     {cout<<" A3 ";}
if (x1[i][0]>=1.0 - x[2][1] && x1[i][0]<= 1.0)
     {cout<<" A4 ";}
	}
	cout<< "  Среднее =  : "<<((count1+count2+count3+count4)/countsred)<<endl;
	}
	}
return 0;
}
