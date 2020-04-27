clc;clear;format compact
T0 = 0;
T1 = 10;
X0 = [4; 1]; %Начальные условия
[t, X] = ode23('difs', [T0 T1], X0);
plot(t, X)
grid on
