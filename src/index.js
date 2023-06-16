// import CatApi from "./cat-api";
// const catApi = new CatApi;

import catApi from './cat-api';
import linksDokQuerySel from './links';

const link = linksDokQuerySel();

link.breadSelect.addEventListener(`change`, onChangeSelectOption);

catApi.fetchBreeds();
 
function onChangeSelectOption() {
    const selectedOptionValue = link.breadSelect.value;
       catApi.fetchCatByBreed(selectedOptionValue); 
//    catApi.fetchCatByBreed(selectedOptionValue).then(renderCat); 
    // catApi.fetchCatByBreed().then(renderCat);
}   

