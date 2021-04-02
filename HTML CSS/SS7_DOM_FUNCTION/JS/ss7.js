// - Lay input
// - alert input
// - console log 'hello'
// - Lay input, alert (2)
// - Lay input, alert (3)
// let i = 0;
// let input;
// while(i<3){
//     input = prompt(`Enter sth here`);
//     alert(input);
// console.log(`Hello`);
//     i++;
// }
// for (let i = 0; i < 3; i++) {
//   //EnterIp();
//   numbercount();
// }

// let nb1 = prompt(`Enter x:`);
// let nb2 = prompt(`Enter y:`);
// let nb3 = prompt(`Enter z:`);
// checknumber(nb1);
// Add2number(nb1,nb2);
// check3number(nb1, nb2, nb3);

// Function
// function EnterIp() {
//   input = prompt(`Enter sth here`);
//   alert(input);
// }
// //----------------------------------------------
// function numbercount() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
//   console.log(`-----------------------------------`);
// }
// //----------------------------------------------
// function checknumber(x) {
//   if (isNaN(x) || x === ``) {
//     alert(`invalid x!`);
//   } else if (!isNaN(x)) {
//     if (x % 2 == 0) {
//       alert(`${x} is even!`);
//     } else {
//       alert(`${x} is odd!`);
//     }
//   }
// }
// //----------------------------------------------
// function Add2number(x, y) {
//   if (isNaN(x) || x === `` || isNaN(y) || y === ``) {
//     alert(`invalid input!`);
//   } else if (!isNaN(x) && !isNaN(y)) {
//     let total = x + y;
//     alert(`Total: ` + total);
//   }
// }
// //----------------------------------------------
// function check3number(x, y, z) {
//   if (isNaN(x) || x === `` || isNaN(y) || y === `` || isNaN(z) || z === ``) {
//     alert(`invalid input!`);
//   } else if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
//     if (Number(x) === Number(y) + Number(z)) {
//       alert(`x === y+z`);
//     } else{
//       alert(`x !== y+z`);
//     }
//   }
// }
// //----------------------------------------------
// function callAlert(){
//     alert(`hihahohe`);
// }
// //----------------------------------------------
// function callbackFuntion(){
//     console.log(`di ngu`);
// }
// function motherF(callback){
//     setTimeout(() => {
//         console.log(`da hoc bai xong`);
//         callback();
//     }, 5000);
// }
// // motherF(callbackFuntion);
// function funcB(){
//     console.log(`hihahohe :D`);
// }
// setTimeout(() => {
//     // funcB();
//     console.log(`hihahohe :D`);
// }, 1000);

//--------------------DOM-------------------------
let heading = document.getElementById(`hd`);
console.log(heading);
// console.dir(heading);
// // heading.innerHTML=`:(`;
// heading.innerText=`:D`;

// let clas = document.getElementsByClassName(`clas-hd`);
// console.log(clas);
// let tg = document.getElementsByTagName(`li`);
// console.log(tg);
let lstol = document.getElementById(`lstol`);
console.log(lstol.innerHTML);
// console.log(`----------------------------`);
// lstol.innerHTML += `<li>sadasd</li>`;
// console.log(lstol.innerHTML);
//-------------------------------------------------
let x = document.getElementById(`x`);
let y = document.getElementById(`y`);
let z = document.getElementById(`z`);
console.dir(x);
console.dir(y);
console.dir(z);

// //-------------------------------------------------
// // tao 1 tag link <a>, tro den google
// // dung js de sua duong dan den fb
// let alink = document.getElementsByTagName(`a`);
// console.log(alink);
// alink[0].href = `https://www.facebook.com/`;
// console.log(alink);
// // let alink = document.getElementById(`alink`);
// // console.log(alink);
// // alink.href = `https://www.facebook.com/`;
// // console.log(alink);
// alink[0].remove();

//-----------------Event handling-----------------
function callbackF() {
  heading.innerHTML = `hihahohe`;
}

heading.addEventListener("click", callbackF);
// input 3 number and click button to check x = y + z
let btn = document.getElementById(`btn`);
btn.addEventListener("click", function () {
  if (Number(x.value) === Number(y.value) + Number(z.value)) {
    alert(`x === y+z`);
  } else {
    alert(`x !== y+z`);
  }
});
// click button to add an item to list
let btnAdd = document.getElementById(`btnAdd`);
btnAdd.addEventListener(`click`, function () {
  lstol.innerHTML += `<li>sadasd</li>`;
  console.log(lstol.innerHTML);
});

//-------------event keyboard--------------------
let inp = document.getElementById(`inp`);
inp.addEventListener(`keypress`, function (event) {
  console.log(event);
  if (event.key === `Enter`) {
    lstol.innerHTML += `<li>${inp.value}</li>`;
    console.log(lstol.innerHTML);
  }
});
