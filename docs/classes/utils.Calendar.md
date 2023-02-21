[xnomi工具库](../README.md) / [Modules](../modules.md) / [utils](../modules/utils.md) / Calendar

# Class: Calendar

[utils](../modules/utils.md).Calendar

## Table of contents

### time Constructors

- [constructor](utils.Calendar.md#constructor)

### Properties

- [currentDate](utils.Calendar.md#currentdate)
- [days](utils.Calendar.md#days)
- [options](utils.Calendar.md#options)
- [weeks](utils.Calendar.md#weeks)

### time Methods

- [createCurrentMonthDays](utils.Calendar.md#createcurrentmonthdays)
- [createDay](utils.Calendar.md#createday)
- [createNextMonthDays](utils.Calendar.md#createnextmonthdays)
- [createPrevMonthDays](utils.Calendar.md#createprevmonthdays)
- [formatTime](utils.Calendar.md#formattime)
- [getCalendar](utils.Calendar.md#getcalendar)
- [getCalendarInToday](utils.Calendar.md#getcalendarintoday)
- [getCalendarWeeks](utils.Calendar.md#getcalendarweeks)
- [getDateInfo](utils.Calendar.md#getdateinfo)
- [getDay](utils.Calendar.md#getday)
- [getDayCount](utils.Calendar.md#getdaycount)
- [getFirstDayIndex](utils.Calendar.md#getfirstdayindex)
- [getNextCalendar](utils.Calendar.md#getnextcalendar)
- [getPrevCalendar](utils.Calendar.md#getprevcalendar)
- [setCalendar](utils.Calendar.md#setcalendar)

## time Constructors

### constructor

• **new Calendar**(`config?`)

创建Calendar实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Partial`<[`OptionsModel`](../interfaces/utils.OptionsModel.md)\> | 配置项 |

## Properties

### currentDate

• `Private` **currentDate**: `Date`

___

### days

• `Private` **days**: [`DaysModel`](../interfaces/utils.DaysModel.md)[] = `[]`

___

### options

• `Private` **options**: [`OptionsModel`](../interfaces/utils.OptionsModel.md)

___

### weeks

• `Private` **weeks**: `string`[]

## time Methods

### createCurrentMonthDays

▸ `Private` **createCurrentMonthDays**(`date?`): `void`

生成当前月日子信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

`void`

___

### createDay

▸ `Private` **createDay**(`date?`, `type`): [`DaysModel`](../interfaces/utils.DaysModel.md)

创建日历元素

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `Date` | - |
| `type` | ``0`` \| ``1`` \| ``-1`` | * -1: 上一个月 * 0: 当前月 * 1: 下一个月 |

#### Returns

[`DaysModel`](../interfaces/utils.DaysModel.md)

{DaysModel}

___

### createNextMonthDays

▸ `Private` **createNextMonthDays**(`date?`): `void`

生成下个月日子信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

`void`

___

### createPrevMonthDays

▸ `Private` **createPrevMonthDays**(`date?`): `void`

生成上个月日子信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

`void`

___

### formatTime

▸ `Private` **formatTime**(`val`): `string`

格式化日期

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`string`

___

### getCalendar

▸ **getCalendar**(`date?`): [`DaysModel`](../interfaces/utils.DaysModel.md)[][]

获取日历信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

[`DaysModel`](../interfaces/utils.DaysModel.md)[][]

___

### getCalendarInToday

▸ **getCalendarInToday**(): [`DaysModel`](../interfaces/utils.DaysModel.md)[][]

获取今天所出日历

#### Returns

[`DaysModel`](../interfaces/utils.DaysModel.md)[][]

___

### getCalendarWeeks

▸ **getCalendarWeeks**(): `string`[]

获取星期列表

#### Returns

`string`[]

___

### getDateInfo

▸ `Private` **getDateInfo**(`date?`): `Object`

获取日期信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `day` | `number` |
| `month` | `number` |
| `week` | `number` |
| `year` | `number` |

___

### getDay

▸ **getDay**(`date?`): [`DaysModel`](../interfaces/utils.DaysModel.md)

获取指定日期的日历信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

[`DaysModel`](../interfaces/utils.DaysModel.md)

___

### getDayCount

▸ `Private` **getDayCount**(`date?`): `number`

获取指定年月的天数

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

`number`

___

### getFirstDayIndex

▸ `Private` **getFirstDayIndex**(`date?`): `number`

获取指定年月的第一天是星期几

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

`number`

___

### getNextCalendar

▸ **getNextCalendar**(): [`DaysModel`](../interfaces/utils.DaysModel.md)[][]

获取下一个日历信息

#### Returns

[`DaysModel`](../interfaces/utils.DaysModel.md)[][]

___

### getPrevCalendar

▸ **getPrevCalendar**(): [`DaysModel`](../interfaces/utils.DaysModel.md)[][]

获取上一个日历信息

#### Returns

[`DaysModel`](../interfaces/utils.DaysModel.md)[][]

___

### setCalendar

▸ **setCalendar**(`date?`): `void`

设置日历

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

`void`
