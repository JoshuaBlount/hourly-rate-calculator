import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDayRate: 500,
            numberOfHours: 10
        }
    }

    setDayRate(currentDayRate) {
        this.setState({
            currentDayRate: currentDayRate
        });
    }
    setNumberOfHours(numberOfHours) {
        this.setState({
            numberOfHours: numberOfHours
        });
    }

    render() {
        const rate = this.state.currentDayRate / this.state.numberOfHours;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} value={this.state.currentDayRate} onChange={value => this.setDayRate(value)} />
                <NumberInput id="hours" label="Hours" min={1} max={12} value={this.state.numberOfHours} onChange={value => this.setNumberOfHours(value)} />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)} />
            </form>
        )
    }
}