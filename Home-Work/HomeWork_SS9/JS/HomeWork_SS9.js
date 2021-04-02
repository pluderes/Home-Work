// I.
// 1.1 
// async function getAPI() {
//   let promise = fetch(`Promise is da best`);
//   promise.then(function (response) {
//     return response.json();      
//   }).then(function (json) {
//     setTimeout((json) => {
//         alert(json);
//         console.log(json);
//     }, 3000);
//   });
// };
// getAPI();

// 1.2
// async await function getAPI() {
//   let promise = await fetch(`Promise is da best`);
// }
// getAPI();

// IV.
// function radomFunction() {
//   let random = Math.floor(Math.radom()*11);
//   return random;
// }

// V.
// function randomFunction(a,b) {
//   let random = Math.floor(Math.random()*(b-a));
//   return a + random;
// }
// console.log(randomFunction(1,20));
// console.log(randomFunction(1,20));
// console.log(randomFunction(1,20));
// console.log(randomFunction(1,20));

// VI.
// function distance(a1,a2,b1,b2) {
//   let dis = Math.sqrt(Math.pow((a1-a2),2)+Math.pow((b1-b2),2));
//   return dis;
// }
// console.log(distance(5,4,2,2));

// VII.
async function getAPI() {
  let promise = await fetch(`http://quotes.rest/qod.json`);
  let data = await promise.json();
  console.log(data);

  let Quotes = data.contents.quotes;
  console.log(Quotes);
  let quote = document.getElementById(`listQuote`);
  quote.innerHTML += `<li><h2>${Quotes[0].quote}</h2></li>
  <li>${Quotes[0].author}</li>`;
}
getAPI();