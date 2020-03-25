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
            // console.log(elt)
            // console.log(elt.category)

            document.getElementById("content").innerHTML += `
            <figure>
            <img src="${BildAuswahl(elt)}">
            <figcaption>
            <!-- <h3><b>Category: </b> ${elt.category}</h3> -->
            <!-- <h3><b>Type: </b> ${elt.type}</h3>-->
            <!-- <h3><b>Difficulty: </b> ${elt.difficulty}</h3>-->
            <h3><b>Question: </b> ${elt.question}</h3>
            <span>${Ausgabefenster(elt.correct_answer, elt.incorrect_answers)}</span>    
            <!--  <article><b>Korrekte Antwort: </b> ${elt.correct_answer}</article>-->
            <!--  <article><b>Falsche Antworten: </b> ${elt.incorrect_answers}</article>-->
            </figcaption>
            </figure>`
        });

    })

function Ausgabefenster(richtig, falsch) {
    let ArrayAntworten1 = richtig;
    let ArrayAntworten2 = falsch[0];
    let ArrayAntworten3 = falsch[1];
    let ArrayAntworten4 = falsch[2];
    let Zufallszahl

    // console.log(ArrayFragen1)
    // console.log(ArrayFragen2)
    // console.log(ArrayFragen3)
    // console.log(ArrayFragen4)

    let RandomArray = [{ Antwort1: ArrayAntworten1 },
    { Antwort2: ArrayAntworten2 },
    { Antwort3: ArrayAntworten3 },
    { Antwort4: ArrayAntworten4 }]
    console.log(RandomArray)

    if (RandomArray[3] == 'undefined' && RandomArray[4] == 'undefined') {
        Zufallszahl = Math.floor(Math.random() * 2)
    } else {
        Zufallszahl = Math.floor(Math.random() * 4)
    }


    let Position1 = RandomArray[Zufallszahl]



    console.log(Position1)

    return "";
}




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














let SourceBild;
function BildAuswahl(elt) {
    if (elt.category == "Mythology") {
        SourceBild = "https://i.ytimg.com/vi/sMNJb3Tc39M/maxresdefault.jpg"
    }
    else if (elt.category == "Entertainment: Music") {
        SourceBild = "https://i.ytimg.com/vi/A_vBpMVUNoY/maxresdefault.jpg"
    }
    else if (elt.category == "Entertainment: Film") {
        SourceBild = "https://www.itopnews.de/wp-content/uploads/2019/12/Film-Kino-Serie-foto-pixabay.com_.jpg"
    }
    else if (elt.category == "Science: Computers") {
        SourceBild = "https://www.athens.edu/images/coas/programs/computer-science.jpg"
    }
    else if (elt.category == "Science & Nature") {
        SourceBild = "https://i.imgur.com/mww96in.jpg"
    }
    else if (elt.category == "Animals") {
        SourceBild = "https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337"
    }
    else if (elt.category == "Art") {
        SourceBild = "https://www.moonlibrary.org/wp-content/uploads/2019/08/paintbrushes.jpg"
    }
    else if (elt.category == "Politics") {
        SourceBild = "https://image.cnbcfm.com/api/v1/image/106240744-1573590258713politicaldebate.jpg?v=1573590321&w=1400&h=950"
    }
    else if (elt.category == "Entertainment: Cartoon & Animations") {
        SourceBild = "https://i.ytimg.com/vi/9D281Wl1r6E/maxresdefault.jpg"
    }
    else if (elt.category == "General Knowledge") {
        SourceBild = "https://www.quizony.com/general-knowledge-quiz/imageForSharing.png"
    }
    else if (elt.category == "Science: Mathematics") {
        SourceBild = "https://miro.medium.com/max/2656/1*d0Qd8OUx_TUxG7N6H991ew.jpeg"
    }
    else if (elt.category == "Sports") {
        SourceBild = "https://www.inforadio.de/content/dam/rbb/inf/Headerbilder_Sendestrecken/SportB-lle_1280.jpg.jpg/size=512x288.jpg"
    }
    else if (elt.category == "Entertainment: Comics") {
        SourceBild = "https://i.pinimg.com/736x/14/fe/79/14fe7931d84a87b14928ec24b2de7ce1.jpg"
    }
    else if (elt.category == "Entertainment: Video Games") {
        SourceBild = "https://www.gamecrate.com/sites/default/files/field/image/GamingPopularHeader.jpg"
    }
    else if (elt.category == "History") {
        SourceBild = "https://th.bing.com/th?id=OIP.eePf1fyIMpjt8iFooJSGfwHaFD&pid=Api&rs=1"
    }
    else { SourceBild = "https://sinatax.de/wp-content/themes/consultix/images/no-image-found-360x260.png" }
    return SourceBild;
}
// ------------------------------------------- Eigenes API -------------------------------------------
// ------------------------------------------- BACKUP -------------------------------------------


