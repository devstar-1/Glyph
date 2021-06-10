import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  categoryDrop:{
    background:'#d4d4d5',
    minWidth:'10em',
    height:'fit-content',
    marginTop:5
  }
})

const options = [
  { key: 1, text: 'Business', value: 'business' },
  { key: 2, text: 'Entertainment', value: 'entertainment' },
  { key: 3, text: 'General', value: 'general' },
  { key: 4, text: 'Health', value: 'health' },
  { key: 5, text: 'Science', value: 'science' },
  { key: 6, text: 'Sports', value: 'sports' },
  { key: 7, text: 'Technology', value: 'technology' },
]

function CategoryDropdown(){

  const [value,setValue] = useState(false);
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <Dropdown
        className={css(styles.categoryDrop)}
        options={options}
        onChange={handleChange}
        value= {value}
        selection
        placeholder='All Category'
    />
  )
}

export default CategoryDropdown