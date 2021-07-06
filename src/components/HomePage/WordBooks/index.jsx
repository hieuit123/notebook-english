import React from 'react'
import useStyles from '../../../styles.js'
import WordBook from './WordBook.jsx';
import List from '@material-ui/core/List';
import { Button, Drawer } from '@material-ui/core'
import AddWordBook from './../AddWordBook/index.jsx';

export default function WordBooks(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const classes = useStyles();

    console.log("render wordbooks");

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

    const showListWordBooks = (wordBooks) => {
        let listWordBooks = wordBooks.map((wordBook) => {
            return <WordBook key={wordBook.id} name={wordBook.name} onClick={handleListItemClick} index={wordBook.id} selectedIndex={selectedIndex} />;
        });
        return listWordBooks;
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        props.setSelectedWordBook(index);
    };

    return (
        <>
            <List className={classes.listWordBooks}>
                {showListWordBooks(props.wordBooks)}
            </List>
                <React.Fragment>
                    <Drawer anchor="left" open={props.openDrawState} onClose={props.toggleDrawer(false)}>
            <div className={classes.wordBooksDrawer}>
                        {showListWordBooks(props.wordBooks)}
                        <div className="add-wordbook-container"><AddWordBook addWordBook={addWordBook} setSelectedWordBook={setSelectedIndex}  /> </div>
            </div>
                    </Drawer>
                </React.Fragment>
        </>

    )
}
