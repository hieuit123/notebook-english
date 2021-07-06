import axios from 'axios';
const apiUrl = 'https://translate.googleapis.com';
var apiClient = "dict-chrome-ex";

function convertPostData(details) {
    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody
}

async function translate(langFrom, langTo, text) {
    var getApiUrl = (withText = true) => {
        return apiUrl + '/translate_a/t?' + convertPostData({
            client: apiClient,
            q: withText ? text : null,
            sl: langFrom,
            tl: langTo,
            hl: langTo, // header for dictionary (part of speech)
            dt: [
                "t", // translation
                "bd", // dictionary
                "rm", // translit
                "qca", // spelling correction
            ],
        })
    }
    var url = getApiUrl();
    let result = await fetch(url).then(data => data.json()).then((res) => {
        return res;
    })
    return result
}

const getDictionary = async (word) => {
    try {
        let result = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en_US/" + word);
        return result.data;
    } catch {
        return false;
    }
}
export {
    translate,
    getDictionary
};