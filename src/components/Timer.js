import React, {Component} from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.timer = null;

        this.state = {
            seconds: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1,
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="timer">Seconds: {this.state.seconds} </div>
        )
    }
}