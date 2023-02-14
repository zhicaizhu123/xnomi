# Module: color 颜色

## Table of contents

### Functions

- [calculateBestTextColor](../wiki/color%20%E9%A2%9C%E8%89%B2#calculatebesttextcolor)
- [colorIsDark](../wiki/color%20%E9%A2%9C%E8%89%B2#colorisdark)
- [darken](../wiki/color%20%E9%A2%9C%E8%89%B2#darken)
- [hexToRGB](../wiki/color%20%E9%A2%9C%E8%89%B2#hextorgb)
- [isHexColor](../wiki/color%20%E9%A2%9C%E8%89%B2#ishexcolor)
- [lighten](../wiki/color%20%E9%A2%9C%E8%89%B2#lighten)
- [rgbToHex](../wiki/color%20%E9%A2%9C%E8%89%B2#rgbtohex)

## Functions

### calculateBestTextColor

▸ **calculateBestTextColor**(`hexColor`): ``"#000000"`` \| ``"#FFFFFF"``

根据与背景的对比，确定最佳文本颜色(黑色或白色)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hexColor` | `string` | 颜色 |

#### Returns

``"#000000"`` \| ``"#FFFFFF"``

___

### colorIsDark

▸ **colorIsDark**(`color`): `undefined` \| `boolean`

是否为暗色

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | 判断颜色 |

#### Returns

`undefined` \| `boolean`

___

### darken

▸ **darken**(`color`, `amount`): `string`

在给定通过百分比的情况下加深HEX颜色

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | 要加工的颜色 |
| `amount` | `number` | 改变颜色的量由 |

#### Returns

`string`

经过处理的颜色的HEX表示

___

### hexToRGB

▸ **hexToRGB**(`hex`): `string`

将十六进制颜色转换为它的RGB表示

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | 要变换的颜色 |

#### Returns

`string`

传递的颜色的RGB表示

___

### isHexColor

▸ **isHexColor**(`color`): `boolean`

判断是否 十六进制颜色值. 输入形式可为 #fff000 #f00

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | 十六进制颜色值 |

#### Returns

`boolean`

___

### lighten

▸ **lighten**(`color`, `amount`): `string`

根据通过的百分比来减轻6 char HEX颜色

**`Export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | 改变颜色 |
| `amount` | `number` | 改变颜色的量由 |

#### Returns

`string`

处理过的颜色表示为HEX

___

### rgbToHex

▸ **rgbToHex**(`r`, `g`, `b`): `string`

RGB 颜色值转换为 十六进制颜色值. r, g, 和 b 需要在 [0, 255] 范围内

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | 红区 |
| `g` | `number` | 绿区 |
| `b` | `number` | 蓝区 |

#### Returns

`string`

类似#ff00ff
