# Module: oss-tools

## Table of contents

### Classes

- [OssImage](../wiki/oss-tools.OssImage)
- [Upload](../wiki/oss-tools.Upload)

### Interfaces

- [ApiHandler](../wiki/oss-tools.ApiHandler)
- [OssBlur](../wiki/oss-tools.OssBlur)
- [OssCircle](../wiki/oss-tools.OssCircle)
- [OssConfigModel](../wiki/oss-tools.OssConfigModel)
- [OssCrop](../wiki/oss-tools.OssCrop)
- [OssIndexcrop](../wiki/oss-tools.OssIndexcrop)
- [OssParams](../wiki/oss-tools.OssParams)
- [OssQuality](../wiki/oss-tools.OssQuality)
- [OssResize](../wiki/oss-tools.OssResize)
- [OssRoundedCorners](../wiki/oss-tools.OssRoundedCorners)
- [OssVideoParams](../wiki/oss-tools.OssVideoParams)
- [OssWatermark](../wiki/oss-tools.OssWatermark)
- [UploadFileItem](../wiki/oss-tools.UploadFileItem)
- [UploadFileOption](../wiki/oss-tools.UploadFileOption)
- [ValidateResult](../wiki/oss-tools.ValidateResult)

### Type Aliases

- [Method](../wiki/oss-tools#method)
- [OssAutoOrient](../wiki/oss-tools#ossautoorient)
- [OssBright](../wiki/oss-tools#ossbright)
- [OssContrast](../wiki/oss-tools#osscontrast)
- [OssFormat](../wiki/oss-tools#ossformat)
- [OssInterlace](../wiki/oss-tools#ossinterlace)
- [OssMethodsType](../wiki/oss-tools#ossmethodstype)
- [OssResizeMode](../wiki/oss-tools#ossresizemode)
- [OssRotate](../wiki/oss-tools#ossrotate)
- [OssSharpen](../wiki/oss-tools#osssharpen)

### Functions

- [ossImage](../wiki/oss-tools#ossimage)
- [ossVideo](../wiki/oss-tools#ossvideo)
- [validateFileCount](../wiki/oss-tools#validatefilecount)
- [validateFileSize](../wiki/oss-tools#validatefilesize)
- [validateFileType](../wiki/oss-tools#validatefiletype)

## Type Aliases

### Method

Ƭ **Method**: (`key`: `any`, `value?`: `any`) => [`OssImage`](../wiki/oss-tools.OssImage)

#### Type declaration

▸ (`key`, `value?`): [`OssImage`](../wiki/oss-tools.OssImage)

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

##### Returns

[`OssImage`](../wiki/oss-tools.OssImage)

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

### OssResizeMode

Ƭ **OssResizeMode**: ``"lfit"`` \| ``"mfit"`` \| ``"fill"`` \| ``"pad"`` \| ``"fixed"``

指定缩放的模式

- lfit: 等比缩放，缩放图限制为指定w与h的矩形内的最大图片。
- mfit：等比缩放，缩放图为延伸出指定w与h的矩形框外的最小图片。
- fill：将原图等比缩放为延伸出指定w与h的矩形框外的最小图片，之后将超出的部分进行居中裁剪。
- pad：将原图缩放为指定w与h的矩形内的最大图片，之后使用指定颜色居中填充空白部分。
- fixed：固定宽高，强制缩放。

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

▸ **ossImage**(`url`): [`OssImage`](../wiki/oss-tools.OssImage)

oss图片处理方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 需要处理的url |

#### Returns

[`OssImage`](../wiki/oss-tools.OssImage)

处理oss url类的实例

___

### ossVideo

▸ **ossVideo**(`url`, `params`): `string`

oss视频处理方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 需要处理的url |
| `params` | [`OssVideoParams`](../wiki/oss-tools.OssVideoParams) | 处理参数 |

#### Returns

`string`

___

### validateFileCount

▸ **validateFileCount**(`file`, `maxCount?`): `boolean`

校验文件数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` \| `File`[] | 检验文件 |
| `maxCount?` | `number` | 最大文件数 |

#### Returns

`boolean`

___

### validateFileSize

▸ **validateFileSize**(`file`, `maxSize?`): `boolean`

检验文件大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` \| `File`[] | 校验文件 |
| `maxSize?` | `number` | 最大size，如果不传或则传0表示不校验 |

#### Returns

`boolean`

___

### validateFileType

▸ **validateFileType**(`file`, `type?`): `boolean`

校验文件类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` \| `File`[] | 校验文件 |
| `type?` | `string` | 匹配的类型, 如果不传则表示不校验 |

#### Returns

`boolean`
