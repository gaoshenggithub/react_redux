import React from 'react'
import {increment,decrement} from "../redux/actions";

export default class App extends React.Component {

    state = {
        count: 0
    };

    handleIncrement = () => {
        const {value} = this.value;

        this.props.store.dispatch(increment(value))
    };
    handleReduce = () => {
        const {value} = this.value;
        this.props.store.dispatch(decrement(value));
    };
    handleIncrementOdd = () => {
        const {value} = this.value;
        const count = this.props.store.getState();
        if ((parseInt(value) + count) % 2 === 1) {
            this.props.store.dispatch(increment(value))
        }
        ;
    }
        handleIncrementSync = () => {
            const {value} = this.value;
            setTimeout(() => {
                this.props.store.dispatch(increment(value))
            }, 10 ** 3)
        };

        render()
        {
            return (
                <div>
                    <p>click {this.props.store.getState()} times</p>
                    <div style={{padding: '10px', marginLeft: '10px'}}>
                        <select ref={value => this.value = value}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>&nbsp;
                        <button onClick={this.handleIncrement}>+</button>
                        &nbsp;
                        <button onClick={this.handleReduce}>-</button>
                        &nbsp;
                        <button onClick={this.handleIncrementOdd}>add-increment</button>
                        &nbsp;
                        <button onClick={this.handleIncrementSync}>sync-increment</button>
                    </div>
                </div>
            );
        }
    }
