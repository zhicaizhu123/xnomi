# Module: ossImage

## Table of contents

### Classes

- [OssImage](../wiki/ossImage.OssImage)

### Interfaces

- [ApiHandler](../wiki/ossImage.ApiHandler)
- [OssBlur](../wiki/ossImage.OssBlur)
- [OssCircle](../wiki/ossImage.OssCircle)
- [OssCrop](../wiki/ossImage.OssCrop)
- [OssIndexcrop](../wiki/ossImage.OssIndexcrop)
- [OssQuality](../wiki/ossImage.OssQuality)
- [OssResize](../wiki/ossImage.OssResize)
- [OssRoundedCorners](../wiki/ossImage.OssRoundedCorners)
- [OssWatermark](../wiki/ossImage.OssWatermark)

### Type Aliases

- [Method](../wiki/ossImage#method)
- [OssAutoOrient](../wiki/ossImage#ossautoorient)
- [OssBright](../wiki/ossImage#ossbright)
- [OssContrast](../wiki/ossImage#osscontrast)
- [OssFormat](../wiki/ossImage#ossformat)
- [OssInterlace](../wiki/ossImage#ossinterlace)
- [OssMethodsType](../wiki/ossImage#ossmethodstype)
- [OssRotate](../wiki/ossImage#ossrotate)
- [OssSharpen](../wiki/ossImage#osssharpen)

### Functions

- [ossImage](../wiki/ossImage#ossimage)

## Type Aliases

### Method

Ƭ **Method**: (`key`: `any`, `value?`: `any`) => [`OssImage`](../wiki/ossImage.OssImage)

#### Type declaration

▸ (`key`, `value?`): [`OssImage`](../wiki/ossImage.OssImage)

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

##### Returns

[`OssImage`](../wiki/ossImage.OssImage)

___

### OssAutoOrient

Ƭ **OssAutoOrient**: ``0`` \| ``1``

指定图片是否进行自适应旋转。
- 0：保持原图方向，不进行自适应旋转。
- 1：将图片进行自适应旋转。

___

### OssBright

Ƭ **OssBright**: `number`

指定图片的亮度。
- [-100, 100]
- 取值＜0：降低图片亮度。
- 取值=0：不调整图片亮度。
- 取值＞0：提高图片亮度。

___

### OssContrast

Ƭ **OssContrast**: `number`

指定图片的对比度。
- [-100,100]
- 取值＜0：降低图片对比度
- 取值=0：维持原图对比度。
- 取值＞0：提高图片对比度。

___

### OssFormat

Ƭ **OssFormat**: ``"jpg"`` \| ``"png"`` \| ``"webp"`` \| ``"bmp"`` \| ``"gif"`` \| ``"tiff"``

格式转换

___

### OssInterlace

Ƭ **OssInterlace**: ``0`` \| ``1``

渐进显示
- 1 表示保存成渐进显示的 jpg 格式。
- 0 表示保存成普通的 jpg 格式。

___

### OssMethodsType

Ƭ **OssMethodsType**: ``"resize"`` \| ``"blur"`` \| ``"circle"`` \| ``"crop"`` \| ``"indexcrop"`` \| ``"rotate"`` \| ``"bright"`` \| ``"contrast"`` \| ``"sharpen"`` \| ``"format"`` \| ``"watermark"`` \| ``"interlace"`` \| ``"quality"`` \| ``"roundedCorners"`` \| ``"autoOrient"``

方法名称

___

### OssRotate

Ƭ **OssRotate**: `number`

图片按顺时针旋转的角度。
- [0,360] 默认值：0，表示不旋转。

___

### OssSharpen

Ƭ **OssSharpen**: `number`

设置锐化效果的强度。
- [50,399]
- 取值越大，图片越清晰，但过大的值可能会导致图片失真。为达到较优效果，推荐取值为100。

## Functions

### ossImage

▸ **ossImage**(`url`): [`OssImage`](../wiki/ossImage.OssImage)

oss图片处理方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 需要处理的url |

#### Returns

[`OssImage`](../wiki/ossImage.OssImage)

处理oss url类的实例
