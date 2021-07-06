import React from 'react'
import useStyles from '../../../styles'
import ListItem from '@material-ui/core/ListItem';
import { Divider } from '@material-ui/core';
export default function WordBook(props) {
    const classes = useStyles();

    return (
        <>
            <ListItem 
            button
            selected={props.selectedIndex === props.index}
            onClick = {(event)=> props.onClick(event, props.index)}
            >
               {props.name}
            </ListItem>
            <Divider/>
        </>
    )
}
