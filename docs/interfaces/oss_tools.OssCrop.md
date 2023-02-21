[xnomi工具库](../README.md) / [Modules](../modules.md) / [oss-tools](../modules/oss_tools.md) / OssCrop

# Interface: OssCrop

[oss-tools](../modules/oss_tools.md).OssCrop

## Table of contents

### Properties

- [g](oss_tools.OssCrop.md#g)
- [h](oss_tools.OssCrop.md#h)
- [w](oss_tools.OssCrop.md#w)
- [x](oss_tools.OssCrop.md#x)
- [y](oss_tools.OssCrop.md#y)

## Properties

### g

• `Optional` **g**: ``"nw"`` \| ``"north"`` \| ``"ne"`` \| ``"west"`` \| ``"center"`` \| ``"sw"`` \| ``"south"`` \| ``"se"``

设置裁剪的原点位置。原点按照九宫格的形式分布，一共有九个位置可以设置，为每个九宫格的左上角顶点。
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

### h

• `Optional` **h**: `number`

指定裁剪高度。

___

### w

• `Optional` **w**: `number`

指定裁剪宽度。

___

### x

• `Optional` **x**: `number`

指定裁剪起点横坐标（默认左上角为原点）

___

### y

• `Optional` **y**: `number`

指定裁剪起点纵坐标（默认左上角为原点）
