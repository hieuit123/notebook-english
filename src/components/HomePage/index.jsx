import React from 'react'
import { Grid, Backdrop, CircularProgress } from '@material-ui/core'
import useStyles from '../../styles.js';
import WordBooks from './WordBooks/index.jsx';
import Words from './Words/index.jsx';
import AddWordBook from './AddWordBook/index.jsx';
import AddWord from './AddWord/index.jsx';
import { useState } from 'react';
import * as mainAPI from './../../api/anotherAPI.js'

function loadWordsData() {
    let wordData = [
    ];
    let listWords = null;
    let localWordsData = localStorage.getItem("listWords");
    if (!localWordsData) localStorage.setItem("listWords", JSON.stringify(wordData));
    else listWords = JSON.parse(localStorage.getItem("listWords"));
    return listWords;
}

function loadWordBooksData() {
    // load list word books
    let wordbookData = [
        {
            id: 1,
            name: "Hàng ngày"
        }
    ];
    //save to local storage
    let listWordBooks = null;
    //get local word book
    let localWordBooksData = localStorage.getItem("listWordBooks");
    // load local wordbook
    if (!localWordBooksData) localStorage.setItem("listWordBooks", JSON.stringify(wordbookData));

    listWordBooks = JSON.parse(localStorage.getItem("listWordBooks"));

    return listWordBooks;
}


export default function HomePage() {
    const [words, setWords] = useState(null);
    const [wordBooks, setWordBooks] = useState(null);
    const [selectedWordBook, setSelectedWordBook] = useState(1);
    const [open, setOpen] = useState(false);
    const [openDrawState, setOpenDrawState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setOpenDrawState(open);
      };

    function addWordBook(wordBookName) {
        let wordBooksData = loadWordBooksData();
        let nextIdWordBook = wordBooksData[wordBooksData.length - 1].id;
        let newWordBook = {
            id: nextIdWordBook + 1,
            name: wordBookName
        };
        //add to wordbooks
        wordBooksData.push(newWordBook);
        localStorage.setItem("listWordBooks", JSON.stringify(wordBooksData));
        setWordBooks(wordBooksData);

    }

    async function addWord(word) {
        let standardWord = word.trim();
        let wordsData = loadWordsData();
        let nextIdWord = 0;
        if (wordsData.length > 0) nextIdWord = wordsData[wordsData.length - 1].id;
        // get data dictionary from api
        let dictionary = await mainAPI.getDictionary(standardWord);
        console.log(dictionary[0]);
        let translation = await mainAPI.translate("en", "vi", standardWord);
        console.log(translation);
        if (!dictionary) {
            alert("Oh Sorry!\nTừ này chưa có trong từ điển");
            // OPEN DIALOG
            return;
        }
        // end get data from api
        let newWord = {
            id: nextIdWord + 1,
            idWordBook: selectedWordBook,
            originalWord: word,
            translation: translation.sentences[0].trans,
            ipa: dictionary[0].phonetics[0].text,
            audio: dictionary[0].phonetics[0].audio,
            meanings: dictionary[0].meanings
        }

        wordsData.push(newWord);
        localStorage.setItem("listWords", JSON.stringify(wordsData));   
        setWords(wordsData);
    }
    let wordsData = loadWordsData();
    let wordBooksData = loadWordBooksData();
    if (!words) setWords(wordsData);

    if (!wordBooks) setWordBooks(wordBooksData);

    const classes = useStyles();
    return (
        <>
            <div className="container-home">
                <Grid container spacing={2}>
                    <Grid item xl={4} sm={12} md={12} className={classes.leftContainer}>
                        <WordBooks  toggleDrawer={toggleDrawer} openDrawState={openDrawState} wordBooks={wordBooks} setSelectedWordBook={setSelectedWordBook} />
                        <AddWordBook addWordBook={addWordBook} setSelectedWordBook={setSelectedWordBook} />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} xl={8} className="right-container" >
                        <Words words={words} selectedWordBook={selectedWordBook} toggleDrawer={toggleDrawer} />
                        <AddWord words={words} addWord={addWord} selectedWordBook={selectedWordBook} setOpenCircularProcess={setOpen} />
                    </Grid>
                </Grid>

            </div>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}
