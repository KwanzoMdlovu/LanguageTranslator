import { countries } from "./countries_data.js";

export const populateSelectInput = (selectElements) => {

 selectElements.forEach((element,iterationNumber) => {
    
    for (const key in countries) {
        let option;
        let selected;
        if(iterationNumber === 0 && countries[key] === "English") {

           selected = "selected"

        }else if(iterationNumber === 1 && countries[key] === "Zulu"){

         selected = "selected"

        }
            option = `<option ${selected} value="${key}">${countries[key]}</option>`;
            element.insertAdjacentHTML("beforeend",option)  
        

       }


 });
         
        
    }
 
 