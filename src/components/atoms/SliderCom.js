import React, { useState,useRef,useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';

const AirbnbSlider = withStyles({

    root: {
      color: '#7D8997',
      height: 3,
      padding: '13px 0',
      width:227
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#358ED7',
      border: '3px solid white',
      marginTop: -8,
      marginLeft: -13,
      boxShadow: '#ebebeb 0 2px 2px',
      '&:focus, &:hover, &$active': {
        boxShadow: '#ccc 0 2px 3px 1px',
      },
      '& .bar': {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 6,
    },
    rail: {
      color: '#F8F4F4',
      opacity: 1,
      height: 6,
      width:227
    },
  })(Slider);

  const useStyles = makeStyles(theme => ({
    customTooltip: {
      backgroundColor: '#007bff',
    },
    customArrow: {
      color: 'rgba(220, 0, 78, 0.8)',
    },
  }));

const AirbnbThumbComponent = (props)=> {
    return (
      <span {...props}/>
    );
}

const ValueLabelComponent = (props) => {
  const { children, open, value } = props;
  const classes = useStyles();

  return (
    <Tooltip
      classes={{
        tooltip: classes.customTooltip,
        arrow: classes.customArrow
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

export default function CustomizedSlider() {

  // const [value, setValue] = useState(new Date());

  const startDate = moment().subtract(7, 'days');

  // const handleFromSlider = (event, value) => {
  //   this.setState({fromSlider: value});
  // };

    return (
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
          ValueLabelComponent={ValueLabelComponent}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => moment().subtract(7-value, 'days').format("YYYY-MM-DD")}
          step={1} 
          marks
          max={7}
          min={0}
          defaultValue={[0,4]}
          // onChange={handleFromSlider}

          // valueLabelFormat={(index) => (index === 0 ? new Date().toLocaleTimeString() : new Date().toLocaleTimeString())}
        />
    );
  }