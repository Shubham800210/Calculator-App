// let studentRecords = [{ name: 'John', id: 123, marks: 98 },
// { name: 'Baba', id: 101, marks: 23 },
// { name: 'yaga', id: 200, marks: 45 },
// { name: 'Wick', id: 115, marks: 75 }
// ]

// // let namess = []
// // studentRecords.forEach(student => {
// //     if(student.marks>50){
// //         names.push(student.name);
// //     }
// // })
// // console.log(names);


// function StudentRecords(Data){
//     let names= studentRecords.filter(stu => stu.marks > 50).map((student) => student.name);
//         return(names);
//     }

//     console.log(StudentRecords())
 
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            if(string==''){
                input.value=string;
            }else{
                string = eval(string);
                input.value = string;
            }
            
        }else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value = string
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
        input.value = string;
        }

       
    })
})