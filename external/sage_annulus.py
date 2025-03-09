R=region_plot([(x-2)^2+(y-2)^2 > 1, 9 > (x-2)^2+(y-2)^2],(-2,5),(-2,5),incol="lightblue", bordercol="red", borderstyle="dashed",ticks=[[],[]])
P=point((2,2),color="blue", size=50)
l1=line([[2,2],[1,2]],color="black")
l2=line([[2,2],[2+3/sqrt(2), 2+3/sqrt(2)]],color="black")
t1=text("$r$", (1.5,2.25), color="black", fontsize=14)
t2=text("$s$", (2+1.5/sqrt(2)-.2,2+1.5/sqrt(2)+.2), color="black", fontsize=14)
t3=text("$A$", (1,4),color="black", fontsize=14)
t4=text("$z_0$", (2,2.4),color="black", fontsize=14)
P+l1+l2+t1+t2+t3+t4