# Module: transfer

## Table of contents

### Interfaces

- [TreeConfig](../wiki/transfer.TreeConfig)

### Type Aliases

- [FilterKeysType](../wiki/transfer#filterkeystype)

### Functions

- [Map2Options](../wiki/transfer#map2options)
- [addUrlParams](../wiki/transfer#addurlparams)
- [dataURLtoBlob](../wiki/transfer#dataurltoblob)
- [decamelize](../wiki/transfer#decamelize)
- [encryptMobile](../wiki/transfer#encryptmobile)
- [fileToDataURI](../wiki/transfer#filetodatauri)
- [filterTree](../wiki/transfer#filtertree)
- [findTreeNode](../wiki/transfer#findtreenode)
- [forEachTree](../wiki/transfer#foreachtree)
- [getBaseUrl](../wiki/transfer#getbaseurl)
- [getChainInfo](../wiki/transfer#getchaininfo)
- [getLastKey](../wiki/transfer#getlastkey)
- [getLeafId](../wiki/transfer#getleafid)
- [getLevelDomain](../wiki/transfer#getleveldomain)
- [getNonEmpty](../wiki/transfer#getnonempty)
- [getUrlParam](../wiki/transfer#geturlparam)
- [http2https](../wiki/transfer#http2https)
- [json2Params](../wiki/transfer#json2params)
- [keepKeys](../wiki/transfer#keepkeys)
- [list2Map](../wiki/transfer#list2map)
- [list2Tree](../wiki/transfer#list2tree)
- [options2Map](../wiki/transfer#options2map)
- [params2Json](../wiki/transfer#params2json)
- [parseUrlParams](../wiki/transfer#parseurlparams)
- [removeKeys](../wiki/transfer#removekeys)
- [removeParamsKeys](../wiki/transfer#removeparamskeys)
- [removeUrlParams](../wiki/transfer#removeurlparams)
- [replaceKeys](../wiki/transfer#replacekeys)
- [toCurrency](../wiki/transfer#tocurrency)
- [toFileSize](../wiki/transfer#tofilesize)
- [tree2List](../wiki/transfer#tree2list)
- [tree2Map](../wiki/transfer#tree2map)
- [urlToBase64](../wiki/transfer#urltobase64)

## Type Aliases

### FilterKeysType

Ƭ **FilterKeysType**: ``"keep"`` \| ``"remove"``

对象属性处理类型

## Functions

### Map2Options

▸ **Map2Options**(`map`): `LabelValueOption`[]

将对象转换成列表

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `Recordable`<`any`\> | 对象 |

#### Returns

`LabelValueOption`[]

返回处理的结果

___

### addUrlParams

▸ **addUrlParams**(`params?`, `url?`): `string`

添加参数到链接上

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params?` | `Recordable`<`any`\> | `{}` | 源链接字符串 |
| `url?` | `string` | `location.href` | 需要添加的参数 |

#### Returns

`string`

___

### dataURLtoBlob

▸ **dataURLtoBlob**(`base64Buf`): `Blob`

base64转blob

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base64Buf` | `string` | base64字符串 |

#### Returns

`Blob`

___

### decamelize

▸ **decamelize**(`str`): `string`

驼峰转中横线

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要转换的字符串 |

#### Returns

`string`

___

### encryptMobile

▸ **encryptMobile**(`mobile`): `string`

加密手机号

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mobile` | `string` | 手机号 |

#### Returns

`string`

___

### fileToDataURI

▸ **fileToDataURI**(`file`): `Promise`<`string`\>

File转DataURL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `Blob` \| `File` | 需要转换的File文件 |

#### Returns

`Promise`<`string`\>

___

### filterTree

▸ **filterTree**(`tree`, `config?`, `handler`): `any`

过滤树节点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `any`[] | 树形结构数据 |
| `config?` | `Partial`<[`TreeConfig`](../wiki/transfer.TreeConfig)\> | 数据关键字段映射 |
| `handler` | `Fn`<`any`, `any`\> | 过滤回调函数 |

#### Returns

`any`

___

### findTreeNode

▸ **findTreeNode**(`tree`, `id`, `config?`): `any`

根据id查询对应节点的完整信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `any`[] | 树形结构数据 |
| `id` | `string` \| `number` | 需要查询的id |
| `config?` | `Partial`<[`TreeConfig`](../wiki/transfer.TreeConfig)\> | 数据关键字段映射 |

#### Returns

`any`

___

### forEachTree

▸ **forEachTree**(`tree`, `config?`, `handler?`): `void`

遍历树形结构数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `any`[] | 树形结构数据 |
| `config?` | `Partial`<[`TreeConfig`](../wiki/transfer.TreeConfig)\> | 数据关键字段映射 |
| `handler?` | `Fn`<`any`, `any`\> | 每个节点的处理函数和判断是否终端 |

#### Returns

`void`

___

### getBaseUrl

▸ **getBaseUrl**(`url`, `includePath?`): `string`

返回协议 + 链接域名

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | 源链接字符串 |
| `includePath?` | `boolean` | `false` | 是否返回出参数外的字符串 |

#### Returns

`string`

___

### getChainInfo

▸ **getChainInfo**(`tree`, `id`, `config?`): `Object`

通过指定id获取完整链式信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `any`[] | 树形结构数据 |
| `id` | `string` \| `number` | 需要查询的id |
| `config?` | `Partial`<[`TreeConfig`](../wiki/transfer.TreeConfig)\> | 数据关键字段映射 |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chainIds` | (`string` \| `number`)[] |
| `chainNodes` | `any`[] |

___

### getLastKey

▸ **getLastKey**<`T`\>(`arr`, `cb?`): `any`

获取数组的最后一个元素

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | 源数组 |
| `cb?` | `Fn`<`any`, `any`\> | 回调，用于自定义返回数据，参数为数组最后一个元素 |

#### Returns

`any`

___

### getLeafId

▸ **getLeafId**(`target?`): `string`

获取叶子key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | `string` \| `string`[] | 源数组或字符串 |

#### Returns

`string`

___

### getLevelDomain

▸ **getLevelDomain**(`level?`): `string`

获取层级级域名

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `level?` | `number` | `1` | 层级，默认获取一级域名 |

#### Returns

`string`

___

### getNonEmpty

▸ **getNonEmpty**(`data`): `Recordable`<`any`\>

去除对象的属性值为undefined的字段

**`Export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Recordable`<`any`\> | 要操作的对象 |

#### Returns

`Recordable`<`any`\>

{Recordable}

___

### getUrlParam

▸ **getUrlParam**(`key`, `url?`): `Recordable`<`string`\> \| `string` \| ``null``

获取链接指定字段名的值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `string` \| `string`[] | `undefined` | 指定获取的字段名 |
| `url?` | `string` | `location.href` | 源链接字符串 |

#### Returns

`Recordable`<`string`\> \| `string` \| ``null``

{(Recordable<string> | string | null)} 如果参数key为数组则返回对象

___

### http2https

▸ **http2https**(`url`): `string`

http协议转换成https协议

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 待处理的文本 |

#### Returns

`string`

___

### json2Params

▸ **json2Params**(`json`): `string`

转换json为链接参数字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `Recordable`<`any`\> | 需要解析的json |

#### Returns

`string`

___

### keepKeys

▸ **keepKeys**(`obj`, `keys?`): `Recordable`<`any`\>

保留给定字段

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `Recordable`<`any`\> | `undefined` | 要处理的对象 |
| `keys` | `string`[] | `[]` | 要保留的字段列表 |

#### Returns

`Recordable`<`any`\>

返回已保留对应字段后的对象

___

### list2Map

▸ **list2Map**(`list`, `key?`, `cb?`): `Recordable`

将列表转化为key-value对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `list` | `Recordable`<`any`\>[] | `undefined` | 列表 |
| `key?` | `string` | `'id'` | 唯一标识值 |
| `cb?` | (`item`: `Recordable`<`any`\>) => `any` | `undefined` | - |

#### Returns

`Recordable`

返回处理后的结果

___

### list2Tree

▸ **list2Tree**(`list`, `config?`): `any`[]

将一维数组转化为树形结构

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | `any`[] | 一维数组数据 |
| `config?` | `Partial`<[`TreeConfig`](../wiki/transfer.TreeConfig)\> | 数据关键字段映射 |

#### Returns

`any`[]

___

### options2Map

▸ **options2Map**<`T`\>(`options`, `key?`): `T`

列表选项转换为对象
- 键：第二个参数指定的值
- 值：列表元素

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Recordable`<`any`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | `LabelValueOption`<`any`\>[] | `undefined` | 需要转换的列表选项 |
| `key?` | `string` | `'value'` | 值的对应的字段 |

#### Returns

`T`

___

### params2Json

▸ **params2Json**(`url?`): `Recordable`<`string`\>

将链接参数转为JSON格式返回

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url?` | `string` | `location.href` | 源链接字符串 |

#### Returns

`Recordable`<`string`\>

___

### parseUrlParams

▸ **parseUrlParams**(`search`): `Recordable`<`any`\>

将链接参数转为JSON格式返回

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `search` | `string` | 解析字符串 |

#### Returns

`Recordable`<`any`\>

___

### removeKeys

▸ **removeKeys**(`obj`, `keys?`): `Recordable`<`any`\>

删除给定字段

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `Recordable`<`any`\> | `undefined` | 要处理的对象 |
| `keys` | `string`[] | `[]` | 要删除的字段列表 |

#### Returns

`Recordable`<`any`\>

返回已移除对应字段后的对象

___

### removeParamsKeys

▸ **removeParamsKeys**(`str`, `keys`): `string`

去除参数中的某些字段

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 参数字符串 |
| `keys` | `string` \| `string`[] | 需要去除的字段 |

#### Returns

`string`

___

### removeUrlParams

▸ **removeUrlParams**(`url?`, `params?`): `string`

删除链接指定的参数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url?` | `string` | `location.href` | 源链接字符串 |
| `params?` | `string` \| `string`[] | `''` | 如果为字符串时，多个参数需要用英文','分割，如果不传或者传的时空字符串或者空数组则删除全部参数 |

#### Returns

`string`

___

### replaceKeys

▸ **replaceKeys**(`obj`, `rules?`): `Recordable`<`any`\>

替换对象字段名

**`Export`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Recordable`<`any`\> | 要操作的对象 |
| `rules?` | `Recordable`<`any`\> | key-value键值对，key 为 原字段，value为替换字段 |

#### Returns

`Recordable`<`any`\>

___

### toCurrency

▸ **toCurrency**(`num`, `size?`): `string`

数字转换为金额

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `number` | `undefined` | 转换的数字 |
| `size?` | `number` | `2` | 保留的小数点 |

#### Returns

`string`

返回已格式化字符串

___

### toFileSize

▸ **toFileSize**(`size`): `string`

图片大小格式化

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | 图片大小，byte单位 |

#### Returns

`string`

___

### tree2List

▸ **tree2List**(`tree`, `config?`): `any`[]

将树形结构数据转换成以为数组

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `any`[] | 树形结构数据 |
| `config?` | `Partial`<[`TreeConfig`](../wiki/transfer.TreeConfig)\> | 数据关键字段映射 |

#### Returns

`any`[]

___

### tree2Map

▸ **tree2Map**(`tree`, `config?`, `includeChildren?`): `Map`<`any`, `any`\>

将树形结构数据转化成Map

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tree` | `any`[] | `undefined` | 树形结构数据 |
| `config?` | `Partial`<[`TreeConfig`](../wiki/transfer.TreeConfig)\> | `{}` | 数据关键字段映射 |
| `includeChildren?` | `boolean` | `false` | 解析出来的数据是否包含子元素列表 |

#### Returns

`Map`<`any`, `any`\>

___

### urlToBase64

▸ **urlToBase64**(`url`, `mineType?`): `Promise`<`string`\>

图片链接转base64

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 链接 |
| `mineType?` | `string` | 模式 |

#### Returns

`Promise`<`string`\>
