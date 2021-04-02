// function Add(x, y) {
//     let total = x + y;
//     return total;
// }

// let x = 5;
// let y = 10;
// let sum = Add(x,y);
// alert(sum);

// let str1 = `ab`;
// let str2 = `cd`;
// function addstring(str1, str2) {
//     let s = (str1+str2).toUpperCase();
//     return s;
// }
// let S = addstring(str1,str2);
// alert(S);

// console.dir(quoteText);
// async function getAPI() {
//   let response = await fetch(
//     `https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json`
//   );
//   // HTTP get response
//   console.log(response);
//   // parse response. chuyen cac response thanh mang cac json obj
//   let data = await response.json();
// //   let quotetext = document.getElementById("quote");
// //   let quoteauthor = document.getElementById("author");
// let list = document.getElementById(`listquote`);
//   for (let i = 0; i < data.length; i++) {
//     // quotetext.innerHTML += `${data[i].quoteText}<br>`;
//     // quoteauthor.innerHTML += `${data[i].quoteAuthor}<br>`;
//     list.innerHTML += `<li>${data[i].quoteText}</li><li>${data[i].quoteAuthor}</li><br>`;
// }
// }
// getAPI();

// sync: doc code tuan tu
// khong xac dinh dc thoi gian lay ket qua.
// await: doi den khi ham tra ve ket qua sau do gan vao bien 'response'.
// .json(): chuyen data thanh 1 mang obj.
// async: khi dung await trong JS can khai bao mac dinh.
// promise:(without await) future state: ham se hoan thanh trong tuong lai.
// cach lay du lieu: await/then.

// async function getAPI() {
//   let promise = fetch(
//     `https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json`
//   );
//   console.log(promise);

//   promise.then(response => {
//       console.log(response);
//       return response.json();
//   }).then(parseResult =>{
//       console.log(parseResult);
//   });
// }
// getAPI();

// hien thi data ra trang html.
async function getAPI_User() {
  let response = await fetch(
    `https://reqres.in/api/users?fbclid=IwAR2kT7MVuTqQDipf2Gr5YPnsbmSBlMA2SNkXlJV5WcTLJdUhmwb8ky8bdKo`
  );
  let dataUser = await response.json();
  console.log(dataUser);
  let mTable = document.getElementById(`tbody`);
  for (let i = 0; i < dataUser.data.length; i++) {
    mTable.innerHTML += `<tr>
        <td>${dataUser.data[i].id}</td>
        <td>${dataUser.data[i].email}</td>
        <td>${dataUser.data[i].first_name}</td>
        <td>${dataUser.data[i].last_name}</td>
        <td>${dataUser.data[i].avatar}</td>
    </tr>`;
  }
}
getAPI_User();

// POST user API
async function postUser() {
  let option = {
    method: `POST`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `Trung`,
      job: `He's an angel`,
    }),
  };
  const res = await fetch(
    `https://reqres.in/api/users?fbclid=IwAR2kT7MVuTqQDipf2Gr5YPnsbmSBlMA2SNkXlJV5WcTLJdUhmwb8ky8bdKo`,
    option
  );
  console.log(await res.json());
}
postUser();