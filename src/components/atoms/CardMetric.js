import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Card, Image } from 'semantic-ui-react'

import eleCheck from '../../assets/image/ele-check.png'
import eleMarker from '../../assets/image/ele-marker.png'
import eleEnergy from '../../assets/image/ele-energy.png'
import eleDynamic from '../../assets/image/ele-dynamic.png'

const styles = StyleSheet.create({
    mobileWidth: {
        '@media (max-width: 576px)': {
            width: '100% !important'
        },
        border: '1px solid rgb(46,91,255,8%)',
        borderRadius:1,
        boxShadow: "0px 10px 20px 0px rgba(46,91,255,0.07)",
        width:259
    },
    eleMetric: {
        width:48,
        height:48
    },
    description: {
        fontSize:48
    },
    cardMeta: {
        color:'rgb(135,152,173)'
    },
    cardGroup: {
        marginTop:65
    }
})

const CardBlockComponent = (props) => {

    return (

        <Card.Group className={css(styles.cardGroup)}>
            <Card className={css(styles.mobileWidth) +" pl-2"}>
                <Card.Content>
                    <Image className={css(styles.eleMetric)} src={eleCheck}/>
                    <Card.Description className={css(styles.description)}>
                        1,892
                    </Card.Description>
                    <Card.Meta className={css(styles.cardMeta)}>Articles published</Card.Meta>
                </Card.Content>
            </Card>

            <Card className={css(styles.mobileWidth) +" pl-2"}>
                <Card.Content>
                    <Image className={css(styles.eleMetric)} src={eleMarker}/>
                    <Card.Description className={css(styles.description)}>
                        23,782
                    </Card.Description>
                    <Card.Meta className={css(styles.cardMeta)}>Viewership</Card.Meta>
                </Card.Content>
            </Card>

            <Card className={css(styles.mobileWidth) +" pl-2"}>
                <Card.Content>
                    <Image className={css(styles.eleMetric)} src={eleEnergy}/>
                    <Card.Description className={css(styles.description)}>
                        88,923
                    </Card.Description>
                    <Card.Meta className={css(styles.cardMeta)}>Media mentions</Card.Meta>
                </Card.Content>
            </Card>

            <Card className={css(styles.mobileWidth) +" pl-2"}>
                <Card.Content>
                    <Image className={css(styles.eleMetric)} src={eleDynamic}/>
                    <Card.Description className={css(styles.description)}>
                        23
                    </Card.Description>
                    <Card.Meta className={css(styles.cardMeta)}>Unique publishers</Card.Meta>
                </Card.Content>
            </Card>
            
        </Card.Group>
 
    )
}

export default CardBlockComponent
