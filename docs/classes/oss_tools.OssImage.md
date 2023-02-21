[xnomi工具库](../README.md) / [Modules](../modules.md) / [oss-tools](../modules/oss_tools.md) / OssImage

# Class: OssImage

[oss-tools](../modules/oss_tools.md).OssImage

处理阿里云图片类

## Table of contents

### Constructors

- [constructor](oss_tools.OssImage.md#constructor)

### Properties

- [autoOrient](oss_tools.OssImage.md#autoorient)
- [blur](oss_tools.OssImage.md#blur)
- [bright](oss_tools.OssImage.md#bright)
- [circle](oss_tools.OssImage.md#circle)
- [contrast](oss_tools.OssImage.md#contrast)
- [crop](oss_tools.OssImage.md#crop)
- [format](oss_tools.OssImage.md#format)
- [indexcrop](oss_tools.OssImage.md#indexcrop)
- [interlace](oss_tools.OssImage.md#interlace)
- [methodKeys](oss_tools.OssImage.md#methodkeys)
- [originUrl](oss_tools.OssImage.md#originurl)
- [quality](oss_tools.OssImage.md#quality)
- [resize](oss_tools.OssImage.md#resize)
- [rotate](oss_tools.OssImage.md#rotate)
- [roundedCorners](oss_tools.OssImage.md#roundedcorners)
- [sharpen](oss_tools.OssImage.md#sharpen)
- [watermark](oss_tools.OssImage.md#watermark)

### Accessors

- [url](oss_tools.OssImage.md#url)

### Methods

- [methodHandler](oss_tools.OssImage.md#methodhandler)

## Constructors

### constructor

• **new OssImage**(`originUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `originUrl` | `string` |

## Properties

### autoOrient

• **autoOrient**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssAutoOrient`](../modules/oss_tools.md#ossautoorient)\>

指定图片是否进行自适应旋转

**`Memberof`**

OssImage

___

### blur

• **blur**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssBlur`](../interfaces/oss_tools.OssBlur.md)\>

设置模糊度

**`Memberof`**

OssImage

___

### bright

• **bright**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<`number`\>

指定图片的亮度

**`Memberof`**

OssImage

___

### circle

• **circle**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssCircle`](../interfaces/oss_tools.OssCircle.md)\>

设置圆形

**`Memberof`**

OssImage

___

### contrast

• **contrast**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<`number`\>

指定图片的亮度

**`Memberof`**

OssImage

___

### crop

• **crop**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssCrop`](../interfaces/oss_tools.OssCrop.md)\>

截取

**`Memberof`**

OssImage

___

### format

• **format**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssFormat`](../modules/oss_tools.md#ossformat)\>

格式转换

**`Memberof`**

OssImage

___

### indexcrop

• **indexcrop**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssIndexcrop`](../interfaces/oss_tools.OssIndexcrop.md)\>

切割

**`Memberof`**

OssImage

___

### interlace

• **interlace**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssInterlace`](../modules/oss_tools.md#ossinterlace)\>

渐进显示

**`Memberof`**

OssImage

___

### methodKeys

• **methodKeys**: `Partial`<`Record`<[`OssMethodsType`](../modules/oss_tools.md#ossmethodstype), `Record`<`string`, `string` \| `number`\>\>\> = `{}`

处理的方法参数对象

___

### originUrl

• `Private` **originUrl**: `string`

___

### quality

• **quality**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssQuality`](../interfaces/oss_tools.OssQuality.md)\>

设置质量

**`Memberof`**

OssImage

___

### resize

• **resize**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssResize`](../interfaces/oss_tools.OssResize.md)\>

设置尺寸

**`Memberof`**

OssImage

___

### rotate

• **rotate**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<`number`\>

旋转

**`Memberof`**

OssImage

___

### roundedCorners

• **roundedCorners**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssRoundedCorners`](../interfaces/oss_tools.OssRoundedCorners.md)\>

设置圆角半径

**`Memberof`**

OssImage

___

### sharpen

• **sharpen**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<`number`\>

设置锐化效果的强度

**`Memberof`**

OssImage

___

### watermark

• **watermark**: [`ApiHandler`](../interfaces/oss_tools.ApiHandler.md)<[`OssWatermark`](../interfaces/oss_tools.OssWatermark.md)\>

设置水印

**`Memberof`**

OssImage

## Accessors

### url

• `get` **url**(): `string`

获取处理后的链接

#### Returns

`string`

## Methods

### methodHandler

▸ `Private` **methodHandler**(`method`): (`key`: `any`, `value?`: `any`) => [`OssImage`](oss_tools.OssImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`OssMethodsType`](../modules/oss_tools.md#ossmethodstype) |

#### Returns

`fn`

▸ (`key?`, `value?`): [`OssImage`](oss_tools.OssImage.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

##### Returns

[`OssImage`](oss_tools.OssImage.md)
