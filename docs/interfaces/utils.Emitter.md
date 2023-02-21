[xnomi工具库](../README.md) / [Modules](../modules.md) / [utils](../modules/utils.md) / Emitter

# Interface: Emitter

[utils](../modules/utils.md).Emitter

事件中心接口

## Table of contents

### Properties

- [all](utils.Emitter.md#all)

### Methods

- [clear](utils.Emitter.md#clear)
- [emit](utils.Emitter.md#emit)
- [off](utils.Emitter.md#off)
- [on](utils.Emitter.md#on)

## Properties

### all

• **all**: [`EventHandlerMap`](../modules/utils.md#eventhandlermap)

## Methods

### clear

▸ **clear**(): `void`

清空事件

#### Returns

`void`

___

### emit

▸ **emit**<`T`\>(`type`, `event?`): `void`

触发事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EventType`](../modules/utils.md#eventtype) |
| `event?` | `T` |

#### Returns

`void`

▸ **emit**(`type`, `event?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"*"`` |
| `event?` | `any` |

#### Returns

`void`

___

### off

▸ **off**<`T`\>(`type`, `handler`): `void`

注销事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EventType`](../modules/utils.md#eventtype) |
| `handler` | [`Handler`](../modules/utils.md#handler)<`T`\> |

#### Returns

`void`

▸ **off**(`type`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"*"`` |
| `handler` | [`WildcardHandler`](../modules/utils.md#wildcardhandler) |

#### Returns

`void`

___

### on

▸ **on**<`T`\>(`type`, `handler`): `void`

监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EventType`](../modules/utils.md#eventtype) |
| `handler` | [`Handler`](../modules/utils.md#handler)<`T`\> |

#### Returns

`void`

▸ **on**(`type`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"*"`` |
| `handler` | [`WildcardHandler`](../modules/utils.md#wildcardhandler) |

#### Returns

`void`
