"use strict";

/**
 * 根据 ID 获取元素
 * @param id - 元素 ID
 * @returns {Element} - 选择到的元素
 */
function $(id) {
    return document.getElementById(id);
}

/* input 元素数组 */
var inputArr = [];

/**
 * 计算字符串长度，英文字符记 1，中文字符记 2
 * @param str - 字符串
 * @returns {number} - 字符串长度
 */
function countCharNum(str) {
    var count = 0;
    for (var i=0; i<str.length; ++i) {
        var code = str.charCodeAt(i);
        if (0xFF00 <= code && code <= 0xFFEF) {
            count += 2;
        } else if (0x4E00 <= code && code <= 0x9FA5) {
            count += 2;
        } else {
            count++;
        }
    }
    return count;
}

/**
 * 检查输入数据的合法性，并根据结果更改提示文本
 * @param value - 输入的数据
 * @param id - 对应 input 的 id
 * @returns {boolean} 是否合法
 */
function checkValue(value, id) {
    var len = countCharNum(value), hint = $('hint-' + id);
    if (id == "name") {
        if (4 <= len && len <= 16) {
            hint.textContent = "名称可用";
            return true;
        } else if (len == 0) {
            hint.textContent = "名称不能为空";
            return false;
        } else {
            hint.textContent = "名称长度不符合要求";
            return false;
        }
    } else if (id == "password") {
        if (4 <= len && len <= 16) {
            hint.textContent = "密码符合要求";
            return true;
        } else if (len == 0) {
            hint.textContent = "密码不能为空";
            return false;
        } else {
            hint.textContent = "密码长度不符合要求";
            return false;
        }
    } else if (id == "password-confirm") {
        var pwd = $('password').value;
        if (len == 0) {
            hint.textContent = "密码不能为空";
            return false;
        } else if (len < 4 || len > 16) {
            hint.textContent = "密码长度不符合要求";
            return false;
        } else if (value == pwd) {
            hint.textContent = "密码输入一致";
            return true;
        } else {
            hint.textContent = "两次输入密码不一致";
            return false;
        }
    } else if (id == "mail") {
        if (/^[\w\d_]+@[\w\d_]+\.[\w_]+$/.test(value)) {
            hint.textContent = "邮箱格式正确";
            return true;
        } else {
            hint.textContent = "邮箱格式不正确";
            return false;
        }
    } else if (id == "phone") {
        if (/^1[34578]\d{9}$/.test(value)) {
            hint.textContent = "手机号码的格式正确";
            return true;
        } else {
            hint.textContent = "无效的手机号码";
            return false;
        }
    }
}

/**
 * 绑定 input 元素获取焦点的事件
 * @param e - input 元素
 */
function bindFocusFunction(e) {
    e.addEventListener('focus', function () {
        var hint = $('hint-' + e.id);
        hint.style.display = "block";
    });
}

/**
 * 绑定 input 元素失去焦点的事件
 * @param e - input 元素
 */
function bindBlurFunction(e) {
    e.addEventListener('blur', function () {
        var id = e.id, value = e.value;
        var hint = $('hint-' + id);
        var hintP = hint.parentNode, eP = e.parentNode;
        /* 根据数据是否合法改变父元素的类，使其匹配不同的 css */
        if (checkValue(value, id)) {
            if (hintP.classList.contains('error'))
                hintP.classList.remove('error');
            hintP.classList.add('accept');
            if (eP.classList.contains('error'))
                eP.classList.remove('error');
            eP.classList.add('accept');
        } else {
            if (hintP.classList.contains('accept'))
                hintP.classList.remove('accept');
            hintP.parentNode.classList.add('error');
            if (eP.classList.contains('accept'))
                eP.classList.remove('accept');
            eP.classList.add('error');
        }
    });
}

/**
 * 检查表单所有数据
 * @returns {boolean} - 是否符合要求
 */
function checkForm() {
    for (var i=0; i<inputArr.length; ++i) {
        if (!checkValue(inputArr[i].value, inputArr[i].id)) {
            return false;
        }
    }
    return true;
}

/**
 * 绑定事件
 */
function bind() {
    for (var i=0; i<inputArr.length; ++i) {
        bindFocusFunction(inputArr[i]);
        bindBlurFunction(inputArr[i]);
    }
    $('btn-submit').addEventListener('click', function () {
       if (checkForm()) {
           alert('提交成功');
       } else {
           alert('表单数据不符合要求， 提交失败');
       }
    });
}

/**
 * 初始化函数
 */
function init() {
    inputArr = document.getElementsByTagName('input');
    bind();
}

window.onload = init;