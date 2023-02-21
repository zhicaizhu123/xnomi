# Class: Cookie

[utils](../wiki/utils).Cookie

指定命名空间的cookie类

## Table of contents

### cache Constructors

- [constructor](../wiki/utils.Cookie#constructor)

### Properties

- [namespace](../wiki/utils.Cookie#namespace)

### cache Methods

- [clearCookie](../wiki/utils.Cookie#clearcookie)
- [getCookie](../wiki/utils.Cookie#getcookie)
- [removeCookie](../wiki/utils.Cookie#removecookie)
- [setCookie](../wiki/utils.Cookie#setcookie)

## cache Constructors

### constructor

• **new Cookie**(`namespace`)

创建一个Cookie实例。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `any` | 命名空间 |

## Properties

### namespace

• `Private` **namespace**: `string`

## cache Methods

### clearCookie

▸ **clearCookie**(`options?`): `void`

清空当前命名空间的cookie

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | cookie的配置项 |

#### Returns

`void`

___

### getCookie

▸ **getCookie**(`key`): `string`

获取当前命名空间的cookie值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | key值 |

#### Returns

`string`

___

### removeCookie

▸ **removeCookie**(`key`, `options?`): `void`

移除当前命名空间的cookie值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 键值 |
| `options?` | `any` | cookie的配置项 |

#### Returns

`void`

___

### setCookie

▸ **setCookie**(`key`, `value`, `options?`): `void`

设置当前命名空间的cookie值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 键值 |
| `value` | `string` | 设置值 |
| `options?` | `any` | cookie的配置项 |

#### Returns

`void`
