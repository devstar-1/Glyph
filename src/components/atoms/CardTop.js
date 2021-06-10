import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Card, Image, Dropdown, Feed } from 'semantic-ui-react'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import avatarSrc1 from '../../assets/image/avatar1.png'
import avatarSrc2 from '../../assets/image/avatar2.png'
import avatarSrc3 from '../../assets/image/avatar3.png'
import avatarSrc4 from '../../assets/image/avatar4.png'
import avatarSrc5 from '../../assets/image/avatar5.png'


const styles = StyleSheet.create({

    mobileWidth: {
        '@media (max-width: 576px)': {
            width: '100% !important'
        },
        border: '1px solid rgb(46,91,255,8%)',
        borderRadius:1,
        boxShadow: "0px 10px 20px 0px rgba(46,91,255,0.07)",
        width:350,
    },
    description: {
        color:'#8798AD',
        marginTop:14
    },
    cardMeta: {
        color:'rgb(135,152,173)'
    },
    cardGroup: {
        marginTop:45
    },
    dropdown:{
        fontSize:13,
        marginTop:8
    },
    avatarImg:{
        width:48,
        height:48,
        borderRadius:'50%'
    },
    summary:{
        fontWeight:500,
        marginTop:2
    },
    container:{
        display:'flex',
        marginLeft:12,
        justifyContent:'space-between',
    },

    mentionContainer:{
        display:'flex',
        justifyContent:'space-between',
    },
    content:{
        textAlign:'end'
    },
    header:{
        display:'flex',
        justifyContent:'space-between'
    }
})

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: 8,
      top: 5,
      padding: '0 2px',
      backgroundColor:'#FFFFFF',
      boxShadow: "0px 3px 10px 0px rgb(46,91,255,0.3)",
      minWidth:16,
      height:16
    },
  }))(Badge);

const trigger = (
    <span> . . . </span>
)
  
const dropdownOptions = [
    { key: 'profile', text: 'Your Profile' },
    { key: 'stars', text: 'Your Stars' },
    { key: 'explore', text: 'Explore' },
]

const CardTop = (props) => {

    return (

        <Card.Group className={css(styles.cardGroup)}>
            <Card className={css(styles.mobileWidth) +" pl-2 pr-2"}>
                <Card.Content >
                    <Card.Content className={css(styles.header)}>
                        <Card.Description className={css(styles.description)}>
                            TOP AUTHORS
                        </Card.Description>
                        <Dropdown
                            className={css(styles.dropdown)}
                            trigger={trigger}
                            options={dropdownOptions}
                            pointing='top right'
                            icon={null}
                        >
                        </Dropdown>
                    </Card.Content> 
       
                    <Feed className="mt-4">
                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={1} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc1}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                    <Feed.Summary>
                                        Bebop
                                    </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Volvo Intellisafe" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>4,845</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="1,232 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={2} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc2}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Gran Tesoro
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Chevrolet Bolt" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>3,489</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="945 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={3} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc3}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Belafonte
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Infiniti Q50S" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>2,854</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="834 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={4} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc4}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Chester
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Audi RS 7" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>1,212</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="812 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={5} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc5}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Expedia
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Tesla model x" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>1,084</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="724 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={6} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc5}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Aeolus
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Tesla Model S" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>943</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="466 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>

            <Card className={css(styles.mobileWidth) +" pl-2 pr-2"}>
                <Card.Content >
                    <Card.Content className={css(styles.header)}>
                        <Card.Description className={css(styles.description)}>
                            TOP SOURCES
                        </Card.Description>
                        <Dropdown
                            className={css(styles.dropdown)}
                            trigger={trigger}
                            options={dropdownOptions}
                            pointing='top right'
                            icon={null}
                        >
                        </Dropdown>
                    </Card.Content> 
       
                    <Feed className="mt-4">
                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={1} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc1}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                    <Feed.Summary>
                                        Bebop
                                    </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Volvo Intellisafe" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>$6,432</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="1,232 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={2} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc2}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Gran Tesoro
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Chevrolet Bolt" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>$5,342</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="945 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={3} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc3}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Belafonte
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Infiniti Q50S" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>$5,133</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="834 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={4} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc4}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Chester
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Audi RS 7" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>$4,755</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="812 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={5} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc5}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Expedia
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Tesla model x" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>$4,140</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="724 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <StyledBadge badgeContent={6} overlap="circle" color="#8097B1">
                                <Image className={css(styles.avatarImg)} src={avatarSrc5}/>
                            </StyledBadge>
                            <Feed.Content className={css(styles.container)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Aeolus
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="Tesla Model S" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>$3,323</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="466 miles" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>

            <Card className={css(styles.mobileWidth) +" pl-2 pr-2"}>
                <Card.Content >
                    <Card.Content className={css(styles.header)}>
                        <Card.Description className={css(styles.description)}>
                            TOP CO-MENTIONS
                        </Card.Description>
                        <Dropdown
                            className={css(styles.dropdown)}
                            trigger={trigger}
                            options={dropdownOptions}
                            pointing='top right'
                            icon={null}
                        >
                        </Dropdown>
                    </Card.Content> 
       
                    <Feed className="mt-4">
                        <Feed.Event className =" mt-2">
                            <Feed.Content className={css(styles.mentionContainer)}>
                                <Feed.Content >
                                    <Feed.Summary>
                                        Chrysler Building - The High Line
                                    </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="06/03/2018" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>778</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="24min" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <Feed.Content className={css(styles.mentionContainer)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Theatre District - Prospect Park
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="06/03/2018" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>349</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="21min" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                             <Feed.Content className={css(styles.mentionContainer)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Brooklyn Museum - Times Square
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="06/04/2018" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>234</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="45min" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <Feed.Content className={css(styles.mentionContainer)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Brookfield Place - Chelse Market
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="06/04/2018" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>121</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="14min" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <Feed.Content className={css(styles.mentionContainer)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Smorgasburg - Yankee Stadium
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="06/05/2018" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>88</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="52min" />
                                </Feed.Content>
                                
                            </Feed.Content>
                        </Feed.Event>

                        <Feed.Event className =" mt-2">
                            <Feed.Content className={css(styles.mentionContainer)}>
                                <Feed.Content >
                                <Feed.Summary>
                                    Union Square - The Cloisters
                                </Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="06/05/2018" />
                                </Feed.Content>
                                
                                <Feed.Content className={css(styles.content)}>
                                    <Feed.Summary>59</Feed.Summary>
                                    <Feed.Date className={css(styles.summary)} content="22min" />
                                </Feed.Content>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default CardTop
