let container = document.getElementById("container")

let url = "https://jsonplaceholder.typicode.com/posts"

fetch(url)
  .then((res) => res.json())
  .then((data) => 
  {

    let cardsHTML = "";
    for (let dato of data)
    {
        cardsHTML += `
        <div class="card">
            <p>Id:${dato.userId}</p>
            <p>UserId:${dato.id}</p>
            <p>Title:${dato.title}</p>
            <p>Body:${dato.body}</p>
        </div>
        `
    }

    container.innerHTML = cardsHTML

  });
