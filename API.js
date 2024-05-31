const image = document.getElementById("anime-img")
const image_container = document.getElementById("img-container")
const generateButton = document.querySelectorAll('.show-image')
const validTags = ['neko', 'pat', 'waifu']
const hideButton = document.getElementById("hide-button")
const placeHolderText = document.getElementById('tag-text')

document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector('.show-image'); // Selecciona el primer elemento con la clase 'show-image'
    
    if (generateButton) { // Verifica que el botón exista
		generateButton.addEventListener('click', function() {
			async function getData() {
				const input = document.getElementById('tag-text').value
				const url = `https://nekos.best/api/v2/${input}`
				
	
				if (validTags.includes(input)) {
					try {
						const response = await fetch(url)
						const data = await response.json();
						const nekourl = data.results[0].url
						image.src = nekourl
						image_container.style.display = "block"
						image.style.display = "block"

					} catch (error) {
						console.error('Error getting data', error)
					}
					} else {
						console.log('Not valid')
						placeHolderText.value = ''
						placeHolderText.classList.add('red-placeholder')
						placeHolderText.placeholder = "try with 'neko', 'pat', 'waifu'"
						setTimeout(() =>{
							placeHolderText.classList.remove('red-placeholder')
							placeHolderText.placeholder = "try with 'neko', 'pat', 'waifu'"

						}, 3000)
					}
				}		
	getData()
		});
	}
});


hideButton.onclick = function hideNeko() {
	image_container.style.display = "none"

	image.style.display = "none"
}

