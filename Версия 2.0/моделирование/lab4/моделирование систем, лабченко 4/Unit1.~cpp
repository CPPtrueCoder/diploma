//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "Unit1.h"
#include <math.h>
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TForm1 *Form1;
//---------------------------------------------------------------------------
double f(double x, double y, double z)
{
    return z;
}
double g(double x, double y, double z)
{
    return -z+cos(3*x);
}
__fastcall TForm1::TForm1(TComponent* Owner)
        : TForm(Owner)
{
    double h = 0.1;
    double x0 = 0;
    double y0 = 4;
    double z0 = 1;
    double x[101] = {0};
    double y[102] = {0};
    double z[102] = {0};
    double yist[101] = {0};
    double e[101] = {0};
    x[0] = x0;
    y[0] = y0;
    z[0] = z0;
    double deltay = 0;
    double deltaz = 0;
    for(int i = 1; i < 101; i++) x[i] = x[i-1] + h;
    double K1[101] = {0};
    double K2[101] = {0};
    double K3[101] = {0};
    double K4[101] = {0};
    double L1[101] = {0};
    double L2[101] = {0};
    double L3[101] = {0};
    double L4[101] = {0};
    for(int i = 0; i < 101; i++){
        K1[i] = h * f(x[i], y[i], z[i]);
        L1[i] = h * g(x[i], y[i], z[i]);

        K2[i] = h * f(x[i]+0.5*h, y[i]+0.5*K1[i], z[i]+0.5*L1[i]);
        L2[i] = h * g(x[i]+0.5*h, y[i]+0.5*K1[i], z[i]+0.5*L1[i]);

        K3[i] = h * f(x[i]+0.5*h, y[i]+0.5*K2[i], z[i]+0.5*L2[i]);
        L3[i] = h * g(x[i]+0.5*h, y[i]+0.5*K2[i], z[i]+0.5*L2[i]);

        K4[i] = h * f(x[i]+h, y[i]+K3[i], z[i]+L3[i]);
        L4[i] = h * g(x[i]+h, y[i]+K3[i], z[i]+L3[i]);

        deltay = (K1[i] + 2*K2[i] + 2*K3[i] + K4[i]) / 6;
        deltaz = (L1[i] + 2*L2[i] + 2*L3[i] + L4[i]) / 6;

        y[i+1] = y[i] + deltay;
        z[i+1] = z[i] + deltaz;

        yist[i] = exp(x[i]) + sin(x[i]);
        e[i] = sqrt(pow((y[i] - yist[i]), 2));
    }

    for(int i = 0; i < 101; i++)
    {
        Series1->AddXY(x[i],y[i]);
        Series2->AddXY(x[i],z[i]);
    }

    StringGrid1->Cells[0][0] = "X";
    StringGrid1->Cells[1][0] = "Y";
    StringGrid1->Cells[2][0] = "Y'";
    StringGrid1->Cells[3][0] = "Yist";
    StringGrid1->Cells[4][0] = "E";

    for(int i = 0; i < 102; i++)
    {
        StringGrid1->Cells[0][i+1] = x[i];
        StringGrid1->Cells[1][i+1] = y[i];
        StringGrid1->Cells[2][i+1] = z[i];
        StringGrid1->Cells[3][i+1] = yist[i];
        StringGrid1->Cells[4][i+1] = e[i];
    }
}
//---------------------------------------------------------------------------
 