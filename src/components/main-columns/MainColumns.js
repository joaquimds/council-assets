import React from 'react'

import './MainColumns.scss'

const MainColumns = (props) => {
  const [left, right] = props.children
  return (
    <div className='main__columns'>
      <div className='main__column'>
        <div className='main__scroll'>
          {left}
        </div>
      </div>
      <div className='main__column'>
        {right}
      </div>
    </div>
  )
}

export default MainColumns
