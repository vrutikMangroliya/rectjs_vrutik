import React, { useState } from 'react'

const Number = () => {

    const [num, setNum] = useState(0)

    const incNum = () =>{
        setNum(num + 1)
    }

    const decNum = ()=>{
        if(num > 0){
            setNum(num - 1)
        }
        else{
            alert("this Number is not vailed")
        }
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1>{num}</h1>
                    <div className='btn_div'>
                        <button onClick={incNum}> Increm </button>
                        <button onClick={decNum}> Decrem </button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Number