
class Photos {
    photos = [];
    div;

    constructor() {
        this.div = document.getElementById('photosDiv');
        
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            this.photos = res;
            this.constructHTML();
        })
        .catch(err => console.error(err));
    }

    constructHTML() {
        console.log(this.photos);
        const photos = this.photos.map((photo) => {
            return `<div class="col-6 col-md-4 col-lg-3">
                        <div class="card bg-white border-0 shadow-lg">
                            <a href="${photo.url}" target="_blank">
                                <img class="card-img-top rounded-pill p-4" src="${photo.thumbnailUrl}" />
                            </a>
                            <div class="card-body text-center">
                                <h5 class="card-title h3">${photo.id}</h5>
                                <p class="card-text text-truncate">${photo.title}</p>
                            </div>
                        </div>
                    </div>`;
        }).join('');
        this.div.innerHTML = photos;
    }
}
const p = new Photos();