import React from 'react'
import PropTypes from 'prop-types'

export default class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    };
    handleIncrement = () => {
        const {value} = this.value;

        this.props.increment(value)
    };
    handleReduce = () => {
        const {value} = this.value;
        this.props.decrement(value)
    };
    handleIncrementOdd = () => {
        const {value} = this.value;
        const count = this.props.count;
        if ((parseInt(value) + count) % 2 === 1) {
            this.props.increment(value)
        }
        ;
    }
    handleIncrementSync = () => {
        const {value} = this.value;
        setTimeout(() => {
            this.props.increment(value)
        }, 10 ** 3)
    };

    render() {
        return (
            <div>
                <p>click {this.props.count} times</p>
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


