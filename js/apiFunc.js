
export const getDataFromApi = (text,fromLang,toLang,getResult) =>{

    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLang}|${toLang}`

    fetch(url)
    .then((res)=> res.json())
    .then((data)=> getResult(data.responseData.translatedText))

}
            

