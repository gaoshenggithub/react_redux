import React from 'react'

export default class App extends React.Component {

    state = {
        count: 0
    };

    handleIncrement = () => {
        const {value} = this.value;
        const {count} = this.state;
        this.setState({count: parseInt(value) + count})
    };
    handleReduce = () => {
        const {value} = this.value;
        const {count} = this.state;
        this.setState({count: count - parseInt(value)})
    };
    handleIncrementOdd = () => {
        const {value} = this.value;
        const {count} = this.state;
        if ((parseInt(value) + count) % 2 === 1) {
            this.setState({count: parseInt(value) + count})
        }
    };
    handleIncrementSync = () => {
        const {value} = this.value;
        const {count} = this.state;
        setTimeout(() => {
            this.setState({count: count + parseInt(value)})
        }, 10 ** 3)
    };

    render() {
        return (
            <div>
                <p>click {this.state.count} times</p>
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
