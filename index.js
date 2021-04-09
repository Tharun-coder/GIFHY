let randomWordUrl = "https://random-word-api.herokuapp.com/word?number=1";
let gifhyAPI =
  "https://api.giphy.com/v1/gifs/search?api_key=N4V9iJb4LhIcnNN6tdTR1DAONhuN9eDV";

async function getData() {
  let res = await fetch(randomWordUrl);
  let data = await res.json();
  let resGifhy = await fetch(gifhyAPI + `&q=${data[0]}&limit=5`);
  let dataGifhy = await resGifhy.json();
  let object = document.createElement("object");
  if (dataGifhy.data.length === 0) {
    let h1 = document.createElement("h1");
    h1.setAttribute("style", "text-align:center;margin-top:100px");
    h1.innerHTML = `No data Found for the search word <i>${data[0]}</i>`;
    document.body.append(h1);
  } else {
    object.data = dataGifhy.data[0].images.original.url;
    object.height = "700px";
    object.width = "100%";
    document.body.append(object);
  }
}

getData();
