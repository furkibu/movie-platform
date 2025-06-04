document.onkeydown = function(e) {

       
    if (e.keyCode == 123) {
        return false;
    }

    
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }

  
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    
    if (e.ctrlKey && e.keyCode == 83) {
        return false;
    }


    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const popularGrid = document.getElementById('popular-grid');
    const loadMorePopularBtn = document.getElementById('load-more-popular');

    let currentPage = 1;

    // Popüler diziler için örnek veri
    const popularShows = [
        { title: 'Tulsa King', img: 'https://tr.web.img2.acsta.net/pictures/22/06/10/16/50/5509057.jpg', desc: 'Hapisten çıkan bir mafyanın hikayesi', season: '1', views: '1,000,000+' },
        { title: 'Alice in Borderland', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNhEdqy95u93-EDtUOh1Ed4vPRzkUQTbNFg&s', desc: 'İşsiz bir gencin hayatta kalma mücadelesi.', season: '2', views: '750,000+' },
        { title: 'The Witcher', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9l0qTSnfSABEG9p9ZJqMeLaqaMBQAQvyufQ&s', desc: 'Kiralık mutant canavar avcısının hikayesi.', season: '3', views: '500,000+' },
        // Daha fazla dizi eklenebilir
    ];

    // İlk 5 diziyi yükle
    loadShows(popularShows.slice(0, 5));

    // "Daha Fazla" butonuna tıklanınca sonraki dizileri yükle
    loadMorePopularBtn.addEventListener('click', () => {
        const nextShows = popularShows.slice(currentPage * 5, (currentPage + 1) * 5);
        loadShows(nextShows);
        currentPage++;

        if (currentPage * 5 >= popularShows.length) {
            loadMorePopularBtn.style.display = 'none';
        }
    });

    function loadShows(shows) {
        shows.forEach(show => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${show.img}" alt="${show.title}">
                <div class="overlay">
                    <button>İzle</button>
                    <button>Daha Sonra İzle</button>
                </div>
                <div class="card-content">
                    <h4>${show.title}</h4>
                    <p>${show.desc}</p>
                    <p>Sezon: ${show.season} | İzlenme: ${show.views}</p>
                </div>
            `;
            popularGrid.appendChild(card);
        });
    }
});
