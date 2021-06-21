const getDataFromApi = async (url) => {
    const result = await new Promise(async (resolve, reject) => {
        const data = fetch(url).then((res) => res.json());
        resolve(data);
    })
    return result;
}

const loadPlaylist = async () => {
    const playlist = await getDataFromApi("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist");
    const cardsDiv = document.getElementById('video-cards')


    playlist.forEach((video, index) => {
        const card = document.createElement('div');
        card.classList.add('video-card');
        card.id = video.id;

        if (index == 0) {
            card.classList.add('selected');
        } else {
            card.classList.add('not-selected');
        }

        const imgTag = document.createElement('img');
        imgTag.src = video.thumbnail;

        const heading = document.createElement('h3');
        heading.innerText = video.title;

        card.appendChild(imgTag);
        card.appendChild(heading);

        cardsDiv.appendChild(card);
    })
}

const changeVideo = async (id) => {
    const video = await getDataFromApi(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${id}`)
    const player = document.getElementById('video-player');
    player.src = "https://player.vimeo.com/video/" + video.vimeoId;

    const views = document.getElementById('views');
    views.innerText = video.view + " views";
    const title = document.getElementById('title');
    title.innerText = video.title;
    const description = document.getElementById('description');
    description.innerText = video.description;
}

$(document).ready(() => {
    loadPlaylist();
})

$(document).on('click', '.not-selected', function () {
    const selectedCard = document.getElementsByClassName('selected')[0];
    selectedCard.classList.remove('selected');
    selectedCard.classList.add('not-selected');

    const clickedCard = this;
    clickedCard.classList.remove('not-selected');
    clickedCard.classList.add('selected');

    const id = clickedCard.id;
    changeVideo(id);
})