// fetch('https://opentdb.com/api.php?amount=50')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)

//         data.results.forEach(elt => {
//             console.log(elt)
//             // console.log(elt.category)
//             document.getElementById("content").innerHTML += `
//             <figure>
//             <img src="${BildAuswahl(elt)}">
//             <figcaption>
//             <!-- <h3><b>Category: </b> ${elt.category}</h3> -->
//             <!-- <h3><b>Type: </b> ${elt.type}</h3>-->
//             <!-- <h3><b>Difficulty: </b> ${elt.difficulty}</h3>-->
//             <h3><b>Question: </b> ${elt.question}</h3>
//             <article><b>Korrekte Antwort: </b> ${elt.correct_answer}</article>
//             <article><b>Falsche Antworten: </b> ${elt.incorrect_answers}</article>
//             </figcaption>
//             </figure>`
//         });

//     })



// let SourceBild;
// function BildAuswahl(elt) {
//     if (elt.category == "Mythology") {
//         SourceBild = "https://i.ytimg.com/vi/sMNJb3Tc39M/maxresdefault.jpg"
//     }
//     else if (elt.category == "Entertainment: Music") {
//         SourceBild = "https://i.ytimg.com/vi/A_vBpMVUNoY/maxresdefault.jpg"
//     }
//     else if (elt.category == "Entertainment: Film") {
//         SourceBild = "https://www.itopnews.de/wp-content/uploads/2019/12/Film-Kino-Serie-foto-pixabay.com_.jpg"
//     }
//     else if (elt.category == "Science: Computers") {
//         SourceBild = "https://www.athens.edu/images/coas/programs/computer-science.jpg"
//     }
//     else if (elt.category == "Science & Nature") {
//         SourceBild = "https://i.imgur.com/mww96in.jpg"
//     }
//     else if (elt.category == "Animals") {
//         SourceBild = "https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337"
//     }
//     else if (elt.category == "Art") {
//         SourceBild = "https://www.moonlibrary.org/wp-content/uploads/2019/08/paintbrushes.jpg"
//     }
//     else if (elt.category == "Politics") {
//         SourceBild = "https://image.cnbcfm.com/api/v1/image/106240744-1573590258713politicaldebate.jpg?v=1573590321&w=1400&h=950"
//     }
//     else if (elt.category == "Entertainment: Cartoon & Animations") {
//         SourceBild = "https://i.ytimg.com/vi/9D281Wl1r6E/maxresdefault.jpg"
//     }
//     else if (elt.category == "General Knowledge") {
//         SourceBild = "https://www.quizony.com/general-knowledge-quiz/imageForSharing.png"
//     }
//     else if (elt.category == "Science: Mathematics") {
//         SourceBild = "https://miro.medium.com/max/2656/1*d0Qd8OUx_TUxG7N6H991ew.jpeg"
//     }
//     else if (elt.category == "Sports") {
//         SourceBild = "https://www.inforadio.de/content/dam/rbb/inf/Headerbilder_Sendestrecken/SportB-lle_1280.jpg.jpg/size=512x288.jpg"
//     }
//     else if (elt.category == "Entertainment: Comics") {
//         SourceBild = "https://i.pinimg.com/736x/14/fe/79/14fe7931d84a87b14928ec24b2de7ce1.jpg"
//     }
//     else if (elt.category == "Entertainment: Video Games") {
//         SourceBild = "https://www.gamecrate.com/sites/default/files/field/image/GamingPopularHeader.jpg"
//     }
//     else if (elt.category == "History") {
//         SourceBild = "https://th.bing.com/th?id=OIP.eePf1fyIMpjt8iFooJSGfwHaFD&pid=Api&rs=1"
//     }
//     else { SourceBild = "https://sinatax.de/wp-content/themes/consultix/images/no-image-found-360x260.png" }
//     return SourceBild;
// }

// ------------------------------------------- BACKUP -------------------------------------------
