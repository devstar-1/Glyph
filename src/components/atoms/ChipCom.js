import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    marginTop: 6,
    border:'1px solid #DFE3E9',
    boxShadow:'none',
    width:270,
    height:80,
    overflowY:'scroll',
  },
  chip: {
    margin: theme.spacing(0.125),
    width:100,
    borderRadius:3,
    justifyContent:'space-between',
    fontSize:14
  },
}));

export default function ChipsArray({ inputData,onDelete }) {

  const classes = useStyles();

  return (
    <Paper component="ul" className={classes.root}>
      {
        inputData.map((item, index) => {
          return (
            <Chip
              label={item}
              onDelete={() =>onDelete(index)}
              className={classes.chip}
            />
          )
        })
      }
    </Paper>
  );
}
