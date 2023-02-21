# Class: Calendar

[utils](../wiki/utils).Calendar

## Table of contents

### time Constructors

- [constructor](../wiki/utils.Calendar#constructor)

### Properties

- [currentDate](../wiki/utils.Calendar#currentdate)
- [days](../wiki/utils.Calendar#days)
- [options](../wiki/utils.Calendar#options)
- [weeks](../wiki/utils.Calendar#weeks)

### time Methods

- [createCurrentMonthDays](../wiki/utils.Calendar#createcurrentmonthdays)
- [createDay](../wiki/utils.Calendar#createday)
- [createNextMonthDays](../wiki/utils.Calendar#createnextmonthdays)
- [createPrevMonthDays](../wiki/utils.Calendar#createprevmonthdays)
- [formatTime](../wiki/utils.Calendar#formattime)
- [getCalendar](../wiki/utils.Calendar#getcalendar)
- [getCalendarInToday](../wiki/utils.Calendar#getcalendarintoday)
- [getCalendarWeeks](../wiki/utils.Calendar#getcalendarweeks)
- [getDateInfo](../wiki/utils.Calendar#getdateinfo)
- [getDay](../wiki/utils.Calendar#getday)
- [getDayCount](../wiki/utils.Calendar#getdaycount)
- [getFirstDayIndex](../wiki/utils.Calendar#getfirstdayindex)
- [getNextCalendar](../wiki/utils.Calendar#getnextcalendar)
- [getPrevCalendar](../wiki/utils.Calendar#getprevcalendar)
- [setCalendar](../wiki/utils.Calendar#setcalendar)

## time Constructors

### constructor

• **new Calendar**(`config?`)

创建Calendar实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Partial`<[`OptionsModel`](../wiki/utils.OptionsModel)\> | 配置项 |

## Properties

### currentDate

• `Private` **currentDate**: `Date`

___

### days

• `Private` **days**: [`DaysModel`](../wiki/utils.DaysModel)[] = `[]`

___

### options

• `Private` **options**: [`OptionsModel`](../wiki/utils.OptionsModel)

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

▸ `Private` **createDay**(`date?`, `type`): [`DaysModel`](../wiki/utils.DaysModel)

创建日历元素

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `Date` | - |
| `type` | ``0`` \| ``1`` \| ``-1`` | * -1: 上一个月 * 0: 当前月 * 1: 下一个月 |

#### Returns

[`DaysModel`](../wiki/utils.DaysModel)

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

▸ **getCalendar**(`date?`): [`DaysModel`](../wiki/utils.DaysModel)[][]

获取日历信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

[`DaysModel`](../wiki/utils.DaysModel)[][]

___

### getCalendarInToday

▸ **getCalendarInToday**(): [`DaysModel`](../wiki/utils.DaysModel)[][]

获取今天所出日历

#### Returns

[`DaysModel`](../wiki/utils.DaysModel)[][]

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

▸ **getDay**(`date?`): [`DaysModel`](../wiki/utils.DaysModel)

获取指定日期的日历信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

[`DaysModel`](../wiki/utils.DaysModel)

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

▸ **getNextCalendar**(): [`DaysModel`](../wiki/utils.DaysModel)[][]

获取下一个日历信息

#### Returns

[`DaysModel`](../wiki/utils.DaysModel)[][]

___

### getPrevCalendar

▸ **getPrevCalendar**(): [`DaysModel`](../wiki/utils.DaysModel)[][]

获取上一个日历信息

#### Returns

[`DaysModel`](../wiki/utils.DaysModel)[][]

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
