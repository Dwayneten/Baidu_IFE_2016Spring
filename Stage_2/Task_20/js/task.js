"use strict";
var blockWrapper;
var inputWord;
var inputKey;
var queueData = ["letters", "words", "e", "number", "233", "321", "10086", "测试", "中文测试", "匹配中文"];

var $ = function (id) {
    return document.getElementById(id);
};

/* 渲染节点 */
function renderQueueNodes() {
    blockWrapper.innerHTML = "";
    queueData.forEach(function (value) {
        var span = document.createElement('span');
        span.textContent = value;
        span.onclick = function (event) {
            removeSpan(event);
        };
        blockWrapper.appendChild(span);
    });
}

/* 创建并返回 span */
function createSpan(value) {
    var span = document.createElement('span');
    span.textContent = value;
    span.onclick = function (event) {
        removeSpan(event);
    };
    return span;
}

/* 获取输入框数据并验证其合法性 */
function getInputNumber() {
    var str = inputWord.value.trim();
    if (str == "") {
        return false;
    }
    var re = /^[\n\s,，、]|[^\d\w\u4E00-\u9FA5\n\s,，、]|[\n\s,，、]$/;
    if (str.match(re)) {
        alert('Invalid input!');
        return "error";
    }
    return str.split(/[\n\s,，、]+/);
}

/* 删除 span 的事件 */
function removeSpan(event) {
    event.target.classList.add('removing');
    setTimeout(function () {
        blockWrapper.removeChild(event.target);
    }, 2500);
}

/* 查找并高亮显示匹配搜索的节点 */
function highLightSearch() {
    var str = inputKey.value.trim();
    if (str == "")
        return ;
    if (str.match(/[^\d\w\u4E00-\u9FA5]/)) {
        alert('Invalid input');
        return ;
    }
    var nodes = blockWrapper.childNodes;
    for (var i=0; i<nodes.length; ++i) {
        if (nodes[i].textContent.includes(str)) {
            nodes[i].style.backgroundColor = "#33acfe";
        } else {
            nodes[i].style.backgroundColor = "#7fffd4";
        }
    }
    inputKey.value = "";
    inputKey.focus();
}

/* 左端入 */
function leftIn() {
    var strArr = getInputNumber();
    if (!strArr)
        return;
    if (blockWrapper.childNodes.length >= 60) {
        alert('Too much elements! Max: 60');
        return;
    }
    strArr.forEach(function (v) {
        queueData.unshift(v);
        var span = createSpan(v);
        blockWrapper.insertBefore(span, blockWrapper.firstElementChild);
    });
    inputWord.value = "";
    inputWord.focus();
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
    var strArr = getInputNumber();
    if (!strArr)
        return;
    if (blockWrapper.childNodes.length >= 60) {
        alert('Too much elements! Max: 60');
        return;
    }
    strArr.forEach(function (v) {
        queueData.push(v);
        var span = createSpan(v);
        blockWrapper.appendChild(span);
    });
    inputWord.value = "";
    inputWord.focus();
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
    inputWord = $('input-word');
    inputKey = $('input-key');
    $('btn-left-in').onclick = leftIn;
    $('btn-left-out').onclick = leftOut;
    $('btn-right-in').onclick = rightIn;
    $('btn-right-out').onclick = rightOut;
    $('btn-search').onclick = highLightSearch;
    renderQueueNodes();
}

init();