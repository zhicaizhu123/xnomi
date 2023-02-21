# Interface: OptionsModel

[utils](../wiki/utils).OptionsModel

日历类配置项

## Table of contents

### Properties

- [formatValue](../wiki/utils.OptionsModel#formatvalue)
- [formatWeek](../wiki/utils.OptionsModel#formatweek)
- [rows](../wiki/utils.OptionsModel#rows)
- [startInSunday](../wiki/utils.OptionsModel#startinsunday)
- [type](../wiki/utils.OptionsModel#type)

## Properties

### formatValue

• **formatValue**: (`value`: `number`, `date`: `Date`) => `string` \| `number`

#### Type declaration

▸ (`value`, `date`): `string` \| `number`

格式化展示日期

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `date` | `Date` |

##### Returns

`string` \| `number`

___

### formatWeek

• **formatWeek**: (`week`: `string`) => `string`

#### Type declaration

▸ (`week`): `string`

格式化星期

##### Parameters

| Name | Type |
| :------ | :------ |
| `week` | `string` |

##### Returns

`string`

___

### rows

• **rows**: `boolean`

是否分割成多行

___

### startInSunday

• **startInSunday**: `boolean`

第一列是否为星期日，否则为星期一

___

### type

• **type**: ``"month"`` \| ``"week"``

日历类型
