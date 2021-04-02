async function getDataAPI() {
  let promise = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php?fbclid=IwAR1A9ETQ9UO1eOptf9qb2k7Og-m3RCj-aPIq8vhOqNNG7iqhC7d_dS1vfvs`
  );
  let data = await promise.json();
  console.log(data);

  let food = data.meals[0];

  let thumb = document.getElementById(`imgFood`);
  let meal = document.getElementById(`meal`);
  let cate = document.getElementById(`category`);
  let area = document.getElementById(`area`);
  let tag = document.getElementById(`tags`);
  let instruc = document.getElementById(`instructions`);
  let link = document.getElementById(`link`);
  let ingred = document.getElementById(`listIngred`);

  thumb.src = food.strMealThumb;
  meal.innerHTML += `${food.strMeal}`;
  cate.innerHTML += `<p style="font-weight: bold;">Category:  ${food.strCategory}</p>`;
  area.innerHTML += `<p style="font-weight: bold;">Area: ${food.strArea}</p> `;
  tag.innerHTML += `<p style="font-weight: bold;">Tags:  ${food.strTags}</p>`;
  instruc.innerHTML += `<p style="font-weight: bold;">Instructions: </p> ${food.strInstructions}`;
  link.src = convertToEmbedUrl(food.strYoutube);

  function convertToEmbedUrl(youtubeUrl) {
    return youtubeUrl.replace("watch?v=", "embed/");
}

let size = Object.keys(food).length;
console.log(size);

for(let i=1;i<size;i++){
    if()
}
}
getDataAPI();
