import React, { useState } from 'react'
import { Button, Image } from 'semantic-ui-react'
import tableIcon from '../../assets/image/cardsicon.png'
import listIcon from '../../assets/image/tableicon.png'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    
    ActiveSwitch:{
        padding:10,
        display:'flex',
        width:86,
        color:'#323C47',
        backgroundColor:'white'
    },
    Inactive:{
        padding:10,
        display:'flex',
        width:86,
        color:'#323C47',
        backgroundColor:'rgb(233,239,244,0.48)',
    },
    cardsImage:{
        marginRight:10,
    },
    listImage:{
        marginRight:10,
    }
})



const ButtonSwitch = (props) => {

    const [CheckedItem, setCheckedItem] = useState(true);

    const onChangeView = () => {
        setCheckedItem(!CheckedItem);
        props.onSelectView({'CheckedItem': !CheckedItem});
    }

    return (
        <Button.Group>
            <Button className={css(!CheckedItem ? styles.Inactive : styles.ActiveSwitch)} onClick={onChangeView}>
                <Image className={css(styles.cardsImage)} src= {tableIcon}/> Cards</Button>
            <Button className={css(!CheckedItem ? styles.ActiveSwitch : styles.Inactive)} onClick={onChangeView}>
                <Image className={css(styles.listImage)} src={listIcon}/> List</Button>
        </Button.Group>
    )
}

export default ButtonSwitch