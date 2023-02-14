# Interface: OssResize

[ossImage](../wiki/ossImage).OssResize

设置尺寸

## Table of contents

### Properties

- [color](../wiki/ossImage.OssResize#color)
- [h](../wiki/ossImage.OssResize#h)
- [l](../wiki/ossImage.OssResize#l)
- [limit](../wiki/ossImage.OssResize#limit)
- [m](../wiki/ossImage.OssResize#m)
- [s](../wiki/ossImage.OssResize#s)
- [w](../wiki/ossImage.OssResize#w)

## Properties

### color

• `Optional` **color**: `string`

当缩放模式选择为pad（缩放填充）时，可以设置填充的颜色
- RGB颜色值，例如：000000表示黑色，FFFFFF表示白色。
- 默认值：FFFFFF（白色）

___

### h

• `Optional` **h**: `number`

指定目标缩放图的高度。
- [1,4096]

___

### l

• `Optional` **l**: `number`

指定目标缩放图的最长边。
- [1,4096]

___

### limit

• `Optional` **limit**: ``0`` \| ``1``

指定当目标缩放图大于原图时是否进行缩放。
- 1（默认值）：表示不按指定参数进行缩放，直接返回原图。
- 0：按指定参数进行缩放。

___

### m

• `Optional` **m**: `OssResizeMode`

指定缩放的模式

___

### s

• `Optional` **s**: `number`

指定目标缩放图的最长边。
- [1,4096]

___

### w

• `Optional` **w**: `number`

指定目标缩放图的宽度
- [1,4096]
