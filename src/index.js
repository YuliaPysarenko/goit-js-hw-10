// import CatApi from "./cat-api";
// const catApi = new CatApi;

import catApi from './cat-api';
import linksDokQuerySel from './links';
// import infoBreed from '../src/templete/info-breed.hbs';
const link = linksDokQuerySel();

link.breadSelect.addEventListener(`change`, onChangeSelectOption);

catApi.fetchBreeds();
 
function onChangeSelectOption() {
//    const curTargBreedCat = e.currentTarget;
//    catApi.fetchCatByBreed(curTargBreedCat).then(renderCat); 
    const selectedOptionValue = link.breadSelect.value;
       catApi.fetchCatByBreed(selectedOptionValue); 
//    catApi.fetchCatByBreed(selectedOptionValue).then(renderCat); 
    // catApi.fetchCatByBreed().then(renderCat);
}   

