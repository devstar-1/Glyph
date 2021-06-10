import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Card, Button} from 'semantic-ui-react'

const styles = StyleSheet.create({
    mobileWidth: {
        '@media (max-width: 576px)': {
            width: '100% !important'
        },
        border: '1px solid rgb(46,91,255,8%)',
        borderRadius:1,
        width:350,
        padding:"9px 20px",
        zIndex:3,
        boxShadow:'none',
        borderWidth:1,
        height:230
    },

    cardOverlap1:{
        zIndex:2,
        position: 'relative',
        top: -252,
        left:3,
        width:344,
        borderRadius:1,
        borderWidth:1,
        boxShadow:'none',
        border: '1px solid rgb(46,91,255,8%)',
    },
    cardOverlap2:{
        zIndex:1,
        position: 'relative',
        left:6,
        top: -503,
        width:338,
        borderRadius:1,
        borderWidth:1,
        boxShadow:'none',
        border: '1px solid rgb(46,91,255,8%)',
    },
    cardOverlap3:{
        zIndex:2,
        position: 'relative',
        left:9,
        top: -252,
        width:350,
        borderRadius:1,
        borderWidth:1,
        boxShadow:'none',
        border: '1px solid rgb(46,91,255,8%)',
    },
    cardOverlap4:{
        zIndex:1,
        position: 'relative',
        left:18,
        top: -503,
        width:350,
        borderRadius:1,
        borderWidth:1,
        boxShadow:'none',
        border: '1px solid rgb(46,91,255,8%)',
    },
    cardOverlap5:{
        zIndex:2,
        position: 'relative',
        left:9,
        top: -252,
        width:350,
        borderRadius:1,
        borderWidth:1,
        boxShadow:'none',
        border: '1px solid rgb(46,91,255,8%)',
        height:230
    },
    cardOverlap6:{
        zIndex:1,
        position: 'relative',
        left:18,
        top: -503,
        width:350,
        borderRadius:1,
        borderWidth:1,
        boxShadow:'none',
        border: '1px solid rgb(46,91,255,8%)',
        height:230
    },
    header: {
        marginTop:20
    },
    cardGroup: {
        marginTop:70,
        height:255
    },
    techBtn:{
        borderRadius:'3em',
        fontsize:12,
        width:125,
        textAlign:'left',
        paddingLeft:12,
        paddingBottom:4,
        paddingTop:4,
        
    },
    ethBtn:{
        borderRadius:'3em',
        fontsize:12,
        paddingLeft:18,
        paddingRight:18,
        paddingBottom:4,
        paddingTop:4,
        textAlign:'left'
    },
    cardMeta:{
        fontSize:12,
        marginTop:65
    },
    btngroup:{
        display:'flex',
        justifyContent:'space-between'
    }
})

const CardBlockComponent = (props) => {

    return (

        <Card.Group className={css(styles.cardGroup)}>
            <Card className={css(styles.mobileWidth) +" pl-2"}>
                <Card.Content>
                    <div className={css(styles.btngroup)}>
                        <div>
                            <Button className={css(styles.techBtn)} basic color="#ECECEC">
                                Techcrunch
                            </Button>
                        </div>
                        <div>
                        <Button className={css(styles.ethBtn)} basic color='blue'>
                            Ethereum
                        </Button>
                        </div>
                    </div>
                    <Card.Header className={css(styles.header)}>
                        The best ETH stack in the market just got even better
                    </Card.Header>

                    <Card.Meta className={css(styles.cardMeta)}>UPDATED DECEMBER 19</Card.Meta>
                </Card.Content>
            </Card>
            <Card className={css(styles.mobileWidth) +" pl-2"}>
                <Card.Content>
                    <div className={css(styles.btngroup)}>
                        <div>
                            <Button className={css(styles.techBtn)} basic color="#ECECEC">
                                Coinbase
                            </Button>
                        </div>
                        <div>
                            <Button className={css(styles.ethBtn)} basic color='green'>
                                Bitcoin
                            </Button>
                        </div>
                    </div>
                    <Card.Header className={css(styles.header)}>
                        The young entrepreneurs modeling their NFTs like a startup
                    </Card.Header>
                    <Card.Meta className={css(styles.cardMeta)}>UPDATED DECEMBER 19, 2014</Card.Meta>
                </Card.Content>
            </Card>

            <Card className={css(styles.mobileWidth) +" pl-2"}>
                <Card.Content>
                    <div className={css(styles.btngroup)}>
                        <div>
                            <Button className={css(styles.techBtn)} basic color="#ECECEC">
                                Coindesk
                            </Button>
                        </div>
                        <div>
                            <Button className={css(styles.ethBtn)} basic color='blue'>
                                NFT
                            </Button>
                        </div>
                    </div>
                    <Card.Header className={css(styles.header)}>
                        Elon Musk leads sing-along to drive DOGE 
                    </Card.Header>

                    <Card.Meta className={css(styles.cardMeta)}>UPDATED DECEMBER 19, 2014</Card.Meta>
                </Card.Content>
            </Card>
            <Card className={css(styles.cardOverlap1) +" pl-2"}/>
            <Card className={css(styles.cardOverlap3) +" pl-2"}/>
            <Card className={css(styles.cardOverlap5) +" pl-2"}/>
            <Card className={css(styles.cardOverlap2) +" pl-2"}/>
            <Card className={css(styles.cardOverlap4) +" pl-2"}/>
            <Card className={css(styles.cardOverlap6) +" pl-2"}/>
        </Card.Group>
 
    )
}

export default CardBlockComponent
