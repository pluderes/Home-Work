//  I.
// const container = document.getElementById(`list`);
// for(let i=0;i<3;i++){
//     container.insertAdjacentHTML(`beforebegin`,`<li>${i}</li>`);
// }
// 1-d, 2-a, 3-c, 4-b

// ---------------------------------------------------
// II.
// setTimeout(() => {
//    alert(`Hello Timer :(`);
// }, 3000);
// setInterval(() => {
//     alert(`Hi Interval :'(`);
// }, 5000);

// ---------------------------------------------------
// III.
// 1. No
// 2. Yes

// ---------------------------------------------------
// IV.
// let alllst = document.getElementsByTagName(`li`);
// console.log(`Fisrt element: `);
// console.log(alllst[1]);
// console.log(`-------------------`);
// // for(x in alllst){
// for (let i = 0; i < alllst.length; i++) {
//   console.log(alllst[i]);
// }

// ---------------------------------------------------
// V.
// let alldiv = document.getElementsByTagName(`div`);
// console.log(alldiv[1]);
// console.log(`-------------------`);
// // for(x in alllst){
// for (let i = 0; i < alldiv.length; i++) {
//   console.log(alldiv[i]);
// }

// ---------------------------------------------------
// VI.
// alldiv[2].remove();
// console.log(`-------------------`);
// console.log(`After delete [2]`);
// // for(x in alllst){
// for (let i = 0; i < alldiv.length; i++) {
//   console.log(alldiv[i]);
// }

// ---------------------------------------------------
// VII.
// 1.
// 2.

// ---------------------------------------------------
// VIII.
// function show1(){
//     alert(`Have a good job!`);
// }
// show1();

// ---------------------------------------------------
// IX.
// function show2(name,wish){
//     alert(`Name: ${name}. Wish: ${wish}`);
// }
// show2(`Trung`,`Have a good job!`);

// ---------------------------------------------------
// X.
// let nme = prompt(`Enter your name: `);
// let wis = prompt(`Your wish: `);
// function show2(name,wish){
//     if(wish===``){
//         alert(`Wish null`);
//     }else{
//         alert(`Name: ${name}. Wish: ${wish}`);
//     }
// }
// show2(nme,wis);

// ---------------------------------------------------
// XI.
// 1.
// 2.
// const btnupper = document.getElementById(`btnupper`);

// 3.
// function Upper(){
//     alert(`Upper your name!`);
// }
// 4.
// const inpupper = document.getElementById(`inpupper`);
// console.log(inpupper);
// 5.
// inpupper.value=`sdasda`;
// console.log(inpupper.value);
// 6.
// inpupper.value = inpupper.value.toUpperCase();
// console.log(inpupper.value);
// 7.
let pResult = document.getElementById("result");
// console.log(pResult);
// console.dir(pResult);
// pResult.innerHTML = inpupper.value.toUpperCase();
function upperName() {
  pResult.innerHTML = inpupper.value.toUpperCase();
}

// --------------------------------------------------
// XII.
let items = [`Backpack`, `MiBacnd watch`, `Ring`];
console.log(items);
let list_ul = document.getElementById(`testlist`);
for(let i = 0;i<items.length; i++){
  list_ul.innerHTML += `<li>${items[i]}<button class="btnRemove" style="margin-left: 5px;">Remove</button></li>`;
} 

const inp = document.getElementById(`inpText`); 
const btnadd = document.getElementById(`btnAdd`);
const btnremoves = document.getElementsByClassName(`btnRemove`);

loadRemovebutton();

btnadd.onclick = function () {
  list_ul.innerHTML += `<li>${inp.value}<button class="btnRemove" style="margin-left: 5px;">Remove</button></li>`;
  inp.value = "";
  loadRemovebutton()
}

function loadRemovebutton() {
  for( const btn of btnremoves){
    btn.addEventListener("click",function () {
      this.parentNode.remove();
    });
  }
}