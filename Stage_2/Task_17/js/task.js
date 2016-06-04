/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

var $ = function (id) {
    return document.getElementById(id);
};


// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: "北京",
    nowGraTime: "周"
};

/**
 * 渲染图表
 */
var mapTime = {
    "日": "day",
    "周": "week",
    "月": "month"
};
function renderChart() {
    for (let city in chartData) {
        if (city != pageState['nowSelectCity'])
            continue;
        for (let graTime in chartData[city]) {
            if (graTime != pageState['nowGraTime'])
                continue;
            chartWrap.innerHTML = "";
            for (let item in chartData[city][graTime]) {
                // console.log(item + '\n' + graTime[item]);
                let colorLevel = Math.round(chartData[city][graTime][item] / 100);
                chartWrap.innerHTML += "<span class = 'chart-item chart-item-" + mapTime[graTime] + " chart-item-color-" + colorLevel + "' title = '" + item + " AQI: " + chartData[city][graTime][item] + "' style = 'height: " + chartData[city][graTime][item] + "px; margin-top: calc(500px - " + chartData[city][graTime][item] + "px)'></span>";
            }
        }
    }
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
var curTimeSelected = "";
function graTimeChange(value) {
    // 确定是否选项发生了变化
    if (value == curTimeSelected)
        return false;
    else
        curTimeSelected = value;
    // console.log(value);

    // 设置对应数据
    pageState['nowGraTime'] = value;

    // 调用图表渲染函数
    renderChart();
}

/**
 * select发生变化时的处理函数
 */
var curCitySelected = "";
function citySelectChange(value) {
    // 确定是否选项发生了变化
    if (value == curCitySelected)
        return false;
    else
        curCitySelected = value;
    // console.log(curCitySelected);

    // 设置对应数据
    pageState['nowSelectCity'] = value;

    // 调用图表渲染函数
    renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var formGraTimeChild = formGraTime.childNodes;
    for (let i = 0; i < formGraTimeChild.length; ++i) {
        if (formGraTimeChild[i].tagName && formGraTimeChild[i].tagName.toLowerCase() == 'label') {
            formGraTimeChild[i].onclick = function () {
                // console.log(event.target);
                // console.log(formGraTimeChild[i].textContent);
                graTimeChange(formGraTimeChild[i].textContent);
            }
        }
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    for (let city in aqiSourceData) {
        citySelect.innerHTML += '<option>' + city + '</option>';
    }
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    citySelect.onchange = function (event) {
        citySelectChange(event.target.value);
    };
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    for (let city in aqiSourceData) {
        chartData[city] = {};
        chartData[city]['日'] = {};
        chartData[city]['周'] = {};
        chartData[city]['月'] = {};

        let weekDayCount = 0, weekQualityCount = 0;
        let monthDayCount = 0, monthQualityCount = 0;
        let curMonth = 0;
        let firstDayWeek, lastDayWeek;
        let cityKeyData = Object.keys(aqiSourceData[city]);
        for (let i in cityKeyData) {
            chartData[city]['日'][cityKeyData[i]] = aqiSourceData[city][cityKeyData[i]];

            weekQualityCount += parseInt(chartData[city]['日'][cityKeyData[i]]);
            weekDayCount++;
            if (i == 0 || new Date(cityKeyData[i]).getDay() == 1)
                firstDayWeek = cityKeyData[i];
            if (new Date(cityKeyData[i]).getDay() == 0 || i == cityKeyData.length - 1) {
                lastDayWeek = cityKeyData[i];
                let avgQuality = parseFloat((weekQualityCount / weekDayCount).toFixed(2));
                chartData[city]['周'][firstDayWeek + '~' + lastDayWeek] = avgQuality;
                weekDayCount = 0;
                weekQualityCount = 0;
            }

            if (new Date(cityKeyData[i]).getMonth() > curMonth || i == cityKeyData.length - 1) {
                let avgQuality = parseFloat((monthQualityCount / monthDayCount).toFixed(2));
                chartData[city]['月']['2016-0' + (curMonth + 1)] = avgQuality;
                curMonth++;
                monthDayCount = 0;
                monthQualityCount = 0;
            }
            monthQualityCount += parseInt(chartData[city]['日'][cityKeyData[i]]);
            monthDayCount++;
        }
    }
}

var formGraTime;
var citySelect;
var chartWrap;

/**
 * 初始化函数
 */
function init() {
    formGraTime = $('form-gra-time');
    citySelect = $('city-select');
    chartWrap = document.querySelector('.aqi-chart-wrap');
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
    renderChart();
}

window.onload = function () {
    init();
};