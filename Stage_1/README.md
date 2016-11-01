[IFE 春季班首页](http://ife.baidu.com/task/all)

> 百度Web前端技术学院（Baidu Institute of Front-End Technology 简称 IFE）是一个由百度人力资源部校园招聘组、 百度EFE团队联合出品的、 面向在校大学生以及对前端技术有兴趣的前端在线学习平台， 我们希望能够借助百度大量优秀的前端工程师以及丰富的前端知识积累， 帮助人们更加有趣、 高效、 系统地学习 Web 前端技术。

[第一阶段任务说明](http://mp.weixin.qq.com/s?__biz=MzA4MjUyNjY3Nw==&mid=401956006&idx=1&sn=bbf72ea5c17894c3a5423d8b3bdb7d9a#rd)

个人选择的第一阶段任务的学习路径为：3-4-6/7-8-9

> ### [任务三：HTML、CSS布局入门，三栏式布局的实践](http://ife.baidu.com/task/detail?taskId=3)

#### 任务描述

使用 HTML 与 CSS 按照 [示例图（点击查看）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_3_1.png) 实现三栏式布局。

左右两栏宽度固定，中间一栏根据父元素宽度填充满，最外面的框应理解为浏览器。背景色为 #eee 区域的高度取决于三个子元素中最高的高度。


[Demo](http://dwayneten.com/Baidu_IFE_2016Spring/Stage_1/Task_3/index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_1/Task_3)


#### 任务总结

左边栏向左浮动， 右边栏向右浮动，外层容器清除浮动确保其高度由子元素中最高的高度决定。

中间栏置于左边栏和右边栏元素之后， 通过设置 `margin-left` 和 `margin-right` 使其在中间显示。

外层容器和中间栏通过设置 `min-width` 确保窗口大小过小时不会将元素挤压或堆叠在一起。


> ### [任务四：定位和居中问题](http://ife.baidu.com/task/detail?taskId=4)

#### 任务描述

实现如 [示例图（点击打开）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_4_1.png) 的效果

灰色元素水平垂直居中，有两个四分之一圆位于其左上角和右下角。


[Demo]((http://dwayneten.com\Baidu_IFE_2016Spring\Stage_1\Task_4\index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_1/Task_4)


#### 任务总结

使元素居中的方法在参考资料中讲得很详细， 这里用的是父级元素 `position: relative;` , 容器 `position: absolute;` 然后设置 `top` `left` 和 `transform` 的方法。

扇形的实现有两种方式， 一是设置 `border` 和 `border-radius` 同时必须在父元素设置 `overflow: hidden;`， 不然会溢出容器； 第二种方式是设置 `background-color` 和元素大小并通过设置 `border-top-left-radius` 或 `border-bottom-right-radius` 的方式来实现， 这种方式不需要对父元素进行设置， 有一定的灵活性。 两种方式的定位均通过设置 `position: absolute;` 和 `top` `left` 属性来解决。


> ### [任务六：通过HTML及CSS模拟报纸排版](http://ife.baidu.com/task/detail?taskId=6)

#### 任务描述

参考 [PSD设计稿（点击下载）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_6_1.psd)，实现页面开发，要求实现效果与 [样例（点击查看）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_6_2.jpg) 基本一致

页面中的各字体大小，内外边距等可参看 [标注图（点击查看）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_6_3.jpg)

页面宽度固定（定宽）


[Demo]((http://dwayneten.com/Baidu_IFE_2016Spring/Stage_1/Task_6/index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_1/Task_6)


#### 任务总结

做页眉的红色色块和日期时， 用 `display:inline-block` 会导致元素下方与分割线之间有一点间隔， 水平方向的 `inline-block` 之间也会有一定间隔， 改用 `float` 的方式实现。

色块遮罩通过 `display:absolute` 定位和设置 `rgba` 中不透明度实现。

右上下划线英文效果分别通过设置 `text-decoration: underline` 显示下划线， `font-variant: small-caps` 转换成小型大写字母， `text-transform: capitalize` 首字母大写。

左下区块使首个文字和图片浮动以实现文字环绕的效果， 将 `img` 元素放到 `p` 元素中间使其在垂直方向上大致居中。

通过 `border` 用 `CSS` 实现倒三角形的方法:
``` CSS
.triangle {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 9px solid #10456b;
    display: inline-block;
    margin-right: 10px;
}
```

在浮动的元素下面的首个元素即使设置了 `clear: both`， 其 `margin-top` 属性也会失效， 这是因为在计算 `margin` 时， 浮动的元素还不存在与那个位置。
有两个简单的方法可以 fix 这个情况， 一是用一个容器包住浮动的元素并设置 `overflow: hidden`， 二是在浮动的元素下面先放一个空的元素并设置 `clear: both`。
[stackoverflow 上的相关问题](http://stackoverflow.com/questions/4198269/margin-top-not-working-with-clear-both)

这里的页脚分割线出现了这种情况， 用的是第二种方法解决。


> ### [任务七：实现常见的技术产品官网的页面架构及样式布局](http://ife.baidu.com/task/detail?taskId=7)

#### 任务描述

通过HTML及CSS实现设计稿 设计稿[PSD文件（点击下载）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_7_1.psd)，效果如 [效果图（点击打开）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_7_2.jpg)

设计稿是有一定宽度的，这个宽度为页面的最小宽度，也就是说，当浏览器窗口宽度小于设计稿宽度时，允许出现横向滚动条，页面内容宽度保持不变，但是当浏览器窗口宽度大于设计稿宽度时，页面部分内容的宽度应该保持和浏览器窗口宽度一致，具体哪些部分题目不做具体指明，看看大家的判断如何。

[Demo]((http://dwayneten.com/Baidu_IFE_2016Spring/Stage_1/Task_7/index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_1/Task_7)


#### 任务总结

清除浮动
``` CSS
.clearfix:before, .clearfix:after {
    content: "";
    clear: both;
    display: table;
}
```

通过`calc()`配合`vh``vw``vmin``vmax`等实现自适应宽高度。

通过`-webkit-filter: brightness(0.8);`来给`img`实现遮罩变暗效果。

通过`letter-spacing`设置字间距时，最后一个字后也会有间距， 可通过设置`text-indent`使左右对称。

通过`background-size`使背景图适应容器宽高度。

对于小图标，可以将它们放进一张大图里，再通过设置`background-position`来显示各个小图标。


> ### [任务八：响应式网格（栅格化）布局](http://ife.baidu.com/task/detail?taskId=8)

#### 任务描述

使用 HTML 与 CSS 实现类似 [BootStrap 的响应式 12 栏网格布局](http://v4-alpha.getbootstrap.com/layout/grid/)，根据屏幕宽度，元素占的栏数不同。

需要实现如 [效果图](http://7xrp04.com1.z0.glb.clouddn.com/task_1_8_1.png) 所示，调整浏览器宽度查看响应式效果，效果图中的红色的文字是说明，不需要写在 HTML 中。

[Demo]((http://dwayneten.com/Baidu_IFE_2016Spring/Stage_1/Task_8/index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_1/Task_8)


#### 任务总结

利用浮动和对`width`属性的设置实现响应式网格布局。

对所有栏设置`min-height: 1px;`使其不被堆叠， 设置`padding`实现列之间的 gutter.

由于重复的属性很多，使用`less`编写能大幅减少所需代码量，而且可以利用循环方便地实现对前缀相同的不同类设置不同属性值。

使用 `gulp` 编译 `less` 并压缩 `css` 实现自动化的项目构建。
``` javascript
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

var lessDist = './less/**/*.less';
var cssDist = './css';

gulp.task('less', function () {
   return gulp.src(lessDist)
       .pipe(less())
       .pipe(gulp.dest(cssDist))
       .pipe(cssmin())
       .pipe(rename({ suffix: '.min' }))
       .pipe(gulp.dest(cssDist))
});
```


> ### [任务九：使用HTML/CSS实现一个复杂页面](http://ife.baidu.com/task/detail?taskId=9)

#### 任务描述

通过HTML及CSS实现设计稿 设计稿[PSD文件（点击下载）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_9_1.psd)，效果如 [效果图（点击打开）](http://7xrp04.com1.z0.glb.clouddn.com/task_1_9_2.jpg)

整个页面内容宽度固定，但头部的蓝色导航和浏览器宽度保持一致

[Demo]((http://dwayneten.com/Baidu_IFE_2016Spring/Stage_1/Task_9/index.html) | [Source](https://github.com/Dwayneten/Baidu_IFE_2016Spring/tree/master/Stage_1/Task_9)


#### 任务总结

通过`:focus`纯 css 实现点击搜索框时改变长度的动画效果，设置`transition-property`来限制动画效果的作用范围

设置`z-index`来解决`position: relative;`的元素会在`position: fixed;`的元素上面的问题

在`box-sizing: border-box;`的情况下, 边框会影响内容的位置， 通过设置与背景色一样的边框使元素内容在元素被`hover`时不上下跳动

使用`::after`伪元素来实现装饰效果的色块
