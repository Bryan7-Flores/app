//https://jsonplaceholder.typicode.com/posts
const getData = async () => {
    //enlace pokemon
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
    
    return data;
    };
    const data = getData();
    console.log(data);