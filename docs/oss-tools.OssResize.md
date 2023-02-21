# Interface: OssResize

[oss-tools](../wiki/oss-tools).OssResize

设置尺寸

## Table of contents

### Properties

- [color](../wiki/oss-tools.OssResize#color)
- [h](../wiki/oss-tools.OssResize#h)
- [l](../wiki/oss-tools.OssResize#l)
- [limit](../wiki/oss-tools.OssResize#limit)
- [m](../wiki/oss-tools.OssResize#m)
- [s](../wiki/oss-tools.OssResize#s)
- [w](../wiki/oss-tools.OssResize#w)

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

• `Optional` **m**: [`OssResizeMode`](../wiki/oss-tools#ossresizemode)

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
