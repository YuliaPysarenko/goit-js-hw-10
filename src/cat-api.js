import infoBreed from '../src/templete/info-breed.hbs';
import linksDokQuerySel from './links';

const url = `https://api.thecatapi.com/v1/breeds`;
const IPA_KEY = `live_SMtLvF4MNZqRFib6He2a90q3TJAniCZuwUyeLjyBQHRzIdcj8BrTbJxdjwHyeiLT`;

const link = linksDokQuerySel();
const preloader = document.querySelector(`.preloader`);

// window.addEventListener(`load`, onLoader);

// function onLoader() {
//     const preloaderId = document.getElementById(`preloader_id`)
//     // preloader.classList.add(`active_loader`);
//     setTimeout(() => {
//         if (!preloaderId.classList.contains(`active_loader`)) {
//             preloaderId.classList.add(`active_loader`);
//         }
//         // preloader.classList.remove(`active_loader`)
//     },600)
// }

// function onLoader() {
//     preloader.classList.add(`active_loader`);
//     setTimeout(() => {
//         preloader.classList.remove(`active_loader`)
//     },600)   
// }

// function onLoader() {
//     preloader.classList.add(`active_loader`);
//     setTimeout(() => {
//         preloader.classList.remove(`active_loader`)
//     },600)   
// }

function fetchBreeds() {
  
    fetch(`https://api.thecatapi.com/v1/breeds?api_key=IPA_KEY`)
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
        });
}


     function fetchCatByBreed(breedId) {
        
             fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}?api_key=IPA_KEY`)
                .then(resolve => {
                    return resolve.json();
                }).then(data => {
                    return data;
                })                     
}



//      function fetchCatByBreed(breedId) {
        
//              fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}?api_key=IPA_KEY`)
//                 .then(resolve => {
//                     return resolve.json()
//                 }).then(renderCat)                      
// }

function renderCat(cat) {
  const markup = cat
    .map((catEl) => {
        return `
      <div class="info">
    <div class="info-img">
        <img src="${catEl.reference_image_id}" alt="${catEl.name}">
    </div>
    <div class="info-body">
        <h2 class="info-title">${catEl.name}</h2>
        <p class="info-description">${catEl.description}</p>
        <p class="info-temperament">${catEl.temperament}</p>
    </div>
</div>`;
    })
    .join("");
  link.catInfo.innerHTML = markup;
}
   
function renderCatByBreed(info) {
    // const index = breadSelect.selectedIndex;
    // const selectedOptionValue = select.value;
          const infoBreedCat = infoBreed(info);
  link.catInfo.innerHTML = infoBreedCat;           
}

export default { fetchBreeds, fetchCatByBreed, renderCat }
    

