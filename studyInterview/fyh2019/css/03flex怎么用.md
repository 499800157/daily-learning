## flex怎么用，常用属性有哪些
1. flex-direction
此属性设置主轴的方向是行还是列，是顺序还是逆序，有row,row-reverse,column,column-reverse这四个常用可选值。
2. flex-wrap
此属性设置设置沿主轴方向是否需要换行，正序还是逆序，有nowrap,wrap,wrap-reverse这三个常用可选值。
3. flew-flow
由于上面两个属性总是一起使用，所以将上两个属性值合并为flex-flow属性，属性值用空格隔开。默认值为row nowrap 
4. justify-content
此属性定义了项目在主轴上的对齐方式，靠左靠右居中或者相同边距（两边留距离）和相同距离（两边不留距离），有flex-start,flex-end,center,space-between,space-around这五个常用可选值。
5. align-items
此属性 定义项目在交叉轴上如何对齐，靠左靠右或者居中，有flex-start,flex-end,center这三个常用可选值。stretch(默认值)　  /* strech是拉伸的意思，如果项目未设置高度或设为auto，将占满整个容器的高度。  */
6. align-content
属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。align-content: stretch;  /* 需要有很多的子项目，而且需要flex-wrap 不是nowrap */
## 使用在子元素身上
1. align-self
使用在子元素身上，此属性设置了一个弹性项目沿侧轴方向的摆放位置，可选值与align-items类似。
允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
2. oder属性　
定义项目的排列顺序。数值越小，排列越靠前，默认为0 
3. flex-grow属性 
定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。 
    /* 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。 */

4. flex-shrink属性
定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 
    /* 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。 */

5. flex-basis属性 
 定义了在分配多余空间之前，项目占据的主轴空间 ,默认值为auto，即项目的本来大小*/

6. flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。 
    /* auto (1 1 auto)     none (0 0 auto)     initial(0 1 auto)      flex: 1; === flex: 1 1 auto;      */