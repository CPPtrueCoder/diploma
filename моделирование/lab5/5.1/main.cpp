#include <iostream>
#include <fstream>
#include <cmath>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    setlocale(LC_ALL,"Russian");

    double  matrix[2][2]={0};
    ifstream fin;

    //Считываем матрицу P
    fin.open("part1.txt");
    if(fin.is_open())
    {
        for(int i=0;i<2;i++)
            for(int j=0;j<2;j++)
                fin >> matrix[i][j];
    }
    fin.close();

    //Вывод матрицы P
    cout << "Матрица P :" << endl;
    for(int i=0;i<2;i++)
        {
            for(int j=0;j<2;j++)
            {
                cout << matrix[i][j] << "\t";
            }
            cout << endl;
        }
        cout << endl;

    //Матрица P^2
    double a11=matrix[0][0]*matrix[0][0] + matrix[0][1]*matrix[1][0];
    double a12=matrix[0][0]*matrix[0][1] + matrix[0][1]*matrix[1][1];
    double a21=matrix[1][0]*matrix[0][0] + matrix[1][1]*matrix[1][0];
    double a22=matrix[1][0]*matrix[0][1] + matrix[1][1]*matrix[1][1];


    //Матрица P^3 = Р*P^2
    double b11=matrix[0][0]*a11 + matrix[0][1]*a21;
    double b12=matrix[0][0]*a12 + matrix[0][1]*a22;
    double b21=matrix[1][0]*a11 + matrix[1][1]*a21;
    double b22=matrix[1][0]*a12 + matrix[1][1]*a22;

    //Матрица P^4 = P*P^3
    double c11=matrix[0][0]*b11 + matrix[0][1]*b21;
    double c12=matrix[0][0]*b12 + matrix[0][1]*b22;
    double c21=matrix[1][0]*b11 + matrix[1][1]*b21;
    double c22=matrix[1][0]*b12 + matrix[1][1]*b22;

     //Матрица P^5 = P*P^4
    double d11=matrix[0][0]*c11 + matrix[0][1]*c21;
    double d12=matrix[0][0]*c12 + matrix[0][1]*c22;
    double d21=matrix[1][0]*c11 + matrix[1][1]*c21;
    double d22=matrix[1][0]*c12 + matrix[1][1]*c22;

         //Матрица P^6 = P*P^5
    double e11=matrix[0][0]*d11 + matrix[0][1]*d21;
    double e12=matrix[0][0]*d12 + matrix[0][1]*d22;
    double e21=matrix[1][0]*d11 + matrix[1][1]*d21;
    double e22=matrix[1][0]*d12 + matrix[1][1]*d22;

     //Матрица P^7 = P*P^6
    double f11=matrix[0][0]*e11 + matrix[0][1]*e21;
    double f12=matrix[0][0]*e12 + matrix[0][1]*e22;
    double f21=matrix[1][0]*e11 + matrix[1][1]*e21;
    double f22=matrix[1][0]*e12 + matrix[1][1]*e22;


    //Сохраняем матрицу P^7 а файл
    ofstream intofile;
    intofile.open("matrix7.txt");

    if(intofile.is_open())
    {
        intofile << f11 << " " << f12 << " " << endl;
        intofile << f21 << " " << f22 << " " << endl;
    }


    double matrix7[2][2]={0};
    ifstream finn;

    //Считываем матрицу P^5
    finn.open("matrix7.txt");
    if(finn.is_open())
    {
        for(int i=0;i<2;i++)
            for(int j=0;j<2;j++)
                finn >> matrix7[i][j];
    }
    finn.close();

    //Вывод матрицы P^7
    cout << "Матрица переходных вероятностей степени 7 :" << endl;
    for(int i=0;i<2;i++)
        {
            for(int j=0;j<2;j++)
            {
                cout << matrix7[i][j] << "\t";
            }
            cout << endl;
        }


        cout << endl;
        cout << "Вероятность того, что курьер стартующий из сектора B через 3 доставки будет в секторе A:" <<  endl;
        cout << "P = " << b21 << endl;

        return 0;
}

