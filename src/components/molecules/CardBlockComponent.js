import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Card, Image } from 'semantic-ui-react'
import bookmarkSrc from '../../assets/image/Bookmark.png'
import replySrc from '../../assets/image/Reply.png'
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({

    mobileWidth: {
        '@media (max-width: 576px)': {
            width: '100% !important'
        },
        width:347,
        borderRadius:0,
        height:250,
        marginBottom:0,
        marginRight:10
    },
    cardDescription: {
        fontSize:13,
        height:75,
        overflow: 'hidden'
    },
    cardMeta: {
        fontSize:13,
        marginTop:10,
        height: 25
    },
    cardFooter: {
        fontSize:13,
        marginTop:17,
        display:'flex',
    },
    iconContainer: {
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: 90
    },
    cardFooterMeta: {
        height: 40,
        width: 0,
        flexGrow: 1,
        overflow: 'hidden'
    },
    cardDes: {
        height:60
    },
})


function CardBlockComponent({searchKey}){

    const datas = useSelector(state => state.news.data);

    let searchKeyword = searchKey ? searchKey.join() : '';

    return (

        <Card.Group className = "mt-3">
            {datas.map(data =>(
                <Card className={css(styles.mobileWidth)}>
                    <Card.Content className="pt-4">
                        <Card.Header>{data.title}</Card.Header>
                        <Card.Description className={css(styles.cardDescription)}>
                            {data.description}
                        </Card.Description>
                        <Card.Meta className={css(styles.cardMeta)}>{data.author}, {data.source.name}</Card.Meta>
                        
                        <Card.Content className={css(styles.cardFooter)}>
                            <Card.Meta className={css(styles.cardFooterMeta)}>{searchKeyword},{data.publishedAt}</Card.Meta>
                            <div className={css(styles.iconContainer)}>
                                <a><Image className={css(styles.cardIcon)} src={bookmarkSrc} wrapped ui={false} /></a>
                                <a><Image className={css(styles.cardIcon)} href={data.url} src={replySrc} wrapped ui={false} /></a>
                            </div>
                        </Card.Content>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>
    )
};

export default CardBlockComponent
