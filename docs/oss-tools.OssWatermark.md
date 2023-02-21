# Interface: OssWatermark

[oss-tools](../wiki/oss-tools).OssWatermark

设置水印

## Table of contents

### Properties

- [P](../wiki/oss-tools.OssWatermark#p)
- [align](../wiki/oss-tools.OssWatermark#align)
- [color](../wiki/oss-tools.OssWatermark#color)
- [fill](../wiki/oss-tools.OssWatermark#fill)
- [g](../wiki/oss-tools.OssWatermark#g)
- [image](../wiki/oss-tools.OssWatermark#image)
- [interval](../wiki/oss-tools.OssWatermark#interval)
- [order](../wiki/oss-tools.OssWatermark#order)
- [rotate](../wiki/oss-tools.OssWatermark#rotate)
- [shadow](../wiki/oss-tools.OssWatermark#shadow)
- [size](../wiki/oss-tools.OssWatermark#size)
- [t](../wiki/oss-tools.OssWatermark#t)
- [text](../wiki/oss-tools.OssWatermark#text)
- [type](../wiki/oss-tools.OssWatermark#type)
- [voffet](../wiki/oss-tools.OssWatermark#voffet)
- [x](../wiki/oss-tools.OssWatermark#x)
- [y](../wiki/oss-tools.OssWatermark#y)

## Properties

### P

• `Optional` **P**: `number`

指定水印图片按照主图的比例进行缩放，取值为缩放的百分比。如设置参数值为10，如果主图为100×100， 水印图片大小就为10×10。当主图变成了200×200，水印图片大小就为20×20。
- [1, 100]

___

### align

• **align**: ``0`` \| ``2`` \| ``1``

___

### color

• `Optional` **color**: `string`

___

### fill

• **fill**: ``0`` \| ``1``

___

### g

• `Optional` **g**: ``"nw"`` \| ``"north"`` \| ``"ne"`` \| ``"west"`` \| ``"center"`` \| ``"sw"`` \| ``"south"`` \| ``"se"``

指定水印在图片中的位置。
- nw：左上
- north：中上
- ne：右上
- west：左中
- center：中部
- east：右中
- sw：左下
- south：中下
- se：右下

___

### image

• `Optional` **image**: `string`

用于指定作为水印图片的完整Object名称，Object名称需进行Base64编码。详情请参见水印编码。
- Base64编码后的字符串。

___

### interval

• **interval**: `number`

___

### order

• **order**: ``0`` \| ``1``

___

### rotate

• `Optional` **rotate**: `number`

___

### shadow

• `Optional` **shadow**: `number`

___

### size

• `Optional` **size**: `number`

___

### t

• `Optional` **t**: `number`

___

### text

• `Optional` **text**: `string`

指定文字水印的文字内容，文字内容需进行Base64编码。
- Base64编码后的字符串，最大长度为64个字符（最多21个汉字）

___

### type

• `Optional` **type**: `string`

指定文字水印的字体，字体名称需进行Base64编码。
- 默认值：wqy-zenhei（ 编码后的值为d3F5LXplbmhlaQ）

___

### voffet

• `Optional` **voffet**: `number`

指定水印的中线垂直偏移。当水印位置在左中、中部、右中时，可以指定水印位置根据中线往上或者往下偏移。
- [-1000, 1000]
- 默认值：10
- 单位：像素（px）

___

### x

• `Optional` **x**: `number`

指定水印的水平边距， 即距离图片边缘的水平距离。这个参数只有当水印位置是左上、左中、左下、右上、右中、右下才有意义。
- [0, 4096]
- 默认值：10
- 单位：像素（px）

___

### y

• `Optional` **y**: `number`

指定水印的垂直边距，即距离图片边缘的垂直距离， 这个参数只有当水印位置是左上、中上、右上、左下、中下、右下才有意义。
- [0, 4096]
- 默认值：10
- 单位：像素（px）
