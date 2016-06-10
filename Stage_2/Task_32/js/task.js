"use strict";

/* 表单选项的配置 */
var configForm1 = {
    label: '名称',                    // 表单标签
    type: 'input',                   // 表单类型
    validator: checkLen,    // 表单验证规则
    rules: '必填，长度为 4-16 个字符',    // 填写规则提示
    success: '格式正确',              // 验证通过提示
    fail: '名称长度不正确'               // 验证失败提示
};
var configForm2 = {
    label: '手机',
    type: 'input',
    validator: checkPhoneLen,
    rules: '请输入有效的手机号码',
    success: '格式正确',
    fail: '手机号码长度不正确'
};

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
 * 检查字符串长度
 * @param str - 字符串
 * @returns {boolean} - 长度是否在 4-16 内
 */
function checkLen(str) {
    var len = countCharNum(str);
    if (4 <= len && len <= 16) {
        return true;
    } else {
        return false;
    }
}

/**
 * 检查手机号码长度
 * @param str - 字符串
 * @returns {boolean} - 长度是否为 11
 */
function checkPhoneLen(str) {
    return countCharNum(str) == 11;
}

/**
 * 表单项目对象
 * @param stylePrefix - 样式前缀
 * @param label - 项目名称
 * @param type - 项目类型
 * @param validator - 验证函数
 * @param rules - 关于输入的提示
 * @param success - 验证通过的提示
 * @param fail - 验证不通过的提示
 * @constructor
 */
function FormObject(stylePrefix, label, type, validator, rules, success, fail) {
    this.stylePrefix = stylePrefix;
    this.label = label;
    this.type = type;
    this.validator = validator;
    this.rules = rules;
    this.success = success;
    this.fail = fail;
}

/**
 * 表单项目对象的生成函数
 * 根据参数创建相关的 DOM 并加入至文档内
 */
FormObject.prototype.create = function () {
    var self = this;
    this.divContainer = document.createElement('div');
    this.divContainer.classList.add(this.stylePrefix + '-container');
    this.divRow1 = document.createElement('div');
    this.divRow1.classList.add('row-1');
    this.labelElement = document.createElement('label');
    this.labelElement.textContent = this.label;
    this.divRow1.appendChild(this.labelElement);
    this.input = document.createElement('input');
    this.input.type = this.type;
    this.input.addEventListener('blur', function () {
        self.check();
    });
    this.divRow1.appendChild(this.input);
    this.divRow2 = document.createElement('div');
    this.divRow2.classList.add('row-2');
    this.divRow2.textContent = this.rules;
    this.divContainer.appendChild(this.divRow1);
    this.divContainer.appendChild(this.divRow2);
    document.getElementById('content').appendChild(this.divContainer);
};

/**
 * 表单项目对象的检验函数
 * 调用验证函数对数据进行检验
 * 根据验证结果调整提示文本
 */
FormObject.prototype.check = function () {
    if (this.validator(this.input.value)) {
        this.divRow2.textContent = this.success;
    } else {
        this.divRow2.textContent = this.fail;
    }
};

/**
 * 调试用方法
 * 在控制台输出传入的参数
 * @param value 要输出的内容
 */
FormObject.prototype.show = function (value) {
    console.log(value);
};

/**
 * 初始化函数
 * 根据配置数据创建表单项目对象
 * 并生成两个样式不同的表单项目
 */
function init() {
    var form1 = new FormObject('green', configForm1.label, configForm1.type, configForm1.validator, configForm1.rules, configForm1.success, configForm1.fail);
    form1.create();
    var form2 = new FormObject('blue', configForm2.label, configForm2.type, configForm2.validator, configForm2.rules, configForm2.success, configForm2.fail);
    form2.create();
}

window.onload = init;