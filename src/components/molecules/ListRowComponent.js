import React from 'react'
import { Image, Header, Divider } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';
import bookmarkSrc from '../../assets/image/Bookmark.png'
import replySrc from '../../assets/image/Reply.png'
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({

    container:{
        width:1078
    },
    listImage: {
        opacity:'80%',
        height:125
    },
    article:{
        marginLeft:26,
        width: 0,
        flexGrow: 1
    },
    description: {
        color:"#535050",
        height: 48,
        overflow: 'hidden'
    },
    footer:{
        color:'#9B9B9B',
        display:'flex',
        flexDirection: 'column'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: 90
    },
    list:{
        display:'flex',
        marginTop:30
    },
    author: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
})

function ListRowComponent({searchKey}){

    const datas = useSelector(state => state.news.data);

    let searchKeyword = searchKey ? searchKey.join() : '';

    return (

        <div className={css(styles.container)}>
            {datas.map(data=>(
                <div className={css(styles.list)}>
                    <Image className={css(styles.listImage)} src={data.urlToImage} size='small'/>
               
                    <Column className={css(styles.article)}>
                        <Header as='h3'>{data.title}</Header>
                        <div className={css(styles.description)}>
                            {data.description}
                        </div>
                        <div className={css(styles.footer)}>
                            <div>{searchKeyword}</div>
                            <div className={css(styles.author)}>{data.publishedAt}, {data.author}, {data.source.name}</div>
                        </div>
                        <Divider fitted />
                    </Column>
                    <Row className={css(styles.iconContainer)}>
                        <a><Image className={css(styles.Icon)} src={bookmarkSrc} wrapped ui={false} /></a>
                        <a><Image className={css(styles.Icon)} src={replySrc} wrapped ui={false} /></a>
                    </Row>
                    <Divider fitted />
                </div>
            ))}
        </div>
    )    
};

export default ListRowComponent