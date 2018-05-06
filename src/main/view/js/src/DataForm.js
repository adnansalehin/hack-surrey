import React, { Component } from 'react';
import $ from 'jquery';
import Chart from './Chart.js';
import { Button } from 'reactstrap';

class DataForm extends Component {

    constructor(props) {
        super(props);
        // this.state = { };
        this.state = {data: [], result: "", value: 'AAPL', urlConst: 'http://localhost:3001/getRes/',
            value: '',
            nasdaq: '',
            name: '',
            change: '',
            searchUrlPrefix: "https://public.opendatasoft.com/api/records/1.0/search/?dataset=nasdaq-companies&q=",
            searchUrlSuffix: "&facet=name&facet=sector&facet=industry",
            iexUrlPrefix: "https://api.iextrading.com/1.0/stock/",
            iexTimeSeriesSuffix: "/time-series"
        };
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

        return ("HiDate: "+ highDate.toString()+ " hiScore: " +highest.toString());
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        $.ajax({
            url: this.state.searchUrlPrefix+this.state.value+this.state.searchUrlSuffix,
            success: this.fetchNasdaq,
            error: function(req, err){ console.log('opendatasoft API call for NASDAQ failed ' + err); }
        });
    }
    fetchNasdaq = (jsonResponse) => {
        if(jsonResponse.records[0]!=null) {
            this.setState({nasdaq: jsonResponse.records[0].fields.symbol});
            this.setState({name: jsonResponse.records[0].fields.name});
            this.parseIexTimeQuery();
            this.fetchData(this.state.nasdaq)
        }
    };


    parseIexTimeQuery() {
        $.ajax({
            url: this.state.iexUrlPrefix+this.state.nasdaq+this.state.iexTimeSeriesSuffix,
            success: this.fetchIexTimeData,
            error: function(req, err){ console.log('IEX API call for data failed ' + err); }
        });
    }
    fetchIexTimeData = (jsonResponse) => {
        if(jsonResponse[1]!=null) {
            var sum = 0;
            for (var i = 0; i<=20;i++) {
                sum += jsonResponse[i].changeOverTime;
            }
            this.setState({change: sum});
        }
    };

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
                    <span>Change over time for {this.state.name} is  {this.state.change} </span>
                    <br/>
                    <span>{this.state.result}</span>
                </div>
                <div>
                    {/*<Chart/>*/}
                </div>
            </div>
        );
    }
}

export default DataForm;