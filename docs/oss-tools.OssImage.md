# Class: OssImage

[oss-tools](../wiki/oss-tools).OssImage

处理阿里云图片类

## Table of contents

### Constructors

- [constructor](../wiki/oss-tools.OssImage#constructor)

### Properties

- [autoOrient](../wiki/oss-tools.OssImage#autoorient)
- [blur](../wiki/oss-tools.OssImage#blur)
- [bright](../wiki/oss-tools.OssImage#bright)
- [circle](../wiki/oss-tools.OssImage#circle)
- [contrast](../wiki/oss-tools.OssImage#contrast)
- [crop](../wiki/oss-tools.OssImage#crop)
- [format](../wiki/oss-tools.OssImage#format)
- [indexcrop](../wiki/oss-tools.OssImage#indexcrop)
- [interlace](../wiki/oss-tools.OssImage#interlace)
- [methodKeys](../wiki/oss-tools.OssImage#methodkeys)
- [originUrl](../wiki/oss-tools.OssImage#originurl)
- [quality](../wiki/oss-tools.OssImage#quality)
- [resize](../wiki/oss-tools.OssImage#resize)
- [rotate](../wiki/oss-tools.OssImage#rotate)
- [roundedCorners](../wiki/oss-tools.OssImage#roundedcorners)
- [sharpen](../wiki/oss-tools.OssImage#sharpen)
- [watermark](../wiki/oss-tools.OssImage#watermark)

### Accessors

- [url](../wiki/oss-tools.OssImage#url)

### Methods

- [methodHandler](../wiki/oss-tools.OssImage#methodhandler)

## Constructors

### constructor

• **new OssImage**(`originUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `originUrl` | `string` |

## Properties

### autoOrient

• **autoOrient**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssAutoOrient`](../wiki/oss-tools#ossautoorient)\>

指定图片是否进行自适应旋转

**`Memberof`**

OssImage

___

### blur

• **blur**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssBlur`](../wiki/oss-tools.OssBlur)\>

设置模糊度

**`Memberof`**

OssImage

___

### bright

• **bright**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<`number`\>

指定图片的亮度

**`Memberof`**

OssImage

___

### circle

• **circle**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssCircle`](../wiki/oss-tools.OssCircle)\>

设置圆形

**`Memberof`**

OssImage

___

### contrast

• **contrast**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<`number`\>

指定图片的亮度

**`Memberof`**

OssImage

___

### crop

• **crop**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssCrop`](../wiki/oss-tools.OssCrop)\>

截取

**`Memberof`**

OssImage

___

### format

• **format**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssFormat`](../wiki/oss-tools#ossformat)\>

格式转换

**`Memberof`**

OssImage

___

### indexcrop

• **indexcrop**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssIndexcrop`](../wiki/oss-tools.OssIndexcrop)\>

切割

**`Memberof`**

OssImage

___

### interlace

• **interlace**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssInterlace`](../wiki/oss-tools#ossinterlace)\>

渐进显示

**`Memberof`**

OssImage

___

### methodKeys

• **methodKeys**: `Partial`<`Record`<[`OssMethodsType`](../wiki/oss-tools#ossmethodstype), `Record`<`string`, `string` \| `number`\>\>\> = `{}`

处理的方法参数对象

___

### originUrl

• `Private` **originUrl**: `string`

___

### quality

• **quality**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssQuality`](../wiki/oss-tools.OssQuality)\>

设置质量

**`Memberof`**

OssImage

___

### resize

• **resize**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssResize`](../wiki/oss-tools.OssResize)\>

设置尺寸

**`Memberof`**

OssImage

___

### rotate

• **rotate**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<`number`\>

旋转

**`Memberof`**

OssImage

___

### roundedCorners

• **roundedCorners**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssRoundedCorners`](../wiki/oss-tools.OssRoundedCorners)\>

设置圆角半径

**`Memberof`**

OssImage

___

### sharpen

• **sharpen**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<`number`\>

设置锐化效果的强度

**`Memberof`**

OssImage

___

### watermark

• **watermark**: [`ApiHandler`](../wiki/oss-tools.ApiHandler)<[`OssWatermark`](../wiki/oss-tools.OssWatermark)\>

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

▸ `Private` **methodHandler**(`method`): (`key`: `any`, `value?`: `any`) => [`OssImage`](../wiki/oss-tools.OssImage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`OssMethodsType`](../wiki/oss-tools#ossmethodstype) |

#### Returns

`fn`

▸ (`key?`, `value?`): [`OssImage`](../wiki/oss-tools.OssImage)

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

##### Returns

[`OssImage`](../wiki/oss-tools.OssImage)
