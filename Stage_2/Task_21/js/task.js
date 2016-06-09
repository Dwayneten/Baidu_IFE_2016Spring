/**
 * 根据 ID 获取元素
 * @param id - 元素 ID
 * @returns {Element} - 选择到的元素
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * NodeList 类
 * @param inputElementParameter 输入框元素
 * @param nodeWrapperParameter 用来显示节点的容器元素
 * @constructor
 */
function NodeList(inputElementParameter, nodeWrapperParameter) {
    this.dataArr = [];
    this.inputElement = inputElementParameter;
    this.nodeWrapper = nodeWrapperParameter;

    /**
     * 添加节点的接口
     */
    this.addNode = function () {
        var value = this.getValue().trim().replace(/[,，]/, "");
        this.addData(value);
        this.reset();
    };
    /**
     * 获取输入框内容
     * @returns {string|string|Number}
     */
    this.getValue = function () {
        return this.inputElement.value;
    };
    /**
     * 增加节点
     * @param value 节点文本内容
     */
    this.addData = function (value) {
        if (!this.checkValue(value))
            return;
        if (this.nodeWrapper.childNodes.length >= 10) {
            this.nodeWrapper.removeChild(this.nodeWrapper.firstElementChild);
            this.dataArr.shift();
        }
        this.generateSpan(value);
        this.dataArr.push(value);
    };
    /**
     * 检查文本数据的合法性
     * @param str 文本数据
     * @returns {boolean} 代表是否合法的布朗值
     */
    this.checkValue = function (str) {
        if (str === "") {
            return false;
        } else if (/[^\w\d\u4E00-\u9FA5]/.test(str)) {
            return false;
        } else {
            var isUnique = true;
            this.dataArr.forEach(function (v) {
                if (v == str) {
                    isUnique = false;
                }
            });
            return isUnique;
        }
    };
    /**
     * 生成节点元素
     * @param value 节点的文本内容
     */
    this.generateSpan = function (value) {
        var self = this;
        var span = document.createElement('span');
        span.textContent = value;
        /**
         * 鼠标移入元素的事件
         */
        span.addEventListener("mouseenter", function () {
            this.textContent = "删除 " + this.textContent;
            this.style.backgroundColor = "#33acfe";
        });
        /**
         * 鼠标移出元素的事件
         */
        span.addEventListener("mouseleave", function () {
            this.textContent = this.textContent.substr(3);
            this.style.backgroundColor = "#7fffd4";
        });
        /**
         * 鼠标点击元素的事件
         */
        span.addEventListener("click", function (event) {
            event.target.classList.add("removing");
            event.target.textContent = "";
            setTimeout(function () {
                self.nodeWrapper.removeChild(event.target);
            }, 500);
        });
        /* 将元素添加至容器后面 */
        this.nodeWrapper.appendChild(span);
    };
    /**
     * 重置输入元素的内容并使其获取焦点
     */
    this.reset = function () {
        this.inputElement.value = "";
        this.inputElement.focus();
    };
}

/**
 * TagNodeList 对象和 FavorNodeList 对象的实例
 */
var tnl, fnl;

/**
 * TagNodeList 对象
 * 继承 NodeList
 * @constructor
 */
function TagNodeList() {
    /* 获取相关元素 */
    this.nodeWrapper = $('tag-node-wrapper');
    this.inputElement = $('input-tag');
    /* 继承 NodeList 并调用父类构造函数 */
    this.prototype = Object.create(NodeList.prototype);
    this.prototype.constructor = TagNodeList;
    NodeList.call(this, this.inputElement, this.nodeWrapper);
}

/**
 * FavorNodeList 对象
 * 继承 NodeList
 * @constructor
 */
function FavorNodeList() {
    /* 获取相关元素 */
    this.nodeWrapper = $('favor-node-wrapper');
    this.inputElement = $('input-favor');
    this.btnFavor = $('btn-favor');
    /* 继承 NodeList 并调用父类构造函数 */
    this.prototype = Object.create(NodeList.prototype);
    this.prototype.constructor = FavorNodeList;
    NodeList.call(this, this.inputElement, this.nodeWrapper);
    /* 重写 addNode 函数 */
    this.addNode = function (value) {
        this.addData(value);
        this.reset();
    }
}

/**
 * 进行相关的事件绑定
 * 针对 Tag 绑定 keyup 用以响应按键
 * 针对 Favor 绑定按钮的点击事件
 */
function bindEvent() {
    tnl.inputElement.addEventListener("keyup", function (event) {
        /* 若是按下回车键或输入了空格、逗号则新增节点 */
        if (/[\n\s,，]/.test(tnl.getValue()) || event.keyCode == 13) {
            tnl.addNode();
        }
    });

    fnl.btnFavor.addEventListener("click", function () {
        var value = fnl.getValue().trim();
        /* 输入数据合法性检查 */
        if (/[^\w\d\u4E00-\u9FA5\s\n,，、]/.test(value)) {
            alert("Invalid input!");
            return;
        }
        /* 将输入数据以分割符分割后新增节点 */
        var valueArray = value.split(/[\s\n,，、]+/);
        valueArray.forEach(function (value) {
            fnl.addNode(value);
        });
    });
}

/**
 * 初始化
 * 生成对象实例
 * 调用绑定事件函数
 */
function init() {
    tnl = new TagNodeList();
    fnl = new FavorNodeList();
    bindEvent();
}

window.onload = init;