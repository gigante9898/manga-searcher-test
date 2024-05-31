
const background = document.getElementById('anime-background')
const text = document.getElementById('manga-text')
const container = document.getElementById('search-info-container')

function clearResults() {
    container.innerHTML = ''
    container.style.display = 'none'
}


async function getAnime() {
    const input = document.getElementById('anime-id').value
    const url = `https://api.jikan.moe/v4/anime?q=${input}&sfw`
	const response = await fetch(url)
	const data = await response.json();
	const anime = data.data


    clearResults()
    container.style.display = 'flex'

    //Loops for each result that the user searched
    anime.forEach(animeList => {
        //adds a div to store the results
        const animeDiv = document.createElement('div')
        animeDiv.classList.add('anime-result')
        
        const img_background = document.createElement('img')
        img_background.classList.add('img-found')
        img_background.href = ""
        img_background.src = animeList.images.jpg.image_url
        img_background.addEventListener('click', () => {
            window.open(animeList.url)
        })

        const anime_name = document.createElement('h3')
        anime_name.classList.add('title')
        anime_name.textContent = animeList.title
        //anime_name.textContent = animeList.title.length > 20 ? animeList.title.substring(0, 20) + '...' : animeList.title;
        
        animeDiv.appendChild(img_background)
        animeDiv.appendChild(anime_name)
        container.appendChild(animeDiv)
        console.log(animeDiv)
    });
    

    console.log(anime[0])
   /* background.src = anime[0].images.jpg.image_url
    container.style.display = "flex"
    text.innerHTML = anime[0].title
	window.open(anime[0].url)*/

}
async function getManga() {
    const input = document.getElementById("manga-id").value
    const url = `https://api.jikan.moe/v4/manga?q=${input}&sfw`
	const response = await fetch(url)
	const data = await response.json();
	const manga = data.data

    clearResults()
    container.style.display = 'flex'

    manga.forEach(mangaList => {
        const mangaDiv = document.createElement('div')
        mangaDiv.classList.add('manga-result')
        
        const img_background = document.createElement('img')
        img_background.classList.add('img-found')
        img_background.href = ""
        img_background.src = mangaList.images.jpg.image_url
        img_background.addEventListener('click', () => {
            window.open(mangaList.url)
        })

        const manga_name = document.createElement('h3')
        manga_name.classList.add('title')
        manga_name.textContent = mangaList.title
        
        //manga_name.textContent = mangaList.title.length > 20 ? mangaList.title.substring(0, 20) + '...' : mangaList.title;
        
        mangaDiv.appendChild(img_background)
        mangaDiv.appendChild(manga_name)
        container.appendChild(mangaDiv)
        console.log(mangaDiv)
    });

	console.log(manga[0])
    // background.src = manga[0].images.jpg.image_url
    // container.style.display = "flex"
    // text.innerHTML = manga[0].title
    // window.open(manga[0].url)

}



