import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    
    ActiveSwitch:{
        padding:10,
        display:'flex',
        width:30,
        color:'#323C47',
        borderTopLeftRadius: '20px !important',
        borderBottomLeftRadius:'20px !important',
        backgroundColor:'white'
    },
    Inactive:{
        padding:10,
        display:'flex',
        width:30,
        color:'#323C47',
        borderTopRightRadius:'20px !important',
        borderBottomRightRadius:'20px !important',
        backgroundColor:'white'
    },
    cardsImage:{
        marginRight:10,
    },
    listImage:{
        marginRight:10,
    },
    btnGroup:{
        padding:2,
        backgroundColor:'#358ED7',
        borderRadius:20,
        width:64,
        height:26,
    },
    chageColor: {
        backgroundColor:'#358ED7',
    },
})

const ButtonSwitch = () => {

    const [bgColor, setBgColor] = useState(false);

    const onChangeView = () => {
        setBgColor(!bgColor);
    }

    return (
        <div style={{marginTop:10}}>
            <span style={{color:"#34495E", marginRight:14, verticalAlign:'super'}}>All</span>
                <Button.Group className={css(styles.btnGroup)}>
                    <Button className={css(styles.ActiveSwitch, bgColor ? styles.chageColor:'')} onClick={onChangeView}/>
                    <Button className={css(styles.Inactive, bgColor ? '': styles.chageColor)} onClick={onChangeView}/>
                </Button.Group>
            <span style={{color:"#34495E",marginLeft:10, verticalAlign:'super'}}>Per keyword</span>
        </div>
    )
}

export default ButtonSwitch