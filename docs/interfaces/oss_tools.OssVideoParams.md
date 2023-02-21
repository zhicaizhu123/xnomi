[xnomi工具库](../README.md) / [Modules](../modules.md) / [oss-tools](../modules/oss_tools.md) / OssVideoParams

# Interface: OssVideoParams

[oss-tools](../modules/oss_tools.md).OssVideoParams

处理阿里云视频封面参数接口

## Table of contents

### Properties

- [ar](oss_tools.OssVideoParams.md#ar)
- [f](oss_tools.OssVideoParams.md#f)
- [h](oss_tools.OssVideoParams.md#h)
- [m](oss_tools.OssVideoParams.md#m)
- [t](oss_tools.OssVideoParams.md#t)
- [w](oss_tools.OssVideoParams.md#w)

## Properties

### ar

• `Optional` **ar**: ``"auto"``

指定是否根据视频信息自动旋转图片。如果指定为auto，则在截图生成之后根据视频信息进行自动旋转。

___

### f

• **f**: ``"jpg"`` \| ``"png"``

指定输出图片的格式。

___

### h

• **h**: `number`

指定截图高度，如果指定为0，则自动计算；如果w和h都为0，则输出为原视频宽高。

___

### m

• `Optional` **m**: ``"fast"``

指定截图模式，不指定则为默认模式，根据时间精确截图。如果指定为fast，则截取该时间点之前的最近的一个关键帧。

___

### t

• **t**: `number`

指定截图时间。

___

### w

• **w**: `number`

指定截图宽度，如果指定为0，则自动计算。
