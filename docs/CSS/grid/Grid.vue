<!-- eslint-disable -->
<template>
  <div class="box">

    <h2>Grid</h2>
    <div style="margin-top: 50px;padding-left: 15px;text-align: right;">
      <a style="text-decoration: none;" href="http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"
         target="_blank">Grid 布局教程 by </a>
    </div>
    <div>
    <pre>
.container.one{
  grid-template-columns:100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
</pre>
    </div>
    <div class="container one">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  .container.two{
   grid-template-columns: 33.33% 33.33% 33.33%;
   grid-template-rows: 33.33% 33.33% 33.33%;
  }
  </pre>
    </div>
    <div class="container two">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  .container.three{
    grid-template-columns: repeat(3,33.33%);
    grid-template-rows: repeat(3,33.33%);
  }
</pre>
    </div>
    <div class="container three">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  .container.four{
    grid-template-columns: repeat(auto-fill,100px);
  }
</pre>
    </div>
    <div class="container four">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  .container.five{
    grid-template-columns: 1fr 1fr 1fr;
  }
 </pre>
    </div>
    <div class="container five">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  .container.six{
    grid-template-columns: 150px 1fr 2fr;
  }
</pre>
    </div>
    <div class="container six">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  .container.seven{
   grid-template-columns: 1fr 1fr minmax(100px, 1fr);
 }
</pre>
    </div>
    <div class="container seven">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  .container.eight{
   grid-template-columns: 100px auto 100px;
 }
</pre>
    </div>
    <div class="container eight">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  /* 指定每根线的名字，每根线的名字可以是多个的 */
  .container.nine{
    grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
    grid-template-areas: [r1] 100px [r2] 100px [r3] auto [r4];
  }
</pre>
    </div>
    <div class="container nine">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
  .container.ten-1{
    grid-template-columns: 70% 30%;
  }
  .container.ten-2{
  grid-template-columns: repeat(12,1fr);
}
</pre>
    </div>
    <div class="container ten-1">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
      <div>
        <p>10</p>
      </div>

    </div>
    <div class="container ten-2">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
      <div>
        <p>10</p>
      </div>
      <div>
        <p>11</p>
      </div>
      <div>
        <p>12</p>
      </div>
    </div>
    <div>
    <pre>
    /* 设置间距 */
    grid-row-gap:20px;
    grid-column-gap: 20px;
    /* 简写 */
    grid-gap:&lt;grid-row-gap&gt;   &lt;grid-column-gap&gt;;
    /* 最新标准 */
    grid-row-gap =&gt; row-gap
    grid-column-gap =&gt; column-gap
    grid-gap =&gt; gap
  </pre>
    </div>
    <div class="container eleven">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <div>
    <pre>
    grid-template-areas属性用于定义区域。
    grid-template-areas: 'a . c'
    'd . f'
    'g . i';
    /* 先列后行 */
    grid-auto-flow: column;
    /* 先行后列 */
    grid-auto-flow: row;/* 默认值 */
  </pre>
    </div>
    <div class="container twelve twelve-1">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <div>
    <pre>
    grid-column-start:1;
    grid-column-end:3;
  </pre>
    </div>
    <div class="container twelve style twelve-2">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <div>
    <pre>
    grid-auto-flow: row dense;
  </pre>
    </div>
    <div class="container twelve style twelve-3">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <div>
    <pre>
    grid-auto-flow: column dense;
  </pre>
    </div>
    <div class="container twelve style twelve-4">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <div>
    <pre>
  .container {
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
  }
  start：对齐单元格的起始边缘。
  end：对齐单元格的结束边缘。
  center：单元格内部居中。
  stretch：拉伸，占满单元格的整个宽度（默认值）。
</pre>
    </div>
    <div class="container thirteen">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <div>
    <pre>
  align-items: start;
</pre>
    </div>
    <div class="container thirteen-1">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>


    <div>
    <pre>
  /* 简写 */
  place-items: &lt;align-items&gt;&nbsp;&lt;justify-items&gt;
  place-items: start end;
</pre>
    </div>
    <div class="container thirteen-2">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <div>
    <pre>
  justify-content属性是整个内容区域在容器里面的水平位置（左中右），
  align-content属性是整个内容区域的垂直位置（上中下）。
  .container {
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly;
  }
</pre>
    </div>
    <pre>start - 对齐容器的起始边框。
  </pre>
    <div class="container fourteen fourteen-1">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre> end - 对齐容器的结束边框。</pre>
    <div class="container fourteen fourteen-2">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre> center - 容器内部居中。</pre>
    <div class="container fourteen fourteen-3">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>stretch - 项目大小没有指定时，拉伸占据整个网格容器。</pre>
    <div class="container fourteen fourteen-4">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。</pre>
    <div class="container fourteen fourteen-5">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。</pre>
    <div class="container fourteen fourteen-6">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>


    <pre>space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。</pre>
    <div class="container fourteen fourteen-7">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>
    /* 简写 */
    place-content: &lt;align-content&gt; &lt;justify-content&gt;
  </pre>
    <div class="container fourteen fourteen-7">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>
      3.8
      grid-auto-columns 属性，
      grid-auto-rows 属性
    </pre>
    <div class="container fifteen">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <pre>
3.9(不推荐使用下面这2个简写)
grid-template 属性
  grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式
grid 属性
  grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。
    </pre>
    <pre>
4.1
  grid-column-start 属性，
    左边框所在的垂直网格线
  grid-column-end 属性，
    右边框所在的垂直网格线
  grid-row-start 属性，
    上边框所在的水平网格线
  grid-row-end 属性
    下边框所在的水平网格线
</pre>

    <pre>
/*
  这段代码指定，1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。
*/
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
</pre>
    <div class="container sixteen sixteen-1">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>
/*
  指定四个边框位置
*/
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
</pre>
    <div class="container sixteen sixteen-2">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <pre>
/*
  指定为网格线的名字
*/
.item-1 {
  grid-column-start: header-start;
  grid-column-end: header-end;
}
</pre>
    <div class="container sixteen sixteen-3">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <pre>
/*
  使用 span 关键字，表示 '跨越'  即左右边框（上下边框）之间跨越多少个网格
*/
.item-1 {
 grid-column-start: span 2;
}
</pre>
    <div class="container sixteen sixteen-4">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>
/*
  属性简写：
      grid-column：grid-column-start / grid-column-end;
      grid-row：grid-row-start / grid-row-end;
*/
.item-1 {
  grid-column:  / ;
  grid-row:  / ;
}
例子：

.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

上面 item-1占据第一行，从第一根列线到第三根列线。
</pre>
    <div class="container sixteen sixteen-5">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>
/*
 用span关键字
*/
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
</pre>
    <div class="container sixteen sixteen-6">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <pre>
/*
.item-1 {
  grid-column: 2;
  grid-row: 2;
}
*/
</pre>
    <div class="container sixteen sixteen-7">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>


    <pre>
/* grid-area */
</pre>
    <p>grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。</p>
    <pre>
.item {
  grid-area: &lt;row-start> / &lt;column-start> / &lt;row-end> / &lt;column-end>;
}
</pre>
    <div class="container seventeen seventeen-1">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>
    <pre>
/* 例子 */
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
</pre>
    <div class="container seventeen seventeen-2">
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>6</p>
      </div>
      <div>
        <p>7</p>
      </div>
      <div>
        <p>8</p>
      </div>
      <div>
        <p>9</p>
      </div>
    </div>

    <pre>
4.4
justify-self 属性，
    设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。
align-self 属性，
    属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。

      start：对齐单元格的起始边缘。
      end：对齐单元格的结束边缘。
      center：单元格内部居中。
      stretch：拉伸，占满单元格的整个宽度（默认值）。

  .item {
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
  }


place-self 属性
    属性是align-self属性和justify-self属性的合并简写形式

      place-self: &lt;align-self> &lt;justify-self>;

      .item {
        place-self: center center;
      }
</pre>

  </div>
</template>
<style lang="less">
  @import "grid.less";
</style>
