#include <iostream>
#include <cmath>
#include <fstream>
#include <windows.h>
#include <conio.h>

using namespace std;

int main()
{
    setlocale( LC_ALL,"Russian" );
    int countX = 0; int expCount = 0; double temp = 0; double Sad = 0; double Sb = 0; double oshibkaop = 0; double fisher = 0;
    double tablfisher = 6.61;
    double y1 = -0.1673,y2=-0.0888,y3=-0.7090,y4=-0.4870,y5=-0.6790,y6=-0.0875,y7=-0.9650,y8=0.6890;
    double y11 = -0.1723,y22=-0.0460,y33=-0.5090,y44=-0.3170,y55=-0.7550,y66=-0.0875,y77=-1.2650,y88=0.2330;
    double yav1 = (y1+y11)/2; double yav2 = (y2+y22)/2; double yav3 = (y3+y33)/2; double yav4 = (y4+y44)/2; double yav5 =(y5+y55)/2; double yav6 =(y6+y66)/2; double yav7 =(y7+y77)/2; double yav8 =(y8+y88)/2;
    double su1,su2,su3,su4,su5,su6,su7,su8;
    su1 = (pow((y1-yav1),2) + pow((y11-yav1),2));
    su2 = (pow((y2-yav2),2) + pow((y22-yav2),2));
    su3 = (pow((y3-yav3),2) + pow((y33-yav3),2));
    su4 = (pow((y4-yav4),2) + pow((y44-yav4),2));
    su5 = (pow((y5-yav5),2) + pow((y55-yav5),2));
    su6 = (pow((y6-yav6),2) + pow((y66-yav6),2));
    su7 = (pow((y7-yav7),2) + pow((y77-yav7),2));
    su8 = (pow((y8-yav8),2) + pow((y88-yav8),2));
    double Gp = 0; double Gptabl = 0.8412;
    Gp = (su7 / (su1+su2+su3+su4+su5+su6+su7+su8)); oshibkaop = (0.125 * (su1+su2+su3+su4+su5+su6+su7+su8)); Sb = (oshibkaop/8);
    double tableStudent = 2.57;
    int **planMatrix;
    double *matrixY;
    ifstream fin;
    fin.open("data.txt");
    fin >> expCount;
    fin >> countX;
    planMatrix = new int*[expCount];
    for(int i=0;i<expCount;i++)
        planMatrix[i] = new int[countX];
    matrixY = new double[expCount];
    for(int i=0;i<expCount;i++)
    {
        for(int j=0;j<countX;j++)
            fin >> planMatrix[i][j];
        fin >> matrixY[i];
    }

   for(int i=0;i<expCount;i++)
    {
        for(int j=0;j<countX;j++)
            cout << planMatrix[i][j] << "\t";
        cout << matrixY[i] << endl;
    }
    double b[countX] = {0};

    for(int i=0;i<countX;i++)
    {
        for(int j=0;j<expCount;j++)
            temp += planMatrix[j][i]*matrixY[j];
        b[i] = temp/4;
        temp = 0;
    }
    cout <<"\nКоэффициенты уравнения регресии:\t" << b[0] << "+(" << b[1] <<")*x1+(" << b[2] <<")*x2+(" << b[3] <<")*x3\n";
    cout <<"\nПострочная дисперсия: "<< endl;
 cout <<"s1^2:"<<" "<< su1 << " "<< endl;
 cout <<"s2^2:"<<" "<< su2 << " "<< endl;
 cout <<"s3^2:"<<" "<< su3 << " "<< endl;
 cout <<"s4^2:"<<" "<< su4 << " "<< endl;
 cout <<"s5^2:"<<" "<< su5 << " "<< endl;
 cout <<"s6^2:"<<" "<< su6 << " "<< endl;
 cout <<"s7^2:"<<" "<< su7 << " "<< endl;
 cout <<"s8^2:"<<" "<< su8 << " "<< endl;
 cout << endl;
  cout <<"Расчетное значение критерия Кохрена = "<< Gp << " "<< endl;
  cout << endl;
  cout <<"Cравнение с табличным значением(Условие однородности) :";
  if(Gptabl > Gp)
        cout << " меньше табличного "<<" "<<Gp<<" < "<< Gptabl << endl;
        else cout <<" больше табличного " <<" "<<Gp<<" > "<< Gptabl << endl;
        cout << endl;
        cout <<"Ошибка опыта = " << oshibkaop << " "<< endl;
 cout << endl;
   cout <<"Дисперсия коэффициентов = " << Sb << endl;
 cout << endl;
  cout <<"Значимость критерия (Стьюдент): "<< endl;
    double student[countX] = {0};

    for(int i=0;i<countX;i++)
    {
        student[i] = (abs(b[i])/Sb);
        if(student[i] > tableStudent)
        cout << student[i]<<" > " <<tableStudent << " - значим" << endl;
        else cout << student[i] <<" < " <<tableStudent << " - не значим" << endl;
    }

    double countedY[expCount] = {0};

    for(int i=0;i<expCount;i++)
    {
        for(int j=0;j<countX;j++)
        {
            countedY[i] += b[j] * planMatrix[i][j];
        }
    }
   for(int i=0;i<expCount;i++)
        temp += pow(matrixY[i] - countedY[i],2);
    Sad = 2*temp;
    cout << endl;
 cout <<"Дисперсия адекватности = " << Sad << endl;

    fisher = Sad/oshibkaop;
   cout << endl;
cout <<"Критерий Фишера = " << fisher<< endl;
  cout << endl;
  cout <<"Адекватность модели: ";
   cout << endl;
 if(tablfisher > fisher)
        cout << tablfisher <<" > "<<fisher<< " - модель адекватна" << endl;
        else cout << tablfisher <<" < "<<fisher<< " - модель неадекватна" << endl;
_getch();

}

