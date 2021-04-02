// I.
// let str = `TranDucTrung`;
// str = str.split("");
// let arr = [];
// // console.log(arr);
// for (let i = str.length; i >= 0; i--) {
//   arr.push(str[i]);
// }
// console.log(arr.join(``));

// II.
// let str = `this is Test`;
// str = str.split("");
// let arr = [];
// for(let i=0;i<str.length;i++){
//     arr.push(str[i]);
// }
// arr[0] = arr[0].toUpperCase();
// console.log(arr.join(``));

// III.
// let ArrStr=["one","two","three","one","one","four","five","four","five","five"];
// let ArrNum=[1,2,3,3,4,5,4,4,4,5,5];
// console.log(ArrNum);
// let s = [];
// for( x of ArrNum){
//     if(s.includes(x)){

//     }else{
//         s.push(x);
//     }
// }
// console.log(s);
// console.log([...new Set(ArrNum)]);
// IV.
// let NV1 = {
//     name: `Trung`,
//     age: 23,
//     salary: 1000,
//     regency: `Boss`,
// };
// let NV2 = {
//     name: `Duc`,
//     age: 22,
//     salary: 800,
//     regency: `subBoss`,
// };
// let NV3 = {
//     name: `Tran`,
//     age: 21,
//     salary: 600,
//     regency: `subsubBoss`,
// };
// let arrNV = [];
// arrNV.push(NV1, NV2, NV3);
//  let k;
//     while (true) {
//       k = String(
//         prompt(
//           `Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?`
//         )
//       );
//       if (k === `C` || k === `c`) {
//         let Nname = prompt(`Create new employee. Enter the name: `);
//             let Nage = prompt(`Age: `);
//             let Nsalary = prompt(`Salary: `);
//             let Nregency = prompt(`Regency: `);
//             let {...x}=arrNV[0];
//             x.name=Nname;
//             x.age=Number(Nage);
//             x.salary=Number(Nsalary);
//             x.regency=Nregency;
//             arrNV.push(x);
//       } else if (k === `R` || k === `r`) {
//         for(let i=0;i<arrNV.length;i++){
//             console.log(`--------------------------------------------`)
//             console.log(`Name: `+arrNV[i].name);
//             console.log(`Age: `+arrNV[i].age);
//             console.log(`Salary: `+arrNV[i].salary);
//             console.log(`Regency: `+arrNV[i].regency);
//         }
//         break;
//       }else if (k === `U` || k === `u`) {
//             let pos = prompt(`Enter the position you want to update`);
//             if (isNaN(pos) || !pos) {
//               alert(`Not a number`);
//             } else if (!isNaN(pos) && pos > arrNV.length - 1) {
//               alert(`More than the lenght!`);
//             } else if (!isNaN(pos) && pos <= arrNV.length - 1) {
//                 let Uname = prompt(`Update the name: `);
//                 let Uage = prompt(`Age: `);
//                 let Usalary = prompt(`Salary: `);
//                 let Uregency = prompt(`Regency: `);
//               arrNV[pos].name = Uname;
//               arrNV[pos].age = Number(Uage);
//               arrNV[pos].salary = Number(Usalary);
//               arrNV[pos].regency = Uregency;
//               alert(`Done`);
//                 console.log(`--------------------------------------------`)
//                 console.log(`Name: `+arrNV[pos].name);
//                 console.log(`Age: `+arrNV[pos].age);
//                 console.log(`Salary: `+arrNV[pos].salary);
//                 console.log(`Regency: `+arrNV[pos].regency);
//             }
//           } else if (k === `D` || k === `d`) {
//             let pos = prompt(`Enter the position you want to delete`);
//             if (isNaN(pos) || !pos) {
//               alert(`Not a number`);
//             } else if (!isNaN(pos) && pos > arrNV.length - 1) {
//               alert(`More than the lenght!`);
//             } else if (!isNaN(pos) && pos <= arrNV.length - 1) {
//               arrNV.splice(pos, 1);
//               alert(`Done`);
//             }
//         }
//      }

// V.
let d = prompt(`Enter the day`);
let m = prompt(`Enter the month`);
let y = prompt(`Enter the year`);
if ((isNaN(d, m, y) || d === `` || m === ``, y === ``)) {
  if (isNaN(d) || d === ``) {
    alert(`Invalid day`);
  } else if (isNaN(m) || m === ``) {
    alert(`Invalid day`);
  } else if (isNaN(y) || y === ``) {
    alert(`Invalid day`);
  }
} else {
    m = Number(m);
    d = Number(d);
    y = Number(y);
  if (m < 1 && m > 12) {
    alert(`Invalid month`);
  } else if (m >= 1 && m <= 12) {
    console.log(isNaN(m));
    console.log(Number(d));
    if ((m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) && (d < 1 || d > 31)) {
      alert(`Invalid day (1-31)`);
    } else if ((m === 4 || m === 6 || m === 9 || m === 11) && (d < 1 || d > 30)) {
      alert(`Invalid day (1-30)`);
    } else if ((m === 2) && (d > 29) && (y%4 === 0 && y%100 !== 0)) {
      alert(`Invalid day. Max is 29`);
    } else if ((m === 2) && (d > 28)){
        alert(`Invalid day. Max is 28`);
      }
    else {
        if ((m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12)){
            if(d===31){
                if(m===12){
                    alert(`Next day: `+ d + `/` + m + `/` + y+1);
                }
                else{
                    alert(`Next day: `+ d + `/` + m+1 + `/` + y);
                }
            }else{
                alert(`Next day: `+ d+1 + `/` + m + `/` + y);
            }
        }else if(m === 4 || m === 6 || m === 9 || m === 11){
            if(d===30){
                if(m===12){
                    alert(`Next day: `+ d + `/` + m + `/` + y+1);
                }
                else{
                    alert(`Next day: `+ d + `/` + m+1 + `/` + y);
                }
            }else{
                alert(`Next day: `+ d+1 + `/` + m + `/` + y);
            }
        }
    }
  }
}
