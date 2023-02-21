[xnomi工具库](../README.md) / [Modules](../modules.md) / [oss-tools](../modules/oss_tools.md) / OssIndexcrop

# Interface: OssIndexcrop

[oss-tools](../modules/oss_tools.md).OssIndexcrop

## Table of contents

### Properties

- [i](oss_tools.OssIndexcrop.md#i)
- [x](oss_tools.OssIndexcrop.md#x)
- [y](oss_tools.OssIndexcrop.md#y)

## Properties

### i

• `Optional` **i**: `number`

选择切割后返回的图片区域。
- [0,区域数)默认为0，表示第一块。

___

### x

• `Optional` **x**: `number`

指定在x轴切割出的每块区域的长度。x参数与y参数只能任选其一。
- [1,图片宽度]

___

### y

• `Optional` **y**: `number`

指定在y轴切割出的每块区域的长度。x参数与y参数只能任选其一。
- [1,图片高度]
