var blockWrapper;

var $ = function (id) {
    return document.getElementById(id);
};

function getInputNumber() {
    var str = $('input-num').value;
    var re = /^\d{1,2}$|100/;
    if (str.match(re) == null)
    {
        alert('Invalid input! Require: 0 - 100 integer');
        return "error";
    }
    return parseInt(str);
}

function removeSpan(event) {
    event.target.className += ' removing';
    setTimeout(function () {
        blockWrapper.removeChild(event.target)
    }, 500);
}

function leftIn() {
    var num = getInputNumber();
    if (num == 'error')
        return ;
    var span = document.createElement('span');
    span.textContent = num;
    span.onclick = function (event) {
        removeSpan(event);
    };
    blockWrapper.insertBefore(span, blockWrapper.firstElementChild);
}

function leftOut() {
    if (!blockWrapper.hasChildNodes())
    {
        alert('Queue is now empty!');
        return ;
    }
    blockWrapper.firstElementChild.className += ' removing';
    setTimeout(function () {
        blockWrapper.removeChild(blockWrapper.firstElementChild)
    }, 500);
}

function rightIn() {
    var num = getInputNumber();
    if (num == 'error')
        return ;
    var span = document.createElement('span');
    span.textContent = num;
    span.onclick = function (event) {
        removeSpan(event);
    };
    blockWrapper.appendChild(span);
}

function rightOut() {
    if (!blockWrapper.hasChildNodes())
    {
        alert('Queue is now empty!');
        return ;
    }
    blockWrapper.lastElementChild.className += ' removing';
    setTimeout(function () {
        blockWrapper.removeChild(blockWrapper.lastElementChild)
    }, 500);
}

/* 绑定事件 */
function init() {
    $('btn-left-in').onclick = leftIn;
    $('btn-left-out').onclick = leftOut;
    $('btn-right-in').onclick = rightIn;
    $('btn-right-out').onclick = rightOut;
    blockWrapper = $('block-wrapper');
}

 window.onload = function () {
     init();
 };