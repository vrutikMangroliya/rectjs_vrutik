/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { buy_cake } from '../redux/cake/CakeAction'
import {connect} from 'react-redux'
import { buy_choco } from '../redux/cake/CakeAction'

const CakeContainer = (props) => {
    return(
        <div>
            <h1>NumOfCakes = {props.numOfCake}</h1>
            <button onClick={props.buy_cake} >Action</button>

            <h1>NumOfChoco = {props.numOfChoco}</h1>
            <button onClick={props.buy_choco} >Action</button>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        numOfCake:state.numOfCake,
        numOfChoco:state.numOfChoco
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buy_cake:() => dispatch(buy_cake()),
        buy_choco:() => dispatch(buy_choco())
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)