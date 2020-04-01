window.onload = function() {
    //create object of type date
    const date = new Date();
    const months = [
        'January','February','March','April','May','June','July',
        'August','September','October','November','December'
    ];
    const month = date.getMonth(); //0(jan)-11(dec)
    const year = date.getFullYear;
    const first_date = months[month] + " " + 1 + " " + year;
    const temp = new Date(first_date).toDateString();
    const first_day = temp.substring(0, 3); //Mon
    const days_week = ['Sun','Mon','Tue','Wed','Thu','Fr','Sat'];
    //find the index of first_day in array days:
    const day_no = days_week.indexOf(first_day); //1(Mon)
    const days = new Date(year, month + 1, 0).getDate();   //month +1(months start from 0-11)

    const calendar = get_Calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = months[month] + " " + year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

function get_Calendar(day_no, days) {
    const table = document.createElement('table');
    const tr = document.createElement('tr');

    //row for the day names
    for (let i = 0; i <= 6; i++) {
        const td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);

    //2nd row
    tr = document.createElement('tr');
    const i;
    for (let i = 0; i <= 6; i++) { //blank space for day 
        if (i == day_no) {
            break;
        }
        const td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }

    const count = 1; //number of days
    for (;  i<=6; i++) {
        const td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    for (let r = 3; r <=7; r++) {
        tr = document.createElement('tr');
        for (let i = 0; i <=6; i++) {
            if (count > days) {
                table.appendChild(tr);
                return table;
            }
            const td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);       
    }
    return table;
}


// window.onload = function(){
//     var d = new Date();
//     var month_name = [
//         'January','February','March','April','May','June','July',
//         'August','September','October','November','December'];
//     var month = d.getMonth();   //0-11
//     var year = d.getFullYear(); //2014
//     var first_date = month_name[month] + " " + 1 + " " + year;
//     //September 1 2014
//     var tmp = new Date(first_date).toDateString();
//     //Mon Sep 01 2014 ...
//     var first_day = tmp.substring(0, 3);    //Mon
//     var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//     var day_no = day_name.indexOf(first_day);   //1
//     var days = new Date(year, month+1, 0).getDate();    //30
//     //Tue Sep 30 2014 ...
//     var calendar = get_calendar(day_no, days);
//     document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
//     document.getElementById("calendar-dates").appendChild(calendar);
// }

// function get_calendar(day_no, days){
//     var table = document.createElement('table');
//     var tr = document.createElement('tr');
    
//     //row for the day letters
//     for(var c=0; c<=6; c++){
//         var td = document.createElement('td');
//         td.innerHTML = "SMTWTFS"[c];
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
    
//     //create 2nd row
//     tr = document.createElement('tr');
//     var c;
//     for(c=0; c<=6; c++){
//         if(c == day_no){
//             break;
//         }
//         var td = document.createElement('td');
//         td.innerHTML = "";
//         tr.appendChild(td);
//     }
    
//     var count = 1;
//     for(; c<=6; c++){
//         var td = document.createElement('td');
//         td.innerHTML = count;
//         count++;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
    
//     //rest of the date rows
//     for(var r=3; r<=7; r++){
//         tr = document.createElement('tr');
//         for(var c=0; c<=6; c++){
//             if(count > days){
//                 table.appendChild(tr);
//                 return table;
//             }
//             var td = document.createElement('td');
//             td.innerHTML = count;
//             count++;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     return table;
// }