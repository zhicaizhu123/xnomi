# Module: is

## Table of contents

### Functions

- [is](../wiki/is#is)
- [isArray](../wiki/is#isarray)
- [isBoolean](../wiki/is#isboolean)
- [isDate](../wiki/is#isdate)
- [isDef](../wiki/is#isdef)
- [isElement](../wiki/is#iselement)
- [isEmpty](../wiki/is#isempty)
- [isFunction](../wiki/is#isfunction)
- [isNull](../wiki/is#isnull)
- [isNullAndUnDef](../wiki/is#isnullandundef)
- [isNullOrUnDef](../wiki/is#isnullorundef)
- [isNumber](../wiki/is#isnumber)
- [isObject](../wiki/is#isobject)
- [isPromise](../wiki/is#ispromise)
- [isRegExp](../wiki/is#isregexp)
- [isString](../wiki/is#isstring)
- [isUnDef](../wiki/is#isundef)
- [isWindow](../wiki/is#iswindow)

## Functions

### is

▸ **is**(`val`, `type`): `boolean`

是否为指定类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |
| `type` | `string` | 类型 |

#### Returns

`boolean`

___

### isArray

▸ **isArray**(`val`): val is any[]

是否为数组

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `any` | 要判断的值 |

#### Returns

val is any[]

{val is Array<any>}

___

### isBoolean

▸ **isBoolean**(`val`): val is boolean

是否为布偶值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is boolean

{val is boolean}

___

### isDate

▸ **isDate**(`val`): val is Date

是否为日期格式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is Date

{val is Date}

___

### isDef

▸ **isDef**<`T`\>(`val?`): val is T

是否已经定义

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val?` | `T` | 要判断的值 |

#### Returns

val is T

{val is T}

___

### isElement

▸ **isElement**(`val`): val is Element

是否为html元素

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is Element

{val is Element}

___

### isEmpty

▸ **isEmpty**<`T`\>(`val`): val is T

是否为空数据
- 空数组
- 空字符串
- 空map
- 空set
- 空对象，不包含null

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `T` | 要判断的值 |

#### Returns

val is T

{val is T}

___

### isFunction

▸ **isFunction**(`val`): val is Function

是否为Function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is Function

{val is Function}

___

### isNull

▸ **isNull**(`val`): val is null

是否为null

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is null

{val is null}

___

### isNullAndUnDef

▸ **isNullAndUnDef**(`val`): val is undefined \| null

是否为undefined或null

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is undefined \| null

{(val is null | undefined)}

___

### isNullOrUnDef

▸ **isNullOrUnDef**(`val`): val is undefined \| null

是否为undefined或null

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is undefined \| null

{(val is null | undefined)}

___

### isNumber

▸ **isNumber**(`val`): val is number

是否为Number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is number

{val is number}

___

### isObject

▸ **isObject**(`val`): val is Record<any, any\>

是否为对象，不包含null

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `any` | 要判断的值 |

#### Returns

val is Record<any, any\>

{val is Record<any, any>}

___

### isPromise

▸ **isPromise**<`T`\>(`val`): val is Promise<T\>

是否为Promise

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is Promise<T\>

{val is Promise<T>}

___

### isRegExp

▸ **isRegExp**(`val`): val is RegExp

是否为正则表达式

**`Export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is RegExp

{val is RegExp}

___

### isString

▸ **isString**(`val`): val is string

是否为字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is string

{val is string}

___

### isUnDef

▸ **isUnDef**<`T`\>(`val?`): val is T

是否为未定义

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val?` | `T` | 要判断的值 |

#### Returns

val is T

{val is T}

___

### isWindow

▸ **isWindow**(`val`): val is Window

是否有window对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `any` | 要判断的值 |

#### Returns

val is Window

{val is Window}
