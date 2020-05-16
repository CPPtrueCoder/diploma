clc;clear;format compact
tk = [0 10]; 
y0 = [4 1];
[T,Y] = ode45('diffs',tk,y0); 
plot(T,Y) 
grid on 
legend('y(t)','dy/dt',2)
xlabel('t')
ylabel('y')



