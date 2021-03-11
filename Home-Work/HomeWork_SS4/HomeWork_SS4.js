// I.
// IV.
let DIC = {
  debug: `The process of figuring out why your program has a certain error and how to fix it`,
  done: `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
  defect: `The formal word for ‘error’`,
  pm: `The short version of Project Manager, the person in charge of the final result of a project`,
  ui_ux: `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`,
};

//IV.1.
// alert(`Hi there, this is dev dictionary`);
// let k;
// while (true) {
//   k = prompt(`Enter a keyword`);
//   let s = k.toLowerCase();
//   if (s === `ui` || s === `ux` || s === `ui/ux`) {
//     alert(`ui/ux\n` + DIC[`ui_ux`]);
//   } else if (DIC[s]) {
//     alert(s + `\n` + DIC[s]);
//   } else {
//     alert(`We could not find your word: ${s}`);
//   }
//   break;
// }

// IV.2.
// alert(`Hi there, this is dev dictionary`);
// let k;
// while (true) {
//   k = prompt(`Enter a keyword`);
//   let s = k.toLowerCase();
//   if (s === `ui` || s === `ux` || s === `ui/ux`) {
//     alert(`ui/ux\n` + DIC[`ui_ux`]);
//   } else if (DIC[s]) {
//     alert(s + `\n` + DIC[s]);
//   } else if (s === ``) {
//     alert(`Input null`);
//   } else {
//     let p = prompt(`We could not find your word: ${s}, leave your explaration`);
//     DIC[s] = p;
//     alert(`Done!`);
//   }
// }

//----------------------------------------------------------------------------------------
// V.
let prd1 = {
  Name: `Xiaomi protable charger 20000mah`,
  Brand: `Xiaomi`,
  Price: 428,
  Color: `While`,
  Category: `Charger`,
  Providers: `Phukienzero Dientuccc`,
};
let prd2 = {
  Name: `VSmart Active 1`,
  Brand: `VSmart`,
  Price: 5487,
  Color: `Black`,
  Category: `Phone`,
  Providers: `Tgdd Ddghn VhStore`,
};
let prd3 = {
  Name: `Iphone X`,
  Brand: `Apple`,
  Price: 21490,
  Color: `Gray`,
  Category: `Phone`,
  Providers: `Tgdd`,
};
let prd4 = {
  Name: `Samsung Galaxy A9`,
  Brand: `Samsung`,
  Price: 8490,
  Color: `Blue`,
  Category: `Phone`,
  Providers: `Tgdd`,
};
// V.1.
let products = [];
products.push(prd1, prd2, prd3, prd4);
// let i = 0;
// while(i<products.length){
//   console.log(`-----------------------------`);
//   console.log(`Name: `+products[i].Name);
//   console.log(`Price: `+products[i].Price);
//   i++;
// }
// V.2.
// let pos = prompt(`Enter product position:`);
// if(isNaN(pos)){
//     alert(`Not a number`);
// }else if(!isNaN(pos)&&pos<products.length&&pos!==``){
//     console.log(`-----------------------------`);
//     console.log(`Name: `+products[pos-1].Name);
//     console.log(`Brand: `+products[pos-1].Brand);
//     console.log(`Price: `+products[pos-1].Price);
//     console.log(`Color: `+products[pos-1].Color);
//     console.log(`Category: `+products[pos-1].Category);
// }else if(pos===``){
//     console.log(`-----------------------------`);
//     console.log(`Null`);
// }
// V.3.
// let p = prompt(`Enter your category?`);
// let cate = p.toLocaleLowerCase();
// if (cate !== ``) {
//    for(let i = 0;i<products.length;i++){
//     if (products[i][`Category`].toLowerCase() === cate) {
//       console.log(`-----------------------------`);
//       console.log(`Name: ` + products[i].Name);
//       console.log(`Price: ` + products[i].Price);
//     }
//   }
// } else if (cate === ``) {
//   console.log(`-----------------------------`);
//   console.log(`Null`);
// }
// V.4.
// let i = 0;
// while(i<products.length){
//   console.log(`-----------------------------`);
//   console.log(`Name: `+products[i].Name);
//   console.log(`Price: `+products[i].Price);
//   console.log(`Providers: `+products[i].Providers);
//   i++;
// }
// V.5.
// let p = prompt(`Enter provider`);
// if (p !== ``) {
//   let prov = p.toLocaleLowerCase();
//   let dem = 0;
//   for (let i = 0; i < products.length; i++) {
//     products[i][`Providers`] = products[i][`Providers`].toLowerCase();
//     let x = products[i][`Providers`].indexOf(prov);
//     if (x >= 0) {
//       console.log(`-----------------------------`);
//       console.log(`Name: ` + products[i].Name);
//       console.log(`Brand: ` + products[i].Brand);
//       console.log(`Price: ` + products[i].Price);
//       console.log(`Color: ` + products[i].Color);
//       console.log(`Category: ` + products[i].Category);
//       console.log(`Privider: ` + products[i].Providers);
//       dem++;
//     }
//   }
//   if (dem === 0) {
//     console.log(`Does not have provider!`);
//   }
// } else if (p === ``) {
//   console.log(`-----------------------------`);
//   console.log(`Null`);
// }

//---------------------------------------------------------------------------------------
// VI.
// let task1 = {
//     Name: `HTML`,
//     Complete: `flase`,
// };
// let task2 = {
//     Name: `CSS`,
//     Complete: `false`,
// };
// let task3 = {
//     Name: `Basics of JavaScript`,
//     Complete: `false`,
// };
// let task4 = {
//     Name: `Node Package Manager (npm)`,
//     Complete: `false`,
// };
// let task5 = {
//     Name: `Git`,
//     Complete: `false`,
// };

// let arrTask = [task1,task2,task3,task4,task5];
// // console.log(`Hi there, this is your learning tasks to front-end developer career:`);
// // for(let i=0;i<arrTask.length;i++){
// //     console.log(`${i+1}. `+arrTask[i].Name+`\n\tComplete: `+arrTask[i].Complete);
// // }
// let comm;
// while (true) {
//     comm = prompt(`Enter your command (New, Delete, Update, Complete)`);
//     if(comm.toLowerCase()===`new`){
//         let n = prompt(`Enter new task:`);
//         if(n!==``){
//             let newtask = {
//                 Name: ``+n,
//                 Complete: `False`,
//             };
//             arrTask.push(newtask);
//         }else{
//             alert(`Invalid!`);
//         }
//     }else if(comm.toLowerCase()===`update`||comm.toLowerCase()===`complete`||comm.toLowerCase()===`delete`){
//         let pos = prompt(`Enter position:`);
//         if(isNaN(pos)||pos===``){
//             alert(`Invalid!`);
//         } else if(!isNaN(pos)&&pos>arrTask.length){
//             alert(`More than the lenght of Array!`);
//         } else if(comm.toLowerCase()===`update`){
//             let newname = prompt(`Enter new title`);
//             arrTask[pos-1][`Name`] = newname;
//         }else if(comm.toLowerCase()===`complete`){
//             arrTask[pos-1][`Complete`] = `True`;
//         }
//         else if(comm.toLowerCase()===`delete`){
//             arrTask.splice(pos-1,1);
//         }
//     }
//     //---------------------Cổ điển-----------------------
//     // }else if(comm.toLowerCase()===`update`){
//     //     let pos = prompt(`Enter position:`);
//     //     if(isNaN(pos)||pos===``){
//     //         alert(`Invalid!`);
//     //     } else if(!isNaN(pos)&&pos>arrTask.length){
//     //         alert(`More than the lenght of Array!`);
//     //     } else {
//     //         let newname = prompt(`Enter new title`);
//     //         arrTask[pos-1][`Name`] = newname;
//     //     }
//     // }else if(comm.toLowerCase()===`complete`){
//     //     let pos = prompt(`Enter position:`);
//     //     if(isNaN(pos)||pos===``){
//     //         alert(`Invalid!`);
//     //     } else if(!isNaN(pos)&&pos>arrTask.length){
//     //         alert(`More than the lenght of Array!`);
//     //     } else {
//     //         arrTask[pos-1][`Complete`] = `True`;
//     //     }
//     // }else if(comm.toLowerCase()===`delete`){
//     //     let pos = prompt(`Enter position:`);
//     //     if(isNaN(pos)||pos===``){
//     //         alert(`Invalid!`);
//     //     } else if(!isNaN(pos)&&pos>arrTask.length){
//     //         alert(`More than the lenght of Array!`);
//     //     } else {
//     //         arrTask.splice(pos-1,1);
//     //     }
//     // }
//     else{
//         alert(`Wrong command!`);
//     }
//     console.log(`----------------------------------------------`);
//     console.log(`Hi there, this is your learning tasks to front-end developer career:`);
//     for(let i=0;i<arrTask.length;i++){
//         if(arrTask[i].Complete===`True`){
//             console.log(`${i+1}. [x] `+arrTask[i].Name);    
//         }else{
//             console.log(`${i+1}. [ ] `+arrTask[i].Name);
//         }
//     }   
// } 

//---------------------------------------------------------------------------
// XV.
