[xnomi工具库](../README.md) / [Modules](../modules.md) / [utils](../modules/utils.md) / Cookie

# Class: Cookie

[utils](../modules/utils.md).Cookie

指定命名空间的cookie类

## Table of contents

### cache Constructors

- [constructor](utils.Cookie.md#constructor)

### Properties

- [namespace](utils.Cookie.md#namespace)

### cache Methods

- [clearCookie](utils.Cookie.md#clearcookie)
- [getCookie](utils.Cookie.md#getcookie)
- [removeCookie](utils.Cookie.md#removecookie)
- [setCookie](utils.Cookie.md#setcookie)

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
