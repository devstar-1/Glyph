import React from 'react';
import "d3-transition";
import { select } from "d3-selection";
import { Bar } from 'react-chartjs-2';
import { StyleSheet, css } from 'aphrodite';
import { Card, Dropdown, Button } from 'semantic-ui-react'
import ReactWordcloud from "react-wordcloud";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
  } from 'react-google-maps';

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from "./Words";

const styles = StyleSheet.create({

    mobileWidth: {
        '@media (max-width: 576px)': {
            width: '100% !important'
        },
        border: '1px solid rgb(46,91,255,8%)',
        borderRadius:1,
        boxShadow: "0px 8px 15px 0px rgba(46,91,255,0.07)",
        width:532,
        height:340
    },
    description: {
        fontSize:9.75
    },
    cardGroup:{
        marginTop:40
    },
    dropdown:{
        marginLeft:'70%',
        fontSize:12
    },
    mediaDescription: {
        fontSize:13,
    },
    mediaDropdown:{
        marginLeft:'73%'
    },
    highlightDropdown:{
        marginLeft:'72%'
    },
    buttonStyle1: {
        width:46,
        height:20,
        borderRadius:3,
        fontSize:10,
        color:'white',
        padding:0,
        backgroundColor:'#1991EB'
    },
    buttonStyle2: {
        width:46,
        height:20,
        borderRadius:3,
        fontSize:10,
        color:'white',
        padding:0,
        backgroundColor:'#36AF47'
    },
    buttonStyle3: {
        width:46,
        height:20,
        borderRadius:3,
        fontSize:10,
        color:'white',
        padding:0,
        backgroundColor:'#ED1C24'
    },
    buttonGroup:{
        textAlign:'end',
        marginTop:5
    },
    highlightCard:{
        border: '1px solid rgb(46,91,255,8%)',
        borderRadius:1,
        boxShadow: "0px 8px 15px 0px rgba(46,91,255,0.07)",
        width:532,
        height:400
    },
    highlight:{
        textAlign:'center'
    }
})

const getCallback = (callback) => {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      text
        .on("click", () => {
          if (isActive) {
            window.open(`https://duckduckgo.com/?q=${word.text}`, "_blank");
          }
        })
        .transition()
        .attr("background", "white")
        .attr("font-size", isActive ? "300%" : "100%")
        .attr("text-decoration", isActive ? "underline" : "none");
    };
}

const BasicMap = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: parseFloat(-37.813179), lng: parseFloat(144.950259) }}
  >
    <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
  </GoogleMap>
)));

const wordOptions = {
    rotations: 2,
    rotationAngles: [0, 0],
  };

const callbacks = {
    getWordColor: (word) => (word.value > 50 ? "darkgreen" : "green"),
    getWordTooltip: (word) =>
      `The word "${word.text}" appears ${word.value} times.`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
};

const data = () => ({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      type: 'bar',
      label: 'Ethereum',
      backgroundColor: `#2E5BFF`,
      data: [80, 60, 76, 130, 53, 60, 120],
      borderColor: 'white',
      borderWidth: 1,
      barPercentage:0.3,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      type: 'bar',
      label: 'Dogecoin',
      backgroundColor: `#8C54FF`,
      data: [90, 74, 85, 90, 62, 45, 115],
      barPercentage:0.3,
      borderWidth: 1,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
        type: 'line',
        label: 'Viewers',
        backgroundColor: `#F7C137`,
        borderColor: `#F7C137`,
        data: [98, 74, 80, 90, 60, 45, 115],
        borderWidth:2
        // data: [108, 84, 90, 100, 70, 55, 125],
    },
  ],
});

const mediaData = () => ({
    labels: ['','12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    datasets: [
      {
          type: 'line',
          label: 'Eth',
          backgroundColor: `#2E5BFF`,
          borderColor: `#2E5BFF`,
          data: [30, 20, 60, 55, 124, 38, 70, 52, 90],
          borderWidth:2,
          fill:false
      },

      {
        type: 'line',
        label: 'Dogecoin',
        backgroundColor: `#8C54FF`,
        borderColor: `#8C54FF`,
        data: [20, 38, 50, 25, 87, 12, 60, 26, 80],
        borderWidth:2,
        fill:false
    },
    ],
  });

const options = {
    data: data,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
};

const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          title: {
            display: true,
            text: 'Legend Title',
          }
        }
      }
    }
  };

const actions = [
    {
      handler(chart) {
        chart.options.plugins.legend.align = 'end';
        chart.options.plugins.legend.title.position = 'end';
        chart.update();
      }
    },
  ];

const trigger = (
    <span> . . . </span>
)
  
const dropdownOptions = [
    { key: 'profile', text: 'Your Profile' },
    { key: 'stars', text: 'Your Stars' },
    { key: 'explore', text: 'Explore' },
]

const cardChart = () => {

    return (
        
        <Card.Group className={css(styles.cardGroup)}>
            <Card className={css(styles.mobileWidth) + " pt-2"}>
                <Card.Content>
                    <Card.Description className={css(styles.description)}>
                        MEDIA TRENDS LAST WEEK
                        <Dropdown
                            className={css(styles.dropdown)}
                            trigger={trigger}
                            options={dropdownOptions}
                            pointing='top right'
                            icon={null}
                        >
                        </Dropdown>
                    </Card.Description>
                    <Bar className="mt-4" data={data} options={options} actions={actions} config={config}/>
                </Card.Content>
            </Card>

            <Card className={css(styles.mobileWidth) }>
                <div>
                    <BasicMap
                      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height:338, width: 'inherit' }} />}
                      containerElement={<div style={{ height:338 }} />}
                      mapElement={<div style={{ height: 'inherit' }} />} 
                    />
                </div>
            </Card>

            <Card className={css(styles.highlightCard) + " pl-2 pt-3" }>
                <Card.Content>
                    <Card.Description className={css(styles.mediaDescription)}>
                        Media sentiment
                        <Dropdown
                            className={css(styles.mediaDropdown)}
                            trigger={trigger}
                            options={dropdownOptions}
                            pointing='top right'
                            icon={null}
                        >
                        </Dropdown>
                    </Card.Description>
                    <Bar className="mt-4" data={mediaData} options={options} />
                </Card.Content>
            </Card>

            <Card className={css(styles.highlightCard) +" pl-2 pt-3 pr-2"}>
                <Card.Content>
                    <Card.Description className={css(styles.mediaDescription)}>
                        MEDIA HIGHLIGHTS
                        <Dropdown
                            className={css(styles.highlightDropdown)}
                            trigger={trigger}
                            options={dropdownOptions}
                            pointing='top right'
                            icon={null}
                        >
                        </Dropdown>
                    </Card.Description>
                    <Card.Content extra>
                        <div className={css(styles.buttonGroup)}>
                            <Button className={css(styles.buttonStyle1)}>
                                ALL
                            </Button>
                            <Button className={css(styles.buttonStyle2)}>
                                +VE
                            </Button>
                            <Button className={css(styles.buttonStyle3)}>
                                -VE
                            </Button>
                        </div>
                    </Card.Content>
                    <Card.Content className={css(styles.highlight)}>
                    <div style={{ height:310, width:480 }}>
                        <ReactWordcloud callbacks={callbacks} words={words} options={wordOptions}/>
                    </div>
                    </Card.Content>

                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default cardChart


