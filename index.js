let randomWordUrl = "https://random-word-api.herokuapp.com/word?number=1";
let gifhyAPI =
  "http://api.giphy.com/v1/gifs/search?api_key=N4V9iJb4LhIcnNN6tdTR1DAONhuN9eDV";

async function getData() {
  let res = await fetch(randomWordUrl);
  let data = await res.json();
  console.log(data[0]);
  let resGifhy = await fetch(gifhyAPI + `&q=${data[0]}&limit=5`);
  let dataGifhy = await resGifhy.json();
  console.log(dataGifhy.data[0]);
  let object = document.createElement("object");
  object.data = dataGifhy.data ? dataGifhy.data[0].images.original.url : null;
  if (object.data === null) {
    // object.innerHTML = `<p>No data Found for the search word ${data[0]}<p>`;
    let h2 = document.createElement("h2");
    h2.innerText = `No data Found for the search word ${data[0]}`;
    document.body.append(h2);
  } else {
    object.height = "700px";
    object.width = "100%";
    document.body.append(object);
  }
}

getData();
