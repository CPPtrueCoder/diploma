function dydt = diffs(t,y)
dydt = zeros(2,1);
dydt(1) = y(1);
dydt(2) = -y(2) + cos(3*t);
end