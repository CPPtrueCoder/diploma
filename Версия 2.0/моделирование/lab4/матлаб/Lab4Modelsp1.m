clc; clear; format compact
t = 0:0.1:10;
R1 = dsolve('D2y+y = cos(3*t)')
R2 = dsolve('D2y+y = cos(3*t),y(pi/2)=4,Dy(pi/2)=1')
y = exp(t) + sin(t);
plot(t,y,'b');
grid on
legend('y(t)')
xlabel('t')
ylabel('y')