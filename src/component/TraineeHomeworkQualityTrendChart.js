import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';

export default class TraineeHomeworkQualityTrendChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: this.props.name,
            autoFit: true,
            height: 500,
        });

        chart.data(DataService.getTraineeHomeworkQualityTrendData(this.props.name));
        chart.scale({
            item: {
                range: [0, 1],
            },
            value: {
                min: 0,
                nice: true,
            },
        });

        chart.tooltip({
            showCrosshairs: true, // 展示 Tooltip 辅助线
            shared: true,
        });

        chart.line().position('item*value').label('value');
        chart.point().position('item*value');

        chart.render();
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}的每次作业质量走势图</h1>
                <div id={this.props.name}>
                </div>
            </div>
        )
    }
}
