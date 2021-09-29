import React, { Component } from 'react';

import Chart from 'chart.js/auto';

import {
    lineChartConfig,
    barChartConfig,
    pieChartConfig,
    doughnutChartConfig,
} from "./ChartsDemo";
import { config } from '../../../config';

class Charts extends Component {
    componentDidMount() {
        this.props.nowPage(config.routes_frontend.panel.charts)
        document.title = this.props.title;

        var lineChart = document.getElementById('chart-line').getContext('2d');
        window.myLine = new Chart(lineChart, lineChartConfig);

        var barChart = document.getElementById('chart-bar').getContext('2d');
        window.myBar = new Chart(barChart, barChartConfig);

        var pieChart = document.getElementById('chart-pie').getContext('2d');
        window.myPie = new Chart(pieChart, pieChartConfig);

        var doughnutChart = document.getElementById('chart-doughnut').getContext('2d');
        window.myDoughnut = new Chart(doughnutChart, doughnutChartConfig);
    }
    render() {
        return (
            <>
                <h1 class="app-page-title">Charts</h1>
                <div class="app-card shadow-sm mb-4 border-left-decoration">
                    <div class="inner">
                        <div class="app-card-body p-4">
                            <div class="row gx-5 gy-3">
                                <div class="col-12 col-lg-9">

                                    <div>You can use <a href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a> to create charts for your app. To configure the charts on this page you can edit the relevant JavaScript file: <code>assets/js/charts-demo.js</code>                                        </div>
                                </div>
                                {/* <!--//col--> */}
                                <div class="col-12 col-lg-3">
                                    <a class="btn app-btn-primary" href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noreferrer">
                                        <i className="bi bi-arrow-up-right-square me-2"></i>Learn More
                                    </a>
                                </div>
                                {/* <!--//col--> */}
                            </div>
                            {/* <!--//row--> */}

                        </div>
                        {/* <!--//app-card-body--> */}

                    </div>
                    {/* <!--//inner--> */}
                </div>
                {/* <!--//app-card--> */}
                <div class="row g-4 mb-4">
                    <div class="col-12 col-lg-6">
                        <div class="app-card app-card-chart h-100 shadow-sm">
                            <div class="app-card-header p-3 border-0">
                                <h4 class="app-card-title">Area Line Chart Demo</h4>
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body p-4">
                                <div class="chart-container">
                                    <canvas id="chart-line"></canvas>
                                </div>
                            </div>
                            {/* <!--//app-card-body--> */}
                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div class="col-12 col-lg-6">
                        <div class="app-card app-card-chart h-100 shadow-sm">
                            <div class="app-card-header p-3 border-0">
                                <h4 class="app-card-title">Bar Chart Demo</h4>
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body p-4">
                                <div class="chart-container">
                                    <canvas id="chart-bar"></canvas>
                                </div>
                            </div>
                            {/* <!--//app-card-body--> */}
                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div class="col-12 col-lg-6">
                        <div class="app-card app-card-chart h-100 shadow-sm">
                            <div class="app-card-header p-3 border-0">
                                <h4 class="app-card-title">Pie Chart Demo</h4>
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body p-4">
                                <div class="chart-container">
                                    <canvas id="chart-pie"></canvas>
                                </div>
                            </div>
                            {/* <!--//app-card-body--> */}
                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div class="col-12 col-lg-6">
                        <div class="app-card app-card-chart h-100 shadow-sm">
                            <div class="app-card-header p-3 border-0">
                                <h4 class="app-card-title">Doughnut Chart Demo</h4>
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body p-4">
                                <div class="chart-container">
                                    <canvas id="chart-doughnut"></canvas>
                                </div>
                            </div>
                            {/* <!--//app-card-body--> */}
                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    {/* <!--//col--> */}
                </div>
                {/* <!--//row--> */}
            </>
        );
    }
}

export default Charts;