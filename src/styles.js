import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
leftContainer:{
    minHeight:"60vh",
    overflow:"hidden"
},
rightContainer:{
    minHeight:"60vh",
    maxHeight:"71vh",
    overflowY:"scroll"
},
listWordBooks:{
    background:"rgba(255,255,255,0.7)",
    borderRadius:"10px 10px 0px 0px",
    color:"#2c2c2c",
    fontWeight:"500",
    minHeight:"71vh",
    paddingLeft:"8px",
    paddingRight:"8px"
},
addWordBook:{
    background:"rgba(255,255,255,0.8)",
    borderRadius:"0px 0px 10px 10px",
    paddingBottom:"10px",
    paddingRight:"10px",
    boxShadow:"3px 2px 5px rgba(3,3,3,0.3)",
},
inputAddWordBook:{
width:"96%",
},
btnAddWordBook:{
    height:"95%",
    width:"30%"
},
addWord:{
    background:"rgba(255,255,255,0.8)",
    borderRadius:"10px",
    padding:"10px",
    position:"absolute",
    bottom:"0",
    marginBottom:"10px",
    width:"65%",
    boxShadow:"3px 2px 5px 2px rgba(3,3,3,0.3)"
},
inputAddWord:{
width:"98%",
},
btnAddWord:{
    height:"95%",
    width:"90%"
},
backdrop:{
    color: '#fff',
    zIndex:2,
    background:'rgba(0,0,0,0.2)',
    backdropFilter: "blur(3px)"
},
wordCard:{
    background:'rgba(255,255,255,0.7)'
},
wordBooksDrawer:{
    width: "320px",
    height:"90%",
    position:"relative"
},

}))
export default useStyles;