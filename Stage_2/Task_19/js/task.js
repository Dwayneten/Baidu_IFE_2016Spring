"use strict";
var blockWrapper;

var queueData = [];
var swapOrder = new Array(2);

var $ = function (id) {
    return document.getElementById(id);
};

/* 排序 */
Array.prototype.mySort = function () {
    for (let i=0; i<this.length; ++i) {
        let minIn = i;
        for (let j=i+1; j<this.length; ++j) {
            if (this[j] < this[minIn]) {
                minIn = j;
            }
        }
        if (minIn != i) {
            let t = this[minIn];
            this[minIn] = this[i];
            this[i] = t;
        }
        swapOrder[0].push(i);
        swapOrder[1].push(minIn);
    }
};

/* 可视化处理 */
function mySortHandler() {
    swapOrder[0] = [];
    swapOrder[1] = [];

    queueData.mySort();

    var tmp, i = 0;
    var swap = setInterval(function () {
        if (i < swapOrder[0].length) {
            var left = blockWrapper.childNodes[swapOrder[0][i]],
                right = blockWrapper.childNodes[swapOrder[1][i]];
            
            left.classList.add('blue-span');

            tmp = left.style.height;
            left.style.height = 0;
            left.style.height = right.style.height;
            right.style.height = tmp;

            tmp = left.title;
            left.title = right.title;
            right.title = tmp;
            
            i++;
        } else {
            setTimeout(renderQueueChart, 500);
            clearInterval(swap);
        }
    }, 500);
    
}

/* 随机生成 num 个数到 queueData 中 */
function generateQueueData(num) {
    queueData = [];
    for (let i = 0; i < num; ++i) {
        queueData.push(Math.round(Math.max(Math.random(), 0.1) * 190));
    }
}

/* 渲染图表 */
function renderQueueChart() {
    blockWrapper.innerHTML = "";
    queueData.forEach(function (value, index) {
        var span = document.createElement('span');
        span.style.height = value + "px";
        span.style.lineHeight = value + "px";
        span.style.left = 5 + (index * 15) + "px";
        span.title = value;
        span.onclick = function (event) {
            removeSpan(event);
        };
        blockWrapper.appendChild(span);
    });
}

/* 获取输入框数据并验证其合法性 */
function getInputNumber() {
    var str = $('input-num').value;
    var re = /^\d{2}$|100/;
    if (str.match(re) == null) {
        alert('Invalid input! Require: 0 - 100 integer');
        return "error";
    }
    return parseInt(str);
}

/* 删除 span 的事件 */
function removeSpan(event) {
    event.target.className += ' removing';
    setTimeout(function () {
        blockWrapper.removeChild(event.target);
        var nextSibling = event.target.nextSibling;
        while (nextSibling) {
            nextSibling.style.left = parseInt(nextSibling.style.left.slice(0, -2)) - 15 + "px";
            nextSibling = nextSibling.nextElementSibling;
        }
    }, 500);
}

/* 左端入 */
function leftIn() {
    var num = getInputNumber();
    if (num == 'error')
        return;
    if (blockWrapper.childNodes.length >= 60) {
        alert('Too much elements! Max: 60');
        return;
    }
    queueData.unshift(num);
    renderQueueChart();
}

/* 左端出 */
function leftOut() {
    if (!blockWrapper.hasChildNodes()) {
        alert('Queue is now empty!');
        return;
    }
    blockWrapper.firstElementChild.className += ' removing';
    setTimeout(function () {
        var nextSibling = blockWrapper.firstElementChild.nextSibling;
        blockWrapper.removeChild(blockWrapper.firstElementChild);
        queueData.shift();
        while (nextSibling) {
            nextSibling.style.left = parseInt(nextSibling.style.left.slice(0, -2)) - 15 + "px";
            nextSibling = nextSibling.nextElementSibling;
        }
    }, 500);
}

/* 右端入 */
function rightIn() {
    var num = getInputNumber();
    if (num == 'error')
        return;
    if (blockWrapper.childNodes.length > 60) {
        alert('Too much elements! Max: 60');
        return;
    }
    queueData.push(num);
    renderQueueChart();
}

/* 右端出 */
function rightOut() {
    if (!blockWrapper.hasChildNodes()) {
        alert('Queue is now empty!');
        return;
    }
    blockWrapper.lastElementChild.className += ' removing';
    setTimeout(function () {
        blockWrapper.removeChild(blockWrapper.lastElementChild);
        queueData.pop();
    }, 500);
}

/* 绑定事件 */
function init() {
    blockWrapper = $('block-wrapper');
    $('btn-left-in').onclick = leftIn;
    $('btn-left-out').onclick = leftOut;
    $('btn-right-in').onclick = rightIn;
    $('btn-right-out').onclick = rightOut;
    $('btn-generate-num').onclick = function () {
        generateQueueData(60);
        renderQueueChart();
    };
    $('btn-sort').onclick = mySortHandler;
    generateQueueData(60);
    renderQueueChart();
}

window.onload = function () {
    init();
};