let card = document.querySelector('.cards')
console.log(blogs)

blogs.books.map((elm)=>{
    let article= document.createElement('article')
    article.classList.add('flex-32','align-center',"article")
    let h2 = document.createElement('h2')
    h2.innerText = elm.title
    let p = document.createElement('p')
    p.innerText=`Author: ${elm.author}`
    p.classList.add('text')
    let img = document.createElement('img')
    img.src= elm.image
    img.classList.add('img')
    let a = document.createElement('a')
    a.innerText='Buy Now'
    a.classList.add('btn')
    article.append(img,h2,p,a)
    card.append(article)
})