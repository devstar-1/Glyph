import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import res from './data';

const getDataSlice = createSlice({
  name: 'news',
  initialState: {
    data:[],
    error:null,
    totalResults:[]
  },
  reducers: {
    getDataSuccess: (state, action) => {
      state.data = action.payload.data.articles;
      state.totalResults = action.payload.data.totalResults;
    },
    getDataFail: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
    getDataSuccess,
    getDataFail,
} = getDataSlice.actions;

export const getDataApi = (chipItems, activeIndex) => dispatch => {

  let searchItems = chipItems.join("+");
  if (activeIndex ==='1'){
    var sortby = 'publishedAt'
  }
  else if(activeIndex ==='0')
    var sortby = 'popularity'

    console.log("------------",activeIndex)
    
    return new Promise((resolve, reject) => {
    axios
        .get(`https://newsapi.org/v2/everything?q="+${searchItems}"&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        .then((res1) => {
          console.log("-------------",res)
            dispatch(getDataSuccess(res));
            resolve(res);
        })
        .catch((err) => {
            console.log('eeeeeeeeeeeeeeeeeeeeee')
            console.log(res)
            dispatch(getDataSuccess(res));
            // dispatch(getDataFail(err));
            // reject(err);
            resolve(res)
        });
  });
};


export default getDataSlice.reducer;

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=5312baa543284c669cd67c3db1b2bb78
