document.querySelector('#search-input').addEventListener('input',filterElement)

function filterElement(){
	const searchInput = document.querySelector ('#search-input')
	const filter = searchInput.value.toLowerCase()
	const articleElements = document.querySelectorAll('.work-item');

	articleElements.forEach((element) =>{
		let text = element.textContent;
		if(text.toLowerCase().includes('#'.concat(filter.toLowerCase()))){
			element.style.display = '';
		} else {
			element.style.display ='none';
		}
	});

}