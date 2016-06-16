[IFE 春季班首页](http://ife.baidu.com/task/all)

> 百度Web前端技术学院（Baidu Institute of Front-End Technology 简称 IFE）是一个由百度人力资源部校园招聘组、 百度EFE团队联合出品的、 面向在校大学生以及对前端技术有兴趣的前端在线学习平台， 我们希望能够借助百度大量优秀的前端工程师以及丰富的前端知识积累， 帮助人们更加有趣、 高效、 系统地学习 Web 前端技术。

[第二阶段任务说明](http://mp.weixin.qq.com/s?__biz=MzA4MjUyNjY3Nw==&mid=402057593&idx=1&sn=ef20d1808470688bee1c8e242349b47c#rd)

> 同第一阶段一样，这二十四个任务并非所有人都要去完成，而是需要大家按照自己当前的能力水平来合理评估和选择。

> 从任务的难易程度排序，简单到困难，依次是：任务 13-17，18-21，22-25 | 29-32，26-28，33-36

<!-- more -->

## 零基础JavaScript编码

> ### [任务十三：零基础JavaScript编码（一）](http://ife.baidu.com/task/detail?taskId=13)

#### 任务描述

参考示例代码，补充其中的JavaScript功能，完成一个JavaScript代码的编写

本任务完成的功能为：用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_13\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_2/Task_13)



> ### [任务十四：零基础JavaScript编码（二）](http://ife.baidu.com/task/detail?taskId=14)

#### 任务描述

参考示例代码，页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_14\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_2/Task_14)


> ### [任务十五：零基础JavaScript编码（三）](http://ife.baidu.com/task/detail?taskId=15)

#### 任务描述

参考示例代码，读取页面上已有的source列表，从中提取出城市以及对应的空气质量

将数据按照某种顺序排序后，在resort列表中按照顺序显示出来

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_15\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_2/Task_15)


> ### [任务十六：零基础JavaScript编码（四）](http://ife.baidu.com/task/detail?taskId=16)

#### 任务描述

参考示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示

用户输入的城市名必须为中英文字符，空气质量指数必须为整数

用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）

用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）

用户可以点击表格列中的“删除”按钮，删掉那一行的数据

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_16\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_2/Task_16)



> ### [任务十七：零基础JavaScript编码（五）](http://ife.baidu.com/task/detail?taskId=17)

#### 任务描述

参考以下示例代码，原始数据包含几个城市的空气质量指数数据

用户可以选择查看不同的时间粒度，以选择要查看的空气质量指数是以天为粒度还是以周或月为粒度

- 天：显示每天的空气质量指数

- 周：以自然周（周一到周日）为粒度，统计一周7天的平均数为这一周的空气质量数值，如果数据中缺少一个自然周的几天，则按剩余天进行计算

- 月：以自然月为粒度，统一一个月所有天的平均数为这一个月的空气质量数值

用户可以通过select切换城市

通过在`aqi-chart-wrap`里添加DOM，来模拟一个柱状图图表，横轴是时间，纵轴是空气质量指数，[参考图（点击打开）](http://7xrp04.com1.z0.glb.clouddn.com/task_2_17_1.jpg)。天、周、月的数据只根据用户的选择显示一种。

- 天：每天的数据是一个很细的矩形

- 周：每周的数据是一个矩形

- 月：每周的数据是一个很粗的矩形

鼠标移动到柱状图的某个柱子时，用title属性提示这个柱子的具体日期和数据

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_17\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_2/Task_17)

> ### 任务总结

#### JavaScript

实现`id`选择器

``` JavaScript
var $ = function (id) {
  return document.getElementById(id);
};
```

通过`event.target`获取事件目标
``` JavaScript
citySelect.onchange = function (event) {
    citySelectChange(event.target.value);
};
```

遍历`Object`的`key`及将`Object`的`key`提取到数组 (`ECMAScript 6`)
``` JavaScript
for (let city in aqiSourceData) { ...; }

let cityKeyData = Object.keys(aqiSourceData[city]);
```

#### CSS

实现柱形图出现时高度增长的`keyframes`动画

``` CSS
@keyframes grow {
    0% {
        height: 0;
        margin-top: 500px;
    }
}
.chart-item {
    float: left;
    margin: 1px;
    animation: grow 0.5s ease-in-out;
}
```
``` HTML
<span 
  class="chart-item chart-item-week chart-item-color-3" 
  title="2016-01-01~2016-01-03 AQI: 277.33" 
  style="height: 277.33px; margin-top: calc(500px - 277.33px)"
></span>
```


## 基础JavaScript练习

> ### [任务十八：基础JavaScript练习（一）](http://ife.baidu.com/task/detail?taskId=18)

#### 任务描述

[如图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_18_1.jpg)，模拟一个队列，队列的每个元素是一个数字，初始队列为空

有一个input输入框，以及4个操作按钮

- 点击"左侧入"，将 input 中输入的数字从左侧插入队列中；
- 点击"右侧入"，将 input 中输入的数字从右侧插入队列中；
- 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
- 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
- 点击队列中任何一个元素，则该元素会被从队列中删除

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_18\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/gh-pages/Stage_2/Task_18)


> ### [任务十九：基础JavaScript练习（二）](http://ife.baidu.com/task/detail?taskId=19)

#### 任务描述

基于任务18

限制输入的数字在 10-100
队列元素数量最多限制为 60 个，当超过 60 个时，添加元素时 alert 出提示
队列展现方式变化[如图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_19_1.jpg)，直接用高度表示数字大小
实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_19\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/gh-pages/Stage_2/Task_19)


> ### [任务二十：基础JavaScript练习（三）](http://ife.baidu.com/task/detail?taskId=20)

#### 任务描述

基于任务18进行升级

将新元素输入框从 input 改为 textarea

允许一次批量输入多个内容，格式可以为数字、中文、英文等，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔

增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有 abcd，查询词为 ab 或 bc，则该内容需要标识

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_20\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/gh-pages/Stage_2/Task_20)


> ### [任务二十一：基础JavaScript练习（四）](http://ife.baidu.com/task/detail?taskId=21)

#### 任务描述

基于任务 20，将任务 20 的代码进行抽象、封装，然后在此基础上实现[如图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_21_1.jpg)中的两个需求：Tag 输入和兴趣爱好输入

如示例图上方，实现一个 tag 输入框
要求遇到用户输入空格，逗号，回车时，都自动把当前输入的内容作为一个 tag 放在输入框下面。
Tag 不能有重复的，遇到重复输入的 Tag，自动忽视。
每个 Tag 请做 trim 处理
最多允许 10 个 Tag，多于 10 个时，按照录入的先后顺序，把最前面的删掉
当鼠标悬停在 tag 上时，tag 前增加删除二字，点击 tag 可删除

如示例图下方，实现一个兴趣爱好输入的功能
通过一个 Textarea 进行兴趣爱好的输入，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为间隔。
当点击“确认兴趣爱好”的按钮时，将 textarea 中的输入按照你设定的间隔符，拆解成一个个的爱好，显示在 textarea 下方
爱好不能重复，所以在下方呈现前，需要做一个去重
每个爱好内容需要做 trim 处理
最多允许 10 个兴趣爱好，多于 10 个时，按照录入的先后顺序，把最前面的删掉

[Demo](\Baidu_IFE_2016Spring\Stage_2\Task_21\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/gh-pages/Stage_2/Task_21)


> ### 任务总结

#### JavaScript

使用`Element.classList`对元素的类名进行操作

``` JavaScript
// div is an object reference to a <div> element with class="foo bar"
div.classList.remove("foo");
div.classList.add("anotherclass");

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

//  add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10 );

alert(div.classList.contains("foo"));

div.classList.add("foo","bar"); //add multiple classes
```

利用数组或 DOM 模拟队列的出队入队操作

``` JavaScript
var arr = [];
// 队首入队出队
arr.unshift(2);
arr.shift();
// 队尾入队出队
arr.push(2);
arr.pop();

// 队首入队出队
parentNode.insertBefore(newNode, referenceNode);
parentNode.removeChild(parentNode.firstElementChild);
// 队尾入队出队
parentNode.appendChild(newNode);
parentNode.removeChild(parentNode.lastElementChild);
```

通过将排序的交换过程存到数组然后再按数组记录交换元素实现可视化

使用正则表达式验证字符串并根据分隔符将其分割

``` JavaScript
// \u4E00-\u9FA5 为中文字符
var re = /^[\n\s,，、]|[^\d\w\u4E00-\u9FA5\n\s,，、]|[\n\s,，、]$/;
if (str.match(re)) {
    alert('Invalid input!');
    return "error";
}
return str.split(/[\n\s,，、]+/);
```

通过增加对`mouseenter`和`mouseleave`事件的监听实现鼠标悬停在元素上时显示额外的文本内容

``` JavaScript
span.addEventListener("mouseenter", function () {
    this.textContent = "删除 " + this.textContent;
    this.style.backgroundColor = "#33acfe";
});

span.addEventListener("mouseleave", function () {
    this.textContent = this.textContent.substr(3);
    this.style.backgroundColor = "#7fffd4";
});
```

面向对象和继承的实现

``` JavaScript
// 父类
function F(value) {
  this.value = value;
}
F.prototype.print = function () {
    console.log(this.value);
};
// 子类
function S(value, id) {
  // 调用父类构造函数
  F.call(this, value);
  this.id = id;
}
// 继承原型
S.prototype = Object.create(F.prototype);
// 重置构造函数
S.prototype.constructor = S;
// 覆写方法
S.prototype.print = function () {
  console.log(this.id + ' ' + this.value);
};

var f = new F('father');
var s = new S('son', 233);
f.print(); // father
s.print(); // 233 son
console.log(s instanceof S); // true
console.log(s instanceof F); // true

/* Object.create 的 Polyfill */
function createObject(proto) {
    function ctor() { }
    ctor.prototype = proto;
    return new ctor();
}
// Usage:
Student.prototype = createObject(Person.prototype);
```
