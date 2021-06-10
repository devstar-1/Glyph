import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';
import Category from '../atoms/CategoryDropdownCom'
import { Tab } from 'semantic-ui-react'
import CardBlockComponent from '../molecules/CardBlockComponent'
import ListRowComponent from '../molecules/ListRowComponent'
import AirbnbSlider from '../atoms/SliderCom'
import SwitchComp from '../atoms/CardViewSwitchCom'
import ChipComp from '../atoms/ChipCom'
import { Dropdown, Menu } from 'semantic-ui-react'
import ToggleSwitchComponent from '../atoms/ToggleSwitchCom'
import CardMetric from '../atoms/CardMetric'
import Chart from '../atoms/ChartCom'
import CardTop from '../atoms/CardTop'
import CardUpdate from '../atoms/CardUpdate'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Input } from 'antd';
import SourceSelect from '../atoms/SourceSelect'
import { getDataApi } from './newsSlice';
import { useSelector, useDispatch } from 'react-redux';


const styles = StyleSheet.create({

    container:{
        padding:'60px 135px',
        '@media (max-width: 768px)': {
            padding:'30px 50px',
            display:'block'
        },
        '@media (max-width: 576px)': {
            display: 'block',
            padding:'30px 50px',
        }
    },
    mobileView: {
        '@media (max-width: 768px)': {
            textAlign:'center'
        },
        '@media (max-width: 576px)': {
            display: 'block',
        },
        justifyContent:'space-between',
        alignItems:'center'
    },
    searchInput:{
        width:270,
        marginRight:40,
    },
    sliderbar:{
        marginLeft:90,
    },
    goBtn:{
        width:100,
        marginTop:40,
    },
    media:{
        marginTop:82
    },
    newsBtn:{
        width:100,
        backgroundColor:'#43A6EB',
        borderColor:'#43A6EB',
    },
    insightsBtn:{
        width:100,
        backgroundColor:'#9FA5AA',
        borderColor:'#9FA5AA'
    },
    category:{
        '@media (max-width: 1000px)': {
            display:'block',
        },
        marginTop:32,
        justifyContent:'space-between',
    },
    cardblock: {
        marginTop:60
    },
    switchBtn:{
        '@media (max-width: 1000px)': {
            marginTop:12,
            width:182
        },
        backgroundColor:'rgb(233,239,244,0.48)',
        padding:5,
        borderRadius:4
    },
    menuTab:{
        marginLeft:40
    },
    searchGroup:{
        '@media (max-width: 1296px)': {
            display:'block'
        },
    },
    searchDropdown:{
        height:33,
        marginRight:10,
        boxShadow:'none'
    },
    linkIcon:{
        color:'#45A9F6',
        justifyContent:'flex-end',
        marginTop:10
    },
    next:{
        justifyContent:'center',
    },
})


