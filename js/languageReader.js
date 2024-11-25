
export const contentVoiceReader = (textToBeRead,language) => {
    let utter;
    navigator.clipboard.writeText(textToBeRead.value);
    utter = new SpeechSynthesisUtterance(textToBeRead.value)

     utter.lang = language

    speechSynthesis.speak(utter)
} 

export const catchEmptyTextArea = (textToBeRead,language) => {
    let utter;
    navigator.clipboard.writeText(textToBeRead);
    utter = new SpeechSynthesisUtterance(textToBeRead)

     utter.lang = language

    speechSynthesis.speak(utter)
} 