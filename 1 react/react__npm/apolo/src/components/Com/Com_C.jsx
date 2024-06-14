import React from 'react'
import { data, data1 } from '../../App'
// import { useCallback } from 'react'

const Com_C = () => {
  // const FirstName = useCallback(data)
  // const Age = useCallback(data1)

  return (

    // <div>
    //   <h1>Hii im Com C</h1>
    //   {FirstName}
    //   {Age}
    // </div >

    <div>      
      <data.Consumer>
      {
        (name) => {
          return (
            <data1.Consumer>
              {
                (Age) => {
                  return (
                    <span className='bg-red-500'>{name}{Age}</span>
                  )
                }
              }
            </data1.Consumer>
          )
        }
      }
    </data.Consumer>
    </div>

  )
}

export default Com_C
