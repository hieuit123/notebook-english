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
export default translate;