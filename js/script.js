import { getDataFromApi } from "./apiFunc.js";
import { populateSelectInput} from "./populateSelectInputs.js";
import { contentVoiceReader,catchEmptyTextArea } from "./languageReader.js";

const selectElement = document.querySelectorAll('select')
var areafrom = document.querySelector('#area-from')
var areato = document.querySelector('#area-to')
var togglerSwap = document.querySelector('.language-swap')
let fromLang;
let toLang;


window.addEventListener('DOMContentLoaded',()=>{
    populateSelectInput(selectElement)
})


document.querySelector('button').addEventListener('click',()=>{
    
    fromLang = selectElement[0].value
    toLang = selectElement[1].value;
    let textareafrom = areafrom.value.trim();
if(textareafrom !== "")
{

    document.querySelector('button').setAttribute('value',"Translating")
    getDataFromApi(textareafrom,fromLang,toLang,(result)=>{
    
    if(result === "") {
         document.querySelector('button').innerText = "Translating..."

        setTimeout(()=>{
            document.querySelector('button').style.background = "crimson"
            document.querySelector('button').innerText = "Something went wrong!" 
          },4000)

          setTimeout(()=>{
            location.reload()
          },6000)
    }
    else if(result !== ""){
        areato.value = result;
        document.querySelector('button').innerText = "Translate"
       
    }
        
            
    
    })
}else{

     setTimeout(()=>{
            document.querySelector('button').style.background = "gold"
            document.querySelector('button').innerText = "No text specified!" 
          },4000)

          setTimeout(()=>{
            location.reload()
          },6000)

}

})

const swapLanguages = ()=>{
     let texttemp = areafrom.value;
    areafrom.value = areato.value ;
    areato.value = texttemp;
    let selectTemp = selectElement[0].value;
    selectElement[0].value = selectElement[1].value
    selectElement[1].value = selectTemp
    console.log(selectTemp)

}

togglerSwap.addEventListener('click',()=>{

    swapLanguages()

})


document.querySelector('.refresh-page').addEventListener('click',()=>{
    location.reload()
})




document.querySelector(".afrom").addEventListener('click',()=>{
    if(areafrom.value === ""){
        catchEmptyTextArea('Provide me with the any word,speech or sentence that I can read',"en-GB")
    }else{
    contentVoiceReader(areafrom,selectElement[0].value)
    }
})

document.querySelector(".ato").addEventListener('click',()=>{

    if(areato.value === ""){
        catchEmptyTextArea('Provide me with the any word or speech or sentence or paragraph that I can read',"en-GB")
    }else{
    contentVoiceReader(areato,selectElement[1].value)
    }
})






