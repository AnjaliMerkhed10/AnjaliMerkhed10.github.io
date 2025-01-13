
async function changeLanguage() {
    const language = document.querySelector('.language-dropdown select').value;
    const textElements = document.querySelectorAll('.translatable');

    // Collect all texts to translate
    const textsToTranslate = Array.from(textElements).map(elem => elem.innerText);
    const translatedTexts = await translateText(textsToTranslate, language);

    // Update elements with translated texts
    textElements.forEach((elem, index) => {
        elem.innerText = translatedTexts[index];
    });
}

async function translateText(texts, targetLanguage) {
    const apiKey = 'AIzaSyDnBmHondgwsA-dzeWtQdRT3X83On_V-wI';
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            q: texts,
            target: targetLanguage
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    return data.data.translations.map(translation => translation.translatedText);
}


