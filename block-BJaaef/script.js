let container = document.querySelector('.container')
got.houses.map(elme => elme.people.map(elm => {
    let article = document.createElement('article')
    article.classList.add('article', 'flex-31')
    let div = document.createElement('div')
    div.classList.add('flex', 'align-center')
    let h2 = document.createElement('h2')
    h2.innerText = elm.name
    let p = document.createElement('p')
    p.innerText = elm.description
    p.classList.add('text')
    let a = document.createElement('a')
    a.innerText = 'Learn More'
    a.classList.add('btn','width-100')
    let img = document.createElement('img')
    img.src = elm.image
    let div2 = document.createElement('div')
    div2.classList.add('width-100')
    div.append(img, h2)
    div2.append(a)
    article.append(div, p, div2)
    container.append(article)
}))
// let container = document.querySelector('.container');
// console.log(got)

// let cards = got.houses.map(element => 
//     element.people.map(elem => `
//     <article class="article flex-31">
//     <div class="flex align-center">
//       <img src=${elem.image} alt="">
//       <h3>${elem.name}</h3>
//     </div>
//     <p class="text">${elem.description}</p>
//     <div class="width-100">
//       <a href="#" class="btn width-100">Learn More!</a>
//     </div>
//   </article>
    
//     `).join("")
// ).join(""); 

// container.innerHTML = cards;
