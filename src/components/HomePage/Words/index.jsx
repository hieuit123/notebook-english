import React from 'react'
import { Grid } from '@material-ui/core';
import Word from './Word.jsx';
import WordDetail from './WordDetail.jsx';
import ListIcon from '@material-ui/icons/ListAltRounded'

export default function Words(props) {
  const [openWordDetail, setOpenWordDetail] = React.useState(false);
  const [wordDetailContext, setWordDetailContext] = React.useState(props.words[0]);
  const handleOpenWordDetail = () => {
    setOpenWordDetail(true);
  };

  const handleCloseWordDetail = () => {
    setOpenWordDetail(false);
  };
  console.log("render words");
  const showWordList = () => {
    if (props.words.length === 0) return;
    let wordList = props.words.map((word) => {
      if (word.idWordBook === props.selectedWordBook) return <Word key={word.id} openWordDetail={handleOpenWordDetail} setWordDetail={setWordDetailContext} word={word} />;
      else return "";
    });
    return wordList;
  }
  return (
    <>
      <div className="list-icon-container"><ListIcon className='list-icon-rounded' onClick={props.toggleDrawer(true)} /> <div className="clearfix"></div></div>
      <Grid container spacing={2}> 
        {showWordList()}
        {(wordDetailContext) ? <WordDetail wordDetail={wordDetailContext} handleOpen={handleOpenWordDetail} handleClose={handleCloseWordDetail} open={openWordDetail} /> : ""}
      </Grid>

    </>
  )
}
