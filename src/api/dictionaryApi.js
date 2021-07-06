import axios from 'axios'
const getDictionary = (word)=>{
    let result = axios.get("https://api.dictionaryapi.dev/api/v2/entries/en_US/"+word);
    return result.data;
}