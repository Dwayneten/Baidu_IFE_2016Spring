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