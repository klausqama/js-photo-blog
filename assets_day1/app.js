const polaroidContainerDomElement = document.getElementById('polaroid-container')
console.log(polaroidContainerDomElement)



axios
.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then((res) => {
   console.log(res.data)
   for(let i = 0; i < res.data.length; i++){
   console.log(res.data[i].title)
    polaroidContainerDomElement.innerHTML += `
    <div class="polaroid">
        <div class="puntina">
            <img src="/assets_day1/img/pin.svg" alt="">
        </div>
        <div class="img-polaroid">  <img src="${res.data[i].thumbnailUrl}" alt=""></div>
        <p class="paragraph comic-neue-light"> ${res.data[i].title}</p>
    </div>
`
}

})
.catch((err) => {
    // qui abbiamo accesso all'errore che ha generato la chiamata
    console.log('qui ci finiamo se qualcosa è andato storto', err)
})