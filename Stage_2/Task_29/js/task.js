"use strict";
document.getElementById('btn-check').addEventListener('click', function () {
    var value = document.getElementById('name').value;
    var count = 0;
    for (var i=0; i<value.length; ++i) {
        var code = value.charCodeAt(i);
        if (0xFF00 <= code && code <= 0xFFEF) {
            count += 2;
        } else if (0x4E00 <= code && code <= 0x9FA5) {
            count += 2;
        } else {
            count++;
        }
    }
    var table = document.getElementById('table-form'),
        spanHint = document.getElementById('span-hint');
    if (4 <= count && count <= 16) {
        if (table.classList.contains('error'))
            table.classList.remove('error');
        if (!table.classList.contains('accept'))
            table.classList.add('accept');
        spanHint.textContent = "名称格式正确";
    } else {
        if (!table.classList.contains('error'))
            table.classList.add('error');
        if (table.classList.contains('accept'))
            table.classList.remove('accept');
        if (count == 0) {
            spanHint.textContent = "名称不能为空";
        } else if (count < 4) {
            spanHint.textContent = "名称长度过短";
        } else {
            spanHint.textContent = "名称长度过长";
        }
    }
});