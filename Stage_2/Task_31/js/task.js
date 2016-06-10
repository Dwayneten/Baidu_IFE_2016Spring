"use strict";

/**
 * 根据 ID 获取元素
 * @param id - 元素 ID
 * @returns {Element} - 选择到的元素
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * 存储地区的学校信息
 * @type {{bj: string[], sh: string[], gz: string[]}}
 */
var dataOption = {
    bj: ["北京大学", "清华大学"],
    sh: ["上海大学", "上海交通大学"],
    gz: ["中山大学", "华南理工大学"]
};

/**
 * 相关元素
 */
var selectArea, selectSchool;
var labelSchool, labelCompany;
var tdCompany;

/**
 * 切换相关元素的显示与否
 * @param isStudent - 是否为学生
 */
function changeForm(isStudent) {
    var selectArea = $('select-area'), selectSchool = $('select-school');
    var labelSchool = $('label-school'), labelCompany = $('label-company');
    var tdCompany = $('td-company');
    if (isStudent) {
        selectArea.style.display = 'block';
        selectSchool.style.display = 'block';
        labelSchool.style.display = 'block';
        tdCompany.style.display = 'none';
        labelCompany.style.display = 'none';
    } else {
        selectArea.style.display = 'none';
        selectSchool.style.display = 'none';
        labelSchool.style.display = 'none';
        tdCompany.style.display = 'block';
        labelCompany.style.display = 'block';
    }
}

/**
 * 根据选中的地区选项来更新学校选项的数据
 */
function updateSchoolOption() {
    selectSchool.innerHTML = "";
    var schoolArr = dataOption[selectArea.options[selectArea.selectedIndex].value];
    schoolArr.forEach(function (v) {
        var option = document.createElement('option');
        option.value = v;
        option.textContent = v;
        selectSchool.appendChild(option);
    });
}

/**
 * 初始化函数
 */
function init() {
    selectArea = $('select-area'); selectSchool = $('select-school');
    labelSchool = $('label-school'); labelCompany = $('label-company');
    tdCompany = $('td-company');
    $('student').addEventListener('change',  function () {
        changeForm(true);
    });
    $('not-student').addEventListener('change', function () {
        changeForm(false);
    });
    selectArea.addEventListener('change', function () {
        updateSchoolOption();
    });
}

window.onload = init;