[xnomi工具库](../README.md) / [Modules](../modules.md) / [utils](../modules/utils.md) / Storage

# Class: Storage

[utils](../modules/utils.md).Storage

指定命名空间的loalStorage/sessionStorage类

## Table of contents

### Constructors

- [constructor](utils.Storage.md#constructor)

### Properties

- [namespace](utils.Storage.md#namespace)
- [state](utils.Storage.md#state)
- [store](utils.Storage.md#store)

### cache Methods

- [clear](utils.Storage.md#clear)
- [getItem](utils.Storage.md#getitem)
- [init](utils.Storage.md#init)
- [removeItem](utils.Storage.md#removeitem)
- [saveState](utils.Storage.md#savestate)
- [setItem](utils.Storage.md#setitem)

## Constructors

### constructor

• **new Storage**(`type`, `namespace`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`StorageType`](../modules/utils.md#storagetype) |
| `namespace` | `string` |

## Properties

### namespace

• `Private` **namespace**: `string`

___

### state

• `Private` **state**: `Object`

#### Index signature

▪ [x: `string`]: `any`

___

### store

• `Private` **store**: `Storage`

## cache Methods

### clear

▸ **clear**(): `void`

清空命名空间下的值

#### Returns

`void`

___

### getItem

▸ **getItem**(`key`): `any`

获取给定key的值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 获取命名空间下字段key对应的值 |

#### Returns

`any`

返回key对应的值

___

### init

▸ **init**(): `void`

初始化

#### Returns

`void`

___

### removeItem

▸ **removeItem**(`key`): `Object`

移除给定key的值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 命名空间下字段key对应的值 |

#### Returns

`Object`

返回当前命名空间的数据

___

### saveState

▸ **saveState**(): `void`

使用命名空间保存到本地存储

#### Returns

`void`

___

### setItem

▸ **setItem**(`key`, `data`): `Object`

保存值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 保存字段key |
| `data` | `any` | 保存字段value |

#### Returns

`Object`

返回当前命名空间的数据
