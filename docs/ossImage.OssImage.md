# Class: OssImage

[ossImage](../wiki/ossImage).OssImage

处理阿里云图片类

## Table of contents

### Constructors

- [constructor](../wiki/ossImage.OssImage#constructor)

### Properties

- [autoOrient](../wiki/ossImage.OssImage#autoorient)
- [blur](../wiki/ossImage.OssImage#blur)
- [bright](../wiki/ossImage.OssImage#bright)
- [circle](../wiki/ossImage.OssImage#circle)
- [contrast](../wiki/ossImage.OssImage#contrast)
- [crop](../wiki/ossImage.OssImage#crop)
- [format](../wiki/ossImage.OssImage#format)
- [indexcrop](../wiki/ossImage.OssImage#indexcrop)
- [interlace](../wiki/ossImage.OssImage#interlace)
- [methodKeys](../wiki/ossImage.OssImage#methodkeys)
- [originUrl](../wiki/ossImage.OssImage#originurl)
- [quality](../wiki/ossImage.OssImage#quality)
- [resize](../wiki/ossImage.OssImage#resize)
- [rotate](../wiki/ossImage.OssImage#rotate)
- [roundedCorners](../wiki/ossImage.OssImage#roundedcorners)
- [sharpen](../wiki/ossImage.OssImage#sharpen)
- [watermark](../wiki/ossImage.OssImage#watermark)

### Accessors

- [url](../wiki/ossImage.OssImage#url)

### Methods

- [methodHandler](../wiki/ossImage.OssImage#methodhandler)

## Constructors

### constructor

• **new OssImage**(`originUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `originUrl` | `string` |

## Properties

### autoOrient

• **autoOrient**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssAutoOrient`](../wiki/ossImage#ossautoorient)\>

指定图片是否进行自适应旋转

**`Memberof`**

OssImage

___

### blur

• **blur**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssBlur`](../wiki/ossImage.OssBlur)\>

设置模糊度

**`Memberof`**

OssImage

___

### bright

• **bright**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<`number`\>

指定图片的亮度

**`Memberof`**

OssImage

___

### circle

• **circle**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssCircle`](../wiki/ossImage.OssCircle)\>

设置圆形

**`Memberof`**

OssImage

___

### contrast

• **contrast**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<`number`\>

指定图片的亮度

**`Memberof`**

OssImage

___

### crop

• **crop**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssCrop`](../wiki/ossImage.OssCrop)\>

截取

**`Memberof`**

OssImage

___

### format

• **format**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssFormat`](../wiki/ossImage#ossformat)\>

格式转换

**`Memberof`**

OssImage

___

### indexcrop

• **indexcrop**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssIndexcrop`](../wiki/ossImage.OssIndexcrop)\>

切割

**`Memberof`**

OssImage

___

### interlace

• **interlace**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssInterlace`](../wiki/ossImage#ossinterlace)\>

渐进显示

**`Memberof`**

OssImage

___

### methodKeys

• **methodKeys**: `Recordable`<`any`\> = `{}`

处理的方法参数对象

___

### originUrl

• `Private` **originUrl**: `string`

___

### quality

• **quality**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssQuality`](../wiki/ossImage.OssQuality)\>

设置质量

**`Memberof`**

OssImage

___

### resize

• **resize**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssResize`](../wiki/ossImage.OssResize)\>

设置尺寸

**`Memberof`**

OssImage

___

### rotate

• **rotate**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<`number`\>

旋转

**`Memberof`**

OssImage

___

### roundedCorners

• **roundedCorners**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssRoundedCorners`](../wiki/ossImage.OssRoundedCorners)\>

设置圆角半径

**`Memberof`**

OssImage

___

### sharpen

• **sharpen**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<`number`\>

设置锐化效果的强度

**`Memberof`**

OssImage

___

### watermark

• **watermark**: [`ApiHandler`](../wiki/ossImage.ApiHandler)<[`OssWatermark`](../wiki/ossImage.OssWatermark)\>

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

▸ `Private` **methodHandler**(`method`): (`key`: `any`, `value?`: `any`) => [`OssImage`](../wiki/ossImage.OssImage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`OssMethodsType`](../wiki/ossImage#ossmethodstype) |

#### Returns

`fn`

▸ (`key?`, `value?`): [`OssImage`](../wiki/ossImage.OssImage)

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

##### Returns

[`OssImage`](../wiki/ossImage.OssImage)
