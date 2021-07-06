import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import useStyles from '../../../styles';
import { useState } from 'react';
export default function AddWord(props) {
    const classes = useStyles();
    const [inputWord, setInputWord] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddWord();
    }
    const handleAddWord = async () => {
        if (inputWord === "") {
            alert("Thêm không thành công!\nBạn chưa nhập vào từ vựng!");
            return;
        }
        console.log("run open");
        props.setOpenCircularProcess(true);
        await props.addWord(inputWord);
        props.setOpenCircularProcess(false);
        console.log("close backdrop");
        setInputWord("");
    }
    const handleReview = ()=>{
        alert("Tính năng đang trong quá trình phát triển.");
    }
    return (
        <div className="add-word-container">
            <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                <Grid container>
                    <Grid item xs={12} md={8} xl={8}>
                        <TextField value={inputWord} onChange={(e) => setInputWord(e.target.value)} className={classes.inputAddWord} variant="outlined" label="Nhập từ bạn muốn thêm"></TextField>
                    </Grid>
                    <Grid item xs={6} md={2} xl={2}>
                        <Button onClick={handleAddWord} className={classes.btnAddWord} variant="contained" color="secondary">
                            Thêm
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={2} xl={2}>
                        <Button onClick={handleReview} className={classes.btnAddWord} variant="contained" color="primary">
                            Ôn Tập
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
