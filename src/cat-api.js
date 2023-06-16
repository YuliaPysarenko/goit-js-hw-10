
import linksDokQuerySel from './links';

const url = `https://api.thecatapi.com/v1/breeds`;
const IPA_KEY = `live_SMtLvF4MNZqRFib6He2a90q3TJAniCZuwUyeLjyBQHRzIdcj8BrTbJxdjwHyeiLT`;

const link = linksDokQuerySel();

// const preloader = document.querySelector(`.preloader`);

link.breadSelect.setAttribute(`disabled`, true);
link.catInfo.setAttribute(`disabled`, true);
// link.error.setAttribute(`disabled`, true);

window.addEventListener(`load`, onLoader);

const preloaderId = document.getElementById(`preloader_id`)
const selectId = document.getElementById(`id_select`);
const catInfoId = document.getElementById(`cat_info_id`);

function onLoader() {
 firstLoaderSelect();
 loaderCatInfo();
}

function firstLoaderSelect() {
    setTimeout(() => {
      if (!preloaderId.classList.contains(`active_loader`)) {
        preloaderId.classList.add(`active_loader`);
        link.breadSelect.removeAttribute(`disabled`);
      }
    },600)
}

function loaderCatInfo() {
   setTimeout(() => {
     if (preloaderId.classList.contains(`active_loader`)) {
       if (!catInfoId.classList.contains(`active_cat`)) {
          catInfoId.classList.add(`active_cat`);
          link.catInfo.removeAttribute(`disabled`);
      }
     }
    },600)
}
  
// function currentTargetSelectCat(e) {
//   selectId = e.currenttarget;
// }

function fetchBreeds() {
  
    fetch(`https://api.thecatapi.com/v1/breeds?api_key=${IPA_KEY}`)
        .then(resolve => {
            return resolve.json()
        })
        .then((breed) => {
            for (let i = 0; i < breed.length; i++) {
               const option = document.createElement('option');
               option.value = breed[i].id;
                option.textContent = breed[i].name;
                link.breadSelect.append(option);
                }  
        }).catch(errorFetchBreeds);
}

function fetchCatByBreed(breedId) {
 
       fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${IPA_KEY}`)
         .then(resolve => {
                    return resolve.json()
                }).then(renderCat).catch(errorFetchBreeds)
} 
         
function renderCat(cats) {
  const markup = cats
    .map((cat) => {
        return `
      <div class="info">
    <div class="info-img">  
         <img src="${cat.url}" alt="" width = "600px" height="400px">
    </div>
    <div class="info-body">
    <h2 class="info-title">${cat.breeds[0].name}</h2>
        <p class="info-description">${cat.breeds[0].description}</p>
        <p class="info-temperament">${cat.breeds[0].temperament}</p>
    </div>
</div>`;
    })
    .join(""); 
  link.catInfo.innerHTML = markup;

}


if (!errorFetchBreeds) {
  link.error.setAttribute(` disabled`, true);
}

function errorFetchBreeds(error) {
  link.error.removeAttribute(`disabled`); 
  console.log(error)
}

export default { fetchBreeds, fetchCatByBreed, renderCat, errorFetchBreeds}
    

