import React from 'react'
import {decrement, increment} from "../redux/actions";
import {connect} from 'react-redux'
import Counter from '../components/Counter'
export default connect(
    state=>({count:state}),{increment, decrement}
)(Counter)
