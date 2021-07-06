import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: "rgba(255,255,255)",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 4, 3),
        borderRadius: "8px",
        lineHeight: '0.8'
    },
    modalWordDetail: {
        backdropFilter: 'blur(3px)',
        background: 'rgba(255,255,255,0.3)'
    },
    wordTitle: {
        textAlign: 'center'
    },
    wordIpa: {
        textAlign: 'center'
    },
    wordTranslation: {
        color: 'darkred',
        fontSize:'large',
        fontWeight:'500'
    },
    meanings:{
        lineHeight:'1.5',
        textAlign:'left',
        fontWeight:'500'
    },
    typeOfWord:{
        color: 'blue'
    },
    definition:{
        marginLeft:'20px',
        color:'darkblue'
    },
    example:{
        color:'green',
        marginLeft:'20px'
    }
}));

export default function WordDetail(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const meanings = props.wordDetail.meanings.map((mean, index) => {
        if(!mean.definitions[0]) return;
        return <div key={index} className={classes.meanings}>
            <p className={classes.typeOfWord}>Loại từ: {mean.partOfSpeech}</p>
            <p className={classes.definition}>Định nghĩa: {mean.definitions[0].definition}</p>
            <p className={classes.example}>Ví dụ: {mean.definitions[0].example}</p>
        </div>;
    });
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h3 className={classes.wordTitle}>{props.wordDetail.originalWord}</h3>
            <p className={classes.wordIpa}>
                {props.wordDetail.ipa}
            </p>
            <span className={classes.wordTranslation}>
                Phiên dịch: {props.wordDetail.translation}
            </span>
            {meanings}
        </div>
    );

    return (
        <div>
            <Modal
                className={classes.modalWordDetail}
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
