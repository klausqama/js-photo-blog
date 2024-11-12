const polaroidContainerDomElement = document.getElementById('polaroid-container')
const overlayDisplay = document.getElementById('overlayDisplay')
const buttonClose = document.getElementById('close-botton')
const imgOverlay = document.querySelector('.overlay-img')


axios
.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then((res) => {
    const photos = res.data;
   console.log(photos)
   for(let i = 0; i < photos.length; i++){
        console.log(photos[i].title)
        polaroidContainerDomElement.innerHTML += `
            <div class="polaroid">
            <div class="puntina">
                <img src="/assets_day1/img/pin.svg" alt="">
            </div>
            <img src="${photos[i].thumbnailUrl}" alt="">
            <p class="paragraph comic-neue-light"> ${photos[i].title}</p>
            </div>
`       
    }
    const cardPolaroid = document.querySelectorAll('.polaroid')

    cardPolaroid.forEach((card, i) => {
       card.addEventListener('click',() =>{
        console.log('click sulla card')
        overlayDisplay.style.display = 'block';
        const { url } = photos[i];
        imgOverlay.src = url;
        
       })
    })

})
.catch((err) => {
    // qui abbiamo accesso all'errore che ha generato la chiamata
    console.log('qui ci finiamo se qualcosa è andato storto', err)
})

buttonClose.addEventListener('click', function(){
    overlayDisplay.style.display = "none";
});