export default function ContentComponent(){
    const dispatch = useDispatch();
    const [changeView, setChangeView] = useState(false);
    const [changeInsights, setChangeInsights] = useState(false);
    const [togglechangeView, setToggleChangeView] = useState(false);
    const [inputValue, setInputValue] = useState(null);
    const [chipItems, setChipItems] = useState([]);
    const [activeIndex,setActiveIndex] = useState({activeIndex: 1});
    

    const handleKeyDown = (evt) => {
        if (["Enter"].includes(evt.key)) {
            if(inputValue){
                setChipItems([...chipItems, inputValue]);
                setInputValue("");
            }
        }
    };

    const handleDelete = (index) => {
        setChipItems(chipItems.filter((chip,idx) => idx !== index));
    }

    const handleChangeView = () => {
        setToggleChangeView(!togglechangeView)
    }

    const handleChangeCard = () => {
        setChangeView(!changeView)
    }

    const handleChangeInsights = () => {
        setChangeInsights(!changeInsights)
    }

    const handleTabChange = (e, { activeIndex }) => setActiveIndex({ activeIndex });
    console.log("===========",activeIndex)
    
    const panes1 = [
        {
            menuItem: 'Latest',
        },
        {
            menuItem: 'Trending',
        },
    ]

    const panes2 = [
        {
            menuItem: 'Ethereum',
            // render: () => <Tab.Pane ></Tab.Pane>,
        },
        {
            menuItem: 'Dogecoin',
            // render: () => <Tab.Pane ></Tab.Pane>,
        },
    ]

    const btnPanes = [
        { menuItem: 'News', render: () => <Tab.Pane><button type="button" className={css(changeInsights? styles.newsBtn: styles.insightsBtn) + " btn btn-primary"} onClick = {handleChangeInsights}>News</button></Tab.Pane> },
        { menuItem: 'Insights', render: () => <Tab.Pane> <button type="button" className={css(changeInsights? styles.insightsBtn: styles.newsBtn) + " btn btn-primary"} onClick = {handleChangeInsights}>Insights</button></Tab.Pane> },
    ]

    const Options = [
        { key: 1, text: 'Test 1', value: 1 },
        { key: 2, text: 'Test 2', value: 2 },
        { key: 3, text: 'Test 3', value: 3 },
    ]

    const totalResults = useSelector(state => state.news.totalResults);

    return (
        
        <div className={css(styles.container)}>
            <Row alignItems="center" className={css(styles.mobileView)}>
                <Column>
                    <Row alignItems="center" className={css(styles.searchGroup)}>
                        <Column alignSelf ='start'>
                            <Input 
                                className={css(styles.searchInput)} 
                                placeholder='Search Keywords'
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                value={inputValue}
                                required
                            />
                            <ChipComp inputData={chipItems} onDelete={handleDelete}/>
                        </Column>
                        <Column alignSelf ='start' style={{marginLeft:30}}>
                            <Row>
                                <Menu compact className={css(styles.searchDropdown)}>
                                    <SourceSelect/>
                                </Menu>
                                <Menu compact className={css(styles.searchDropdown)}>
                                    <Dropdown text='Region(3)' options={Options} simple item />
                                </Menu>
                                <Menu compact className={css(styles.searchDropdown)}>
                                    <Dropdown text='Author(All)' options={Options} simple item />
                                </Menu>
                            </Row>
                            <Row>
                                <button type="button" className={css(styles.goBtn) + " btn btn-primary" } onClick={() => dispatch(getDataApi(chipItems))}>Go</button>
                            </Row>
                        </Column>
                        <Column alignSelf ='start' className={css(styles.sliderbar)}>
                            <AirbnbSlider/>
                            <label>Last Week</label>
                        </Column>
                         
                    </Row>
                    <Row className={css(styles.media)}>
                        <Column>
                            <h4 className={css(styles.title)}>All Media ({totalResults})</h4>
                        </Column>
                        <Column>
                            <Tab panes={btnPanes} style={{marginLeft:40}}/>
                        </Column>
                    </Row>
                    {changeInsights ? 
                        <div>
                            <Row className={css(styles.category)}>
                                <Row>
                                    <Category/>
                                    <Tab 
                                        menu={{ secondary: true, pointing: true, }} 
                                        panes={panes1} 
                                        className={css(styles.menuTab) + " customTabs"}
                                        onTabChange={handleTabChange}
                                    />
                                </Row>
                                <Column alignItems="center" className={css(styles.switchBtn)}>
                                    <SwitchComp onSelectView = {handleChangeCard} />
                                </Column>
                            </Row>
                            <Column className={css(styles.cardblock)}>
                                {!changeView ? <CardBlockComponent /> : <ListRowComponent />}
                            </Column>
                        </div>
                        :
                        <Column style={{marginTop:32}}>
                            <Row>
                            <ToggleSwitchComponent onSelectView = {handleChangeView} className={css(styles.switchBtn)} />
                            <Tab menu={{ secondary: true, pointing: true, }} panes={panes2} className=" customTabs ml-4"/>
                            </Row>
                            <Column>
                            <Row>
                                <CardMetric/>
                            </Row>
                            <Row>
                                <Chart/>
                            </Row>
                            <Row>
                                <CardTop/>
                            </Row>
                            <Row>
                                <CardUpdate/>
                            </Row>
                            <Row className={css(styles.linkIcon)}>
                                <a href="">See all</a>
                            </Row>
                            <Row className={css(styles.next)}>
                                <ChevronLeftIcon onClick = {handleChangeInsights}/>
                                <ChevronRightIcon style={{marginLeft:20}}/>
                            </Row>
                            </Column>
                        </Column>
                    }
                </Column>
             </Row>
        </div>
    )
};


                    