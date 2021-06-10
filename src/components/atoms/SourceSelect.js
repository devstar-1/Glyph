import React, { useState } from 'react'
import { Dropdown} from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    sourceSelect:{
        minWidth:'9em'
    }
})

const options = [
  { key: 1, text: 'Everything', value: "everything" },
  { key: 2, text: 'Topheadlines', value: "top-headlines" },
  { key: 3, text: 'Sources', value: "sources" },
]

function SourceSelect() {

  const [value,setValue] = useState(false);
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

    return (
      <Dropdown
          className={css(styles.sourceSelect)}
          onChange={handleChange}
          options={options}
          placeholder='Source(2)'
          selection
          value={value}
      />

    )
}

export default SourceSelect