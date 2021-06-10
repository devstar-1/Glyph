import React from 'react';
import { Row} from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { Input } from 'antd';
import { withStyles } from '@material-ui/core/styles';
import { Dropdown, Icon } from 'semantic-ui-react'

import BaseLogoSrc from '../../assets/image/BaseLogo.png'
import SearchIcon from '../../assets/image/Search-Icon.png'
import avatarSrc from '../../assets/image/avatar.png'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';


const StyledBadge = withStyles((theme) => ({
    badge: {
      right: 1,
      top: 2,
      padding: '0 2px',
      backgroundColor:'#EB3232',
      minWidth:14,
      height:14,
    },
}))(Badge);

const styles = StyleSheet.create({
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid rgb(61 87 170 / 15%)',
    },
    container: {
        height: 70,
        borderBottom:'2px solid #E6E8F1',
        justifyContent:'space-between'
    },
    cursorPointer: {
        cursor: 'pointer'
    },

    iconStyles: {
        cursor: 'pointer',
        marginLeft:20,
        marginRight:20,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    },
    searchIcon:{
        marginLeft:'21px',
        marginRight:'20px'
    },
    logo:{
        marginLeft:22,
        width:102,
        height:28
    }
});

const HeaderComponent = (props) =>{

    return (
        <Row className={css(styles.container)} >
            <Row vertical="center">
                <Row vertical="center">
                    <img src={BaseLogoSrc} alt="logo" className={css(styles.logo)} />
                </Row>
                <Row>
                    <img src={SearchIcon} alt="search" className={css(styles.searchIcon)} />
                </Row>
                    <Input placeholder="Cryptocoins" />
            </Row>
                
           <Row>
                <Row vertical='center' style={{borderLeft:'1px solid rgba(61,87,170, 0.15)'}}>
                    <div className={css(styles.iconStyles)}>
                        
                        <StyledBadge badgeContent={12} color="error">
                            <NotificationsNoneIcon/>
                        </StyledBadge>
                        <Dropdown pointing className='link item'>
                            <Dropdown.Menu style={{left:-90}}>
                                <Dropdown.Header>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Life style
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Food
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Travel & Tourism
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Business
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Office Productive
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    IT & Software
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Life style
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Photography
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Health & Fitness
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Teacher Training
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Music
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Math & Science
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Social Science
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Humanities
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Language
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Icon name='plus' color='blue' size='small' className='right floated' />
                                    Test Prep
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Row>
                <Row vertical="center" className="mr-2" style={{borderLeft:'1px solid rgba(61,87,170, 0.15)'}}>
                    <img src={avatarSrc} alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
                </Row>
            </Row>
         </Row>
    );
}

export default HeaderComponent;
