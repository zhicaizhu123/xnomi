# Class: Calendar

[calendar](../wiki/calendar).Calendar

## Table of contents

### Constructors

- [constructor](../wiki/calendar.Calendar#constructor)

### Properties

- [currentDate](../wiki/calendar.Calendar#currentdate)
- [days](../wiki/calendar.Calendar#days)
- [options](../wiki/calendar.Calendar#options)
- [weeks](../wiki/calendar.Calendar#weeks)

### Methods

- [createCurrentMonthDays](../wiki/calendar.Calendar#createcurrentmonthdays)
- [createDay](../wiki/calendar.Calendar#createday)
- [createNextMonthDays](../wiki/calendar.Calendar#createnextmonthdays)
- [createPrevMonthDays](../wiki/calendar.Calendar#createprevmonthdays)
- [formatTime](../wiki/calendar.Calendar#formattime)
- [getCalendar](../wiki/calendar.Calendar#getcalendar)
- [getCalendarInToday](../wiki/calendar.Calendar#getcalendarintoday)
- [getCalendarWeeks](../wiki/calendar.Calendar#getcalendarweeks)
- [getDateInfo](../wiki/calendar.Calendar#getdateinfo)
- [getDay](../wiki/calendar.Calendar#getday)
- [getDayCount](../wiki/calendar.Calendar#getdaycount)
- [getFirstDayIndex](../wiki/calendar.Calendar#getfirstdayindex)
- [getNextCalendar](../wiki/calendar.Calendar#getnextcalendar)
- [getPrevCalendar](../wiki/calendar.Calendar#getprevcalendar)
- [setCalendar](../wiki/calendar.Calendar#setcalendar)

## Constructors

### constructor

• **new Calendar**(`config?`)

创建Calendar实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Partial`<`OptionsModel`\> | 配置项 |

## Properties

### currentDate

• `Private` **currentDate**: `Date`

___

### days

• `Private` **days**: [`DaysModel`](../wiki/calendar.DaysModel)[] = `[]`

___

### options

• `Private` **options**: `OptionsModel`

___

### weeks

• `Private` **weeks**: `string`[]

## Methods

### createCurrentMonthDays

▸ `Private` **createCurrentMonthDays**(`date?`): `void`

生成当前月日子信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`void`

___

### createDay

▸ `Private` **createDay**(`date?`, `type`): [`DaysModel`](../wiki/calendar.DaysModel)

创建日历元素

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `type` | ``0`` \| ``1`` \| ``-1`` |

#### Returns

[`DaysModel`](../wiki/calendar.DaysModel)

___

### createNextMonthDays

▸ `Private` **createNextMonthDays**(`date?`): `void`

生成下个月日子信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`void`

___

### createPrevMonthDays

▸ `Private` **createPrevMonthDays**(`date?`): `void`

生成上个月日子信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`void`

___

### formatTime

▸ `Private` **formatTime**(`val`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

#### Returns

`string`

___

### getCalendar

▸ **getCalendar**(`date?`): [`DaysModel`](../wiki/calendar.DaysModel)[][]

获取日历信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

[`DaysModel`](../wiki/calendar.DaysModel)[][]

___

### getCalendarInToday

▸ **getCalendarInToday**(): [`DaysModel`](../wiki/calendar.DaysModel)[][]

获取今天所出日历

#### Returns

[`DaysModel`](../wiki/calendar.DaysModel)[][]

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
| `date` | `Date` |

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

▸ **getDay**(`date?`): [`DaysModel`](../wiki/calendar.DaysModel)

获取指定日期的日历信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

[`DaysModel`](../wiki/calendar.DaysModel)

___

### getDayCount

▸ `Private` **getDayCount**(`date?`): `number`

获取指定年月的天数

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`number`

___

### getFirstDayIndex

▸ `Private` **getFirstDayIndex**(`date?`): `number`

获取指定年月的第一天是星期几

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`number`

___

### getNextCalendar

▸ **getNextCalendar**(): [`DaysModel`](../wiki/calendar.DaysModel)[][]

获取下一个日历信息

#### Returns

[`DaysModel`](../wiki/calendar.DaysModel)[][]

___

### getPrevCalendar

▸ **getPrevCalendar**(): [`DaysModel`](../wiki/calendar.DaysModel)[][]

获取上一个日历信息

#### Returns

[`DaysModel`](../wiki/calendar.DaysModel)[][]

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
