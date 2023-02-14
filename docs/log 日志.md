# Module: log 日志

## Table of contents

### Functions

- [configGlobalConsole](../wiki/log%20%E6%97%A5%E5%BF%97#configglobalconsole)
- [coverSystemConsole](../wiki/log%20%E6%97%A5%E5%BF%97#coversystemconsole)
- [debug](../wiki/log%20%E6%97%A5%E5%BF%97#debug)
- [error](../wiki/log%20%E6%97%A5%E5%BF%97#error)
- [log](../wiki/log%20%E6%97%A5%E5%BF%97#log)
- [moduleDebug](../wiki/log%20%E6%97%A5%E5%BF%97#moduledebug)
- [moduleError](../wiki/log%20%E6%97%A5%E5%BF%97#moduleerror)
- [moduleLog](../wiki/log%20%E6%97%A5%E5%BF%97#modulelog)
- [moduleWarn](../wiki/log%20%E6%97%A5%E5%BF%97#modulewarn)
- [resetConfig](../wiki/log%20%E6%97%A5%E5%BF%97#resetconfig)
- [warn](../wiki/log%20%E6%97%A5%E5%BF%97#warn)

## Functions

### configGlobalConsole

▸ **configGlobalConsole**(`config`): `void`

配置全局信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `GlobalConsoleConfigModel` | 配置信息 |

#### Returns

`void`

___

### coverSystemConsole

▸ **coverSystemConsole**(`isCover`): `void`

设置是否覆盖全局的console对象的方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isCover` | `boolean` | 是否覆盖 |

#### Returns

`void`

___

### debug

▸ **debug**(`...args`): `void`

调试日志

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

___

### error

▸ **error**(`...args`): `void`

错误日志

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

___

### log

▸ **log**(`...args`): `void`

普通日志

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

___

### moduleDebug

▸ **moduleDebug**(`moduleName`, `...args`): `void`

错误日志（定制模块名称）

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

___

### moduleError

▸ **moduleError**(`moduleName`, `...args`): `void`

调试日志（定制模块名称）

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

___

### moduleLog

▸ **moduleLog**(`moduleName`, `...args`): `void`

普通日志（定制模块名称）

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

___

### moduleWarn

▸ **moduleWarn**(`moduleName`, `...args`): `void`

警告日志（定制模块名称）

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

___

### resetConfig

▸ **resetConfig**(): `void`

还原全局配置信息

#### Returns

`void`

___

### warn

▸ **warn**(`...args`): `void`

警告日志

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`
