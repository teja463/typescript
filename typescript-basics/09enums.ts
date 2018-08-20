 enum DayOfTheWeek{
     SUN, MON, TUE, THU, FRI, SAT
 }

 let day: DayOfTheWeek;
 day = DayOfTheWeek.SUN;

 if(day === DayOfTheWeek.SUN){
     console.log("Sunday is a holiday");
 }

 enum Month{
     JAN = 10, FEB, MAR, APR
 }

 let month: Month;
 if(month === Month.FEB){
     console.log("this is feb");
 }