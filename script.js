// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   const response2 = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   const data2 = await response2.json();

//   const response3 = await fetch(
//     "https://jsonplaceholder.typicode.com/todos"
//   );
//   const data3 = await response3.json();

//   data.forEach((user) => {
//     const comments = data2.filter((comment) => {
//       return comment.userId === user.id;
//     });
//     const todos = data3.filter((todo) => {
//         return todo.userId === user.id;
//       });
//     renderData(user, comments, todos);
//   });
// };

// fetchData();

// const wrap = document.querySelector(".wrap");

// const renderData = (user, comments, todos) => {
//   const comms = comments.map((com) => {
//     return `<p>${com.title}</p>`;
//   });

//   const todoes = todos.map((todoe) => {
//     return `<p>${todoe.title}</p>`;
// // p.style.backgroundColor = "green";
//   });

//   console.log(comms, todoes);

// //   console.log(todoes);

//   const div = document.createElement("div");
//   div.classList.add("card");

//   div.innerHTML = 
//   `<p>${user.name}</p>
//     <p>${user.address}</p>
//     <p>${user.email}</p>
//     <p>${user.phone}</p>
//     <p>${comms}</p>
//     <p>${todoes}</p>`;
    
//   wrap.append(div);
// };


// const wrap = document.querySelector(".wrap");

// const renderData = (todo, finished) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     finished ? card.classList.add("finish") : "";
//     card.textContent = `${todo.title}`;
//     wrap.append(card);
// };

// const fetchData = async () =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();

//     data.forEach((todo) => {
//         const finished = todo.completed === true;
//         renderData(todo, finished);
//     });
// };

// fetchData();

const wrap = document.querySelector(".wrap");

const renderData = (album, photo) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const images = photo.map((img) =>{
        return `<img src=${img.url} alt="" />`
    });
    card.innerHTML = images;
    wrap.append(card);
};

const fetchData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    const response2 = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data2 = await response2.json();

    data.forEach((albums) => {
        const photo = data2.filter((img) => {
            return img.albumId === albums.id;
        } )
        renderData(albums, photo);
    });
};

fetchData();
