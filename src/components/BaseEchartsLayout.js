import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const BaseEchartsLayout = ({
    options,
    data,
    maps,
    xAxis,
    chartType,
    labelShow,
    ...props
}) => {
    let opt = options
    opt.legend.data = []
    opt.series = []
    for (let key in maps) {
        if (!opt.legend.data.includes(maps[key])) {
            opt.legend.data.push(maps[key])
            opt.series.push({
            	name: maps[key],
            	type: chartType,
            	data: data.map(e => e[key]),
            	label: {
            		normal: {
            			show: labelShow,
            			position: 'top'
            		}
            	}
            })
        }
    }
    opt.xAxis[0].data = data.map(e => e[xAxis])

    const getOptions = () => {
        return {
        	title: opt.title,
        	tooltip: {
        		trigger: 'axis'
        	},
        	legend: opt.legend,
        	toolbox: {
        		feature: {
        			saveAsImage: {}
        		}
        	},
        	grid: opt.grid,
        	xAxis: opt.xAxis,
        	yAxis: [{
                type: 'value',
                scale: true,
                axisLabel: {
                	formatter: function (value) {
                		return (value >= 10000) ? value / 10000 + 'w' : value;
                	}
                }
        	}],
        	series: opt.series
        };
    }

    return (
        <div className="chart-panel">
            <ReactEcharts
               className="echarts-container"
               option={getOptions()}
            />
        </div>
    );
};

BaseEchartsLayout.propTypes = {
    data: PropTypes.array.isRequired,   // 图表数据
    xAxis: PropTypes.string.isRequired, // 渲染X轴字段 'dt'
    maps: PropTypes.object.isRequired,  // 字段对应中文图例
    chartType: PropTypes.string,
    labelShow: PropTypes.bool,
    options: PropTypes.object
};

BaseEchartsLayout.defaultProps = {
    chartType: 'line', // 默认显示折线图
    labelShow: true,   // 默认显示label
	options: {
        title: {
           text: '',
        },
        legend: {
            data: [],
            selectedMode: 'single',
            top: 15
        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [{
        	type: 'category',
            boundaryGap: false,
            inverse: true,
        	data: []
        }],
        series: []
    }
}

export default BaseEchartsLayout;