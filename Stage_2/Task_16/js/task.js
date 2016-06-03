/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/*
    $
 */
var $ = function (id) {
    return document.getElementById(id);
};


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityName = $('aqi-city-input').value.trim();
    var airQuality = $('aqi-value-input').value.trim();
    if (new RegExp('[^\\w]|\\d').test(cityName))
    {
        alert('Invalid city name!');
        return ;
    }
    if (new RegExp('[^\\d]').test(airQuality) || parseInt(airQuality) < 0 || parseInt(airQuality) > 100)
    {
        alert('Invalid air quality number! (Require: 0-100)');
        return ;
    }
    aqiData[cityName] = airQuality;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = $('aqi-table');
    while (table.getElementsByTagName('tr').length > 1)
        table.removeChild(table.lastChild);

    for (let i in aqiData) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(i));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(aqiData[i]));
        tr.appendChild(td);
        td = document.createElement('td');
        let btn = document.createElement('button');
        btn.appendChild(document.createTextNode('删除'));
        btn.onclick = function () {
            delBtnHandle(event);
        };
        td.appendChild(btn);
        tr.appendChild(td);
        $('aqi-table').appendChild(tr);
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
    // do sth.
    delete aqiData[event.target.parentNode.parentNode.firstChild.textContent.toString()];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    $('add-btn').onclick = function() {
        addBtnHandle();
    };

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    /*
    var btnList = $('aqi-table').getElementsByTagName('button');
    for (let i = 0; i<btnList.length; ++i) {
        if (btnList[i].innerHTML != "删除")
            continue;
        btnList[i].onclick = function () {
            delBtnHandle(event);
        };
    }
    */
}

window.onload = function() {
    init();
};