import React from 'react'
import useStyles from '../../../styles'
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useState } from 'react';

export default function AddWordBook(props) {
    const classes = useStyles();
    const [inputWordBook, setInputWordBook] = useState("");

    const handleAddWordBook = ()=>{
        if(inputWordBook === "") return;
        props.addWordBook(inputWordBook);
        setInputWordBook("");
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleAddWordBook();
    }

    return (
        <div className={classes.addWordBook}>
            <form noValidate autoComplete="off" onSubmit={(e)=>handleSubmit(e)}>
                <Grid  container>
                    <Grid item xs={12} md={12} xl={10}>
                <TextField value={inputWordBook} onChange={(e)=>setInputWordBook(e.target.value)} className={classes.inputAddWordBook} variant="outlined" label="Nhập vào tên sổ từ bạn muốn thêm"></TextField>
                    </Grid>
                    <Grid item xs={12} md={12} xl={2}>
                <Button onClick={handleAddWordBook} className={classes.btnAddWordBook} variant="contained" color="secondary">
                    Thêm
                </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
