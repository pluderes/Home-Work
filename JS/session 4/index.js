// let person = {
//   name: ``,
//   age: ``,
//   height: ``,
//   weight: ``,
//   rela: ``,
// };

// RUCD
// U
// person.name = `dududu`;
// person[`age`] = 18;
// console.log(person);
// person[`age`]++;
// //person.age++;
// console.log(person);

// C
// let perT = {
//     name: `Trung`,
//     age: 23,
//     height: 170,
//     weight: 54,
//     rela: `Single`,
//     //create a property
//     job: `sevenJobs`, //perT[`job`] = `sevenJobs`;
// };

// R
// console.log(perT.name);
// let prop = `rela`;
//dung cho cac bien chua biet truoc
// console.log(perT[`age`]);
// console.log(perT[prop]);

// D
// delete perT.age;   // delete person[`age`];
// console.log(perT);

//-----------------------------------------------------------
//ex1:
let film = {
  title: `The dark night rises`,
  year: 2012,
  rate: 8.4,
  casts: `Batman, Bane, Catwoman`,
};
let film1 = {
  title: `The dark night rises`,
  year: 2012,
  rate: 8.4,
  casts: `Batman, Bane, Catwoman`,
};

let film2 = {
  title: `Attack on Titans`,
  year: 2017,
  rate:8.5,
  casts: `Eren, Armin, Mikasa`,
};

let film3 = {
  title: `The beginning after the End`,
  year: 2019,
  rate: 8.6,
  casts: `Arthur, Jasmine, Lilia, Tessia, Kathyln, Elijah`,
};

let film4 = {
  title: `Overgeared`,
  year: 2020,
  rate: 8.0,
  casts: `Grid, Yura, Jisuka, Kraugel, Ares, Agnus`,
}

let arrFilm = [];

// console.log(`--------------"."-------------`);
// console.log(
//   `Title: ` + film.title + `\nYear: ` + film.year + `\nRate: ` + film.rate
// );
// console.log(`--------------[]-------------`);
// console.log(
//   `Title: ` +
//     film[`title`] +
//     `\nYear: ` +
//     film[`year`] +
//     `\nRate: ` +
//     film[`rate`]
// );

// let s = prompt(`Enter the property: `);
// for(x in film){
//     if(s === x){
//         console.log(film[`${x}`]);
//         break;
//     }else{
//         console.log(`???`);
//         break;
//     }
// }
// if(film[s]){
//     alert(`${s}: `+film[s]);
// }else{
//     alert(`???`);
// }

// film.rate = film[`rate`]-0.5;
// console.log(film);

// let s = prompt(`Enter the property you want to change: `);
// if(film[s]){
//     let x = prompt(`what's the update?`);
//     if(isNaN(x)){
//         film[s] = x;
//     }else{
//         film[s] = Number(x);
//     }
//     alert(`${s}: `+film[s]);
//     console.log(film);
// }else{
//     alert(`???`);
// }

// Obj n Array
// arr of obj
// let arr = [];
// let perD = {
//     name: `Duc`,
//     age: 22,
//     height: 168,
//     weight: 60,
//     rela: `Single`,
//     job: `teacher`,
// };

// arr.push(perT,perD);
// console.log(arr);

// after 11
// let s = prompt(`Enter the property you want to change: `);
// if (film[s]) {
//   let x = prompt(`what's the update?`);
//   if (isNaN(x)) {
//     film[s] = x;
//   } else {
//     film[s] = Number(x);
//   }
//   alert(`${s}: ` + film[s]);
//   console.log(film);
// } else {
//   alert(`'${s}' does not exits in our data, we will add new`);
//   let newdata = prompt(`Enter the new data`);
//   if (isNaN(newdata)) {
//     film[s] = newdata;
//   } else {
//     film[s] = Number(newdata);
//   }
//   alert(`${s}: ` + film[s]);
//   console.log(film);
// }
//-----------------test----------------
// if(s!==null&&s!==undefined){
//   let a = prompt(`Enter the new data`);
//   let a1 = Number(a);
//   let a2 = String(a);
//   if(a1){
//     film[s]=a1;
//   }else if(a2){
//     film[s]=a2;
//   }
//   console.log(film);
// }

// Array of Obj (after4)
arrFilm.push(film1,film2,film3,film4);
// console.log(arrFilm[0]);
// console.log(arrFilm[arrFilm.length-1].title);

// // sort by title
// arrFilm.sort(function(a,b){
//   let x = a.title.toUpperCase();
//   let y = b.title.toUpperCase();
//   if(x<y){
//     return -1;
//   }
//   if(x>y){
//     return 1;
//   }
//   return 0;
// });
// console.log(`Sort by title`);
// console.log(arrFilm);
// // Sort by rate
// arrFilm.sort(function(a,b){
//   return b.rate - a.rate;
// });
// console.log(`Sort by rate`);
// console.log(arrFilm);
// // increase the rate of last movie in the arr by 0.7
// console.log(arrFilm[arrFilm.length-1]);
// arrFilm[arrFilm.length-1].rate += 0.7;
// console.log(`increase the rate`);
// console.log(arrFilm[arrFilm.length-1]);

let i = 0;
while(i<arrFilm.length){
  console.log(`-----------------------------`);
  console.log(`Title: `+arrFilm[i].title);
  console.log(`Rate: `+arrFilm[i].rate);
  console.log(`Year: `+arrFilm[i].year);
  let a = arrFilm[i].casts.split(`,`);
  let cas = a.join(" ");
  console.log(`Casts: `+cas);
  i++;
}