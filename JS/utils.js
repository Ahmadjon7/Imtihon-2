//-------------------CUSTOM DOM SELECTOR --------//

const $=(selcetor) => document.querySelector(selcetor);
const $$ = (selcetor) => document.querySelectorAll(selcetor)

// ------ DYNAMIC CREATE_ELEMENT------------//

const createElement =function(tagName, className, content){
    const newElement = document.createElement(tagName);
  if(className){
    newElement.setAttribute('class',className);
  }
 if(content){
    newElement.innerHTML = content;
 }
    return newElement
 }
 