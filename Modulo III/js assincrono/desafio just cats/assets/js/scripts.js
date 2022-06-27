const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        console.log(json.message);
        return json.message;
    }
    catch (e){
        console.log(e.message);
    }
};

const loadImg = async () => {

    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();