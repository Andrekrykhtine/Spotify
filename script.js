const searchInput = document.getElementById ('search-input');
const resultArtist = document.getElementById ('result-artist');
const resultPlaylists = document.getElementById ('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    // artists?name_like=${searchTerm}` - com isso vai buscar os artistas que contem o termo proximo
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResult(result))
}

function displayResult(result) {
    resultPlaylists.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImg.src = element.urlImg;
    });
    
    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylists.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
});



