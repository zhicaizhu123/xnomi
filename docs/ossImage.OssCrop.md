# Interface: OssCrop

[ossImage](../wiki/ossImage).OssCrop

## Table of contents

### Properties

- [g](../wiki/ossImage.OssCrop#g)
- [h](../wiki/ossImage.OssCrop#h)
- [w](../wiki/ossImage.OssCrop#w)
- [x](../wiki/ossImage.OssCrop#x)
- [y](../wiki/ossImage.OssCrop#y)

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
