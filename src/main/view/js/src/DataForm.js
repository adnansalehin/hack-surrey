import React, { Component } from 'react';
import { Button } from 'reactstrap';

class DataForm extends Component {

    constructor(props) {
        super(props);
        this.state = {data: [], result: "", value: 'AAPL', urlConst: 'http://localhost:3001/getRes/' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    fetchData(name) {
        fetch(this.state.urlConst + name).then((body) => {
            return body.json();
        }).then((data) => {
            console.log(data);
            this.setState({data: data.data});
            this.setState({result : this.calculate(this.state.data)});
        })
    }
    calculate(dataSet) {
            var lowest=  "1";
            var highest = "0";
            var lowDate= "";
            var highDate = "";
        dataSet.map((field, index) => {
            if(field.integratedScore<lowest) {
                lowest = field.integratedScore;
                lowDate = field.date;
            } else if (field.integratedScore>highest) {
                highest = field.integratedScore;
                highDate = field.date;
            }
        });

        return ("HiDate: "+ highDate.toString()+ "hiScore:" +highest.toString());
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert('A name was submitted: ' + this.state.value);
        this.fetchData(this.state.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <span>{this.state.result}</span>
                </div>
            </div>
        );
    }
}

export default DataForm;