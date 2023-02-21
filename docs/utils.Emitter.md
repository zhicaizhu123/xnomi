# Interface: Emitter

[utils](../wiki/utils).Emitter

事件中心接口

## Table of contents

### Properties

- [all](../wiki/utils.Emitter#all)

### Methods

- [clear](../wiki/utils.Emitter#clear)
- [emit](../wiki/utils.Emitter#emit)
- [off](../wiki/utils.Emitter#off)
- [on](../wiki/utils.Emitter#on)

## Properties

### all

• **all**: [`EventHandlerMap`](../wiki/utils#eventhandlermap)

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
| `type` | [`EventType`](../wiki/utils#eventtype) |
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
| `type` | [`EventType`](../wiki/utils#eventtype) |
| `handler` | [`Handler`](../wiki/utils#handler)<`T`\> |

#### Returns

`void`

▸ **off**(`type`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"*"`` |
| `handler` | [`WildcardHandler`](../wiki/utils#wildcardhandler) |

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
| `type` | [`EventType`](../wiki/utils#eventtype) |
| `handler` | [`Handler`](../wiki/utils#handler)<`T`\> |

#### Returns

`void`

▸ **on**(`type`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"*"`` |
| `handler` | [`WildcardHandler`](../wiki/utils#wildcardhandler) |

#### Returns

`void`
