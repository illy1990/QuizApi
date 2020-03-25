// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => response.json())
//     .then(data => {
//         console.log(json)
//         document.write("I will after the fetch and changing json to array")
//     })

// promise JS
// asynchronous function JS

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(elt => {
//             console.log(elt)
//             document.getElementById("content").innerHTML += `
//         <div>
//         <h3>${elt.name}</h3>
//         <h3>${elt.email}</h3>
//         <h3>${elt.phone}</h3>
//         <h4>${elt.address.street}, ${elt.address.city}</h4>
//         <a href = ${elt.website}>visit my website</a>
//         </div>`
//         });
//     })

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(elt => {
//             console.log(elt)
//             document.getElementById("content").innerHTML += `
//         <div>
//         <h3><b>Post Nr:</b> ${elt.id}</h3>
//         <h3><b>Title:</b> ${elt.title}</h3>
//         <h3><b>Content:</b> ${elt.body}</h3>
//         </div>`
//         }); s
//     })


// 6a5b19f7e370417e8c5973890cab1909

// fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-25&sortBy=publishedAt&apiKey=6a5b19f7e370417e8c5973890cab1909')
//     .then(response => response.json())
//     // .then(data => {
//     //     console.log(data.articles)
//     // })

//     .then(data => {
//         data.articles.forEach(elt => {
//             console.log(elt)
//             let test = "unknown"
//             document.getElementById("content").innerHTML += `
//             <figure>
//             <img src="${elt.urlToImage}">
//             <figcaption>
//                 <h3><b>Title: </b> ${elt.title}</h3>
//                 <h3><b>Description: </b> ${elt.description}</h3>
//                 <h3><b>Author: </b> ${elt.author == null ? test : elt.author}</h3>
//                 <h4><b>Published at: </b> ${elt.publishedAt}</h4>
//                 <a href = ${elt.url}>visit the source</a>
//             </figcaption>
//             </figure>`
//         });
//     })


// fetch('http://newsapi.org/v2/everything?q=corona&language=de&pageSize=40&apiKey=6a5b19f7e370417e8c5973890cab1909')
//     .then(response => response.json())
//     // .then(data => {
//     //     console.log(data.articles)
//     // })

//     .then(data => {
//         data.articles.forEach(elt => {
//             console.log(elt)
//             let test = "unknown"
//             document.getElementById("content").innerHTML += `
//             <figure>
//             <img src="${elt.urlToImage}">
//             <figcaption>
//                 <h3><b>Title: </b> ${elt.title}</h3>
//                 <h3><b>Description: </b> ${elt.description}</h3>
//                 <h3><b>Author: </b> ${elt.author == null ? test : elt.author}</h3>
//                 <h4><b>Published at: </b> ${elt.publishedAt}</h4>
//                 <a href = ${elt.url}>visit the source</a>
//             </figcaption>
//             </figure>`
//         });
//     })


// ------------------------------------------- Eigenes API -------------------------------------------

fetch('https://opentdb.com/api.php?amount=50')
    .then(response => response.json())
    .then(data => {
        console.log(data)


        data.results.forEach(elt => {
            console.log(elt)
            document.getElementById("content").innerHTML += `
    <div>
        <h3><b>Category: </b> ${elt.category}</h3>
        <h3><b>Type: </b> ${elt.type}</h3>
        <h3><b>Difficulty: </b> ${elt.difficulty}</h3>
        <h3><b>Question: </b> ${elt.question}</h3>

        <article><b>Korrekte Antwort: </b> ${elt.correct_answer}</article>
        <article><b>Falsche Antworten: </b> ${elt.incorrect_answers}</article>

    </div>`
        });

    })


// let section = document.createElement("section")
// section.id = "gallery"
// let index = 1;
// let index2 = 0;



// for (let i of data) {
//     let figure = document.createElement("figure")
//     let img = document.createElement("img")
//     img.src = i.url
//     let figcaption = document.createElement("figcaption")

//     let p1 = document.createElement("p")
//     p1.innerText = i.question
//     p1.style.fontWeight = "bold"

//     let div = document.createElement("div")

//     let divArray = i.choice;
//     let AnswerArray = i.answer;

//     div.style.display = "flex"
//     console.log(divArray)


//     for (l of divArray) {
//         let span = document.createElement("span")
//         div.appendChild(span)
//         span.innerHTML = (l)
//         span.setAttribute("id", index);
//         span.setAttribute("class", index2);
//         index++;
//         span.style.margin = "40px"
//         span.style.padding = "50px"
//         span.style.backgroundColor = "grey"
//         span.style.color = "white"
//         // span.setAttribute("onclick", "Uberprufen(l)")
//     }
//     index2++;

//     // let p3 = document.createElement("p")

//     // p3.innerText = i.answer
//     // for (j of i.choice) {
//     //     p3.innerText += j
//     // }


//     figcaption.appendChild(p1)
//     figcaption.appendChild(div)
//     // figcaption.appendChild(p3)
//     figure.appendChild(img)
//     figure.appendChild(figcaption)
//     section.appendChild(figure)


// }

// document.body.appendChild(section)
// document.getElementById("gallery").style.display = "grid"
// document.getElementById("gallery").style.gridTemplateColumns = "1fr"
// for (let j of document.getElementsByTagName("img")) {
//     j.style.width = "50%";
// }



// let newSpans = document.querySelectorAll("span")
// for (i of newSpans) {
//     i.addEventListener("click", e =>
//         Uberprufen(e)
//     )
// }


// function Uberprufen(e) {
//     console.log(e)
//     console.log(e.target.className)
//     console.log(e.target.innerHTML)
//     console.log(data[e.target.className].answer)
//     if (e.target.innerHTML == data[e.target.className].answer) {

//         e.target.style.backgroundColor = "green"
//     } else {
//         e.target.style.backgroundColor = "red"
//     }
// }
// ------------------------------------------- Eigenes API -------------------------------------------