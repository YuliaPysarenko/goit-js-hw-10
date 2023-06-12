// import CatApi from "./cat-api";
// const catApi = new CatApi;

import catApi from './cat-api';
import infoBreed from '../src/templete/info-breed.hbs';
import linksDokQuerySel from './links';

const link = linksDokQuerySel();


// breadSelect.addEventListener(`click`, onClickBreadCat);
link.breadSelect.addEventListener(`change`, onChangeSelectOption);

// function onсlickBreadCat(e) {
 
//       catApi.fetchBreeds();
//    const curTargBreedCat = e.currentTarget;
//    catApi.fetchCatByBreed(curTargBreedCat);
// }



catApi.fetchBreeds();
 
function onChangeSelectOption() {
//    const curTargBreedCat = e.currentTarget;
//    catApi.fetchCatByBreed(curTargBreedCat).then(renderCat); 
   const selectedOptionValue = link.breadSelect.value;
   catApi.fetchCatByBreed(selectedOptionValue).then(renderCat); 
    // catApi.fetchCatByBreed().then(renderCat);
}   