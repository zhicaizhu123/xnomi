# Module: utils

## Table of contents

### cache Classes

- [Cookie](../wiki/utils.Cookie)
- [Storage](../wiki/utils.Storage)

### randomName Classes

- [RandomName](../wiki/utils.RandomName)

### time
日历类 Classes

- [Calendar](../wiki/utils.Calendar)

### Interfaces

- [DaysModel](../wiki/utils.DaysModel)
- [DeviceInfo](../wiki/utils.DeviceInfo)
- [Emitter](../wiki/utils.Emitter)
- [GlobalConsoleConfigModel](../wiki/utils.GlobalConsoleConfigModel)
- [OptionsModel](../wiki/utils.OptionsModel)
- [RuleFn](../wiki/utils.RuleFn)
- [StyleConfigModel](../wiki/utils.StyleConfigModel)
- [ViewportOffsetResult](../wiki/utils.ViewportOffsetResult)

### Other Type Aliases

- [ConsoleType](../wiki/utils#consoletype)
- [EventHandlerList](../wiki/utils#eventhandlerlist)
- [EventHandlerMap](../wiki/utils#eventhandlermap)
- [EventType](../wiki/utils#eventtype)
- [Handler](../wiki/utils#handler)
- [StorageType](../wiki/utils#storagetype)
- [Tree](../wiki/utils#tree)
- [TreeConfig](../wiki/utils#treeconfig)
- [WildCardEventHandlerList](../wiki/utils#wildcardeventhandlerlist)
- [WildcardHandler](../wiki/utils#wildcardhandler)

### transfer Type Aliases

- [FilterKeysType](../wiki/utils#filterkeystype)

### Other Variables

- [DEFAULT\_CONFIG](../wiki/utils#default_config)

### randomName Variables

- [randomName](../wiki/utils#randomname)

### DOM Functions

- [addClass](../wiki/utils#addclass)
- [getBoundingClientRect](../wiki/utils#getboundingclientrect)
- [getStyle](../wiki/utils#getstyle)
- [getViewportOffset](../wiki/utils#getviewportoffset)
- [hasClass](../wiki/utils#hasclass)
- [loadJs](../wiki/utils#loadjs)
- [openWindow](../wiki/utils#openwindow)
- [removeClass](../wiki/utils#removeclass)

### Download Functions

- [downloadByBase64](../wiki/utils#downloadbybase64)
- [downloadByBlob](../wiki/utils#downloadbyblob)
- [downloadByData](../wiki/utils#downloadbydata)
- [downloadByUrl](../wiki/utils#downloadbyurl)
- [downloadFileByResponse](../wiki/utils#downloadfilebyresponse)

### Helper Functions

- [buildShortUUID](../wiki/utils#buildshortuuid)
- [buildUUID](../wiki/utils#builduuid)
- [debounceFn](../wiki/utils#debouncefn)
- [defer](../wiki/utils#defer)
- [delay](../wiki/utils#delay)
- [getTextLength](../wiki/utils#gettextlength)
- [noop](../wiki/utils#noop)
- [randomString](../wiki/utils#randomstring)
- [throttleFn](../wiki/utils#throttlefn)
- [to](../wiki/utils#to)

### Mitt Functions

- [mitt](../wiki/utils#mitt)

### Other Functions

- [coverSystemConsole](../wiki/utils#coversystemconsole)
- [getNetwork](../wiki/utils#getnetwork)
- [getNetworkTime](../wiki/utils#getnetworktime)
- [isBoolean](../wiki/utils#isboolean)
- [isFunction](../wiki/utils#isfunction)
- [isOpera](../wiki/utils#isopera)
- [resetConfig](../wiki/utils#resetconfig)
- [throwNoKeyError](../wiki/utils#thrownokeyerror)

### cache Functions

- [createCookie](../wiki/utils#createcookie)
- [createStorage](../wiki/utils#createstorage)

### is Functions

- [getBrowserName](../wiki/utils#getbrowsername)
- [getDeviceInfo](../wiki/utils#getdeviceinfo)
- [getFileSuffix](../wiki/utils#getfilesuffix)
- [is](../wiki/utils#is)
- [isAlipay](../wiki/utils#isalipay)
- [isAndroid](../wiki/utils#isandroid)
- [isArray](../wiki/utils#isarray)
- [isAudio](../wiki/utils#isaudio)
- [isBaidu](../wiki/utils#isbaidu)
- [isCharacters](../wiki/utils#ischaracters)
- [isChrome](../wiki/utils#ischrome)
- [isDate](../wiki/utils#isdate)
- [isDef](../wiki/utils#isdef)
- [isDevice](../wiki/utils#isdevice)
- [isDingTalk](../wiki/utils#isdingtalk)
- [isEMail](../wiki/utils#isemail)
- [isEdge](../wiki/utils#isedge)
- [isElement](../wiki/utils#iselement)
- [isEmpty](../wiki/utils#isempty)
- [isExcel](../wiki/utils#isexcel)
- [isFirefox](../wiki/utils#isfirefox)
- [isIOS](../wiki/utils#isios)
- [isIPad](../wiki/utils#isipad)
- [isIPhone](../wiki/utils#isiphone)
- [isIdCard](../wiki/utils#isidcard)
- [isImage](../wiki/utils#isimage)
- [isLandline](../wiki/utils#islandline)
- [isLieBao](../wiki/utils#isliebao)
- [isLink](../wiki/utils#islink)
- [isMicroMessenger](../wiki/utils#ismicromessenger)
- [isMobile](../wiki/utils#ismobile)
- [isMp3](../wiki/utils#ismp3)
- [isMp4](../wiki/utils#ismp4)
- [isNormalChar](../wiki/utils#isnormalchar)
- [isNotEmptyString](../wiki/utils#isnotemptystring)
- [isNull](../wiki/utils#isnull)
- [isNullAndUnDef](../wiki/utils#isnullandundef)
- [isNullOrUnDef](../wiki/utils#isnullorundef)
- [isNumber](../wiki/utils#isnumber)
- [isObject](../wiki/utils#isobject)
- [isOffice](../wiki/utils#isoffice)
- [isPPT](../wiki/utils#isppt)
- [isPc](../wiki/utils#ispc)
- [isPdf](../wiki/utils#ispdf)
- [isPost](../wiki/utils#ispost)
- [isPromise](../wiki/utils#ispromise)
- [isQQ](../wiki/utils#isqq)
- [isQQBrowser](../wiki/utils#isqqbrowser)
- [isQuark](../wiki/utils#isquark)
- [isRegExp](../wiki/utils#isregexp)
- [isRule](../wiki/utils#isrule)
- [isSafari](../wiki/utils#issafari)
- [isSogou](../wiki/utils#issogou)
- [isStrictTel](../wiki/utils#isstricttel)
- [isString](../wiki/utils#isstring)
- [isTel](../wiki/utils#istel)
- [isTxt](../wiki/utils#istxt)
- [isUC](../wiki/utils#isuc)
- [isUnDef](../wiki/utils#isundef)
- [isVideo](../wiki/utils#isvideo)
- [isVivo](../wiki/utils#isvivo)
- [isWechat](../wiki/utils#iswechat)
- [isWindow](../wiki/utils#iswindow)
- [isWord](../wiki/utils#isword)
- [isWorkWx](../wiki/utils#isworkwx)

### log Functions

- [configGlobalConsole](../wiki/utils#configglobalconsole)
- [debug](../wiki/utils#debug)
- [error](../wiki/utils#error)
- [log](../wiki/utils#log)
- [moduleDebug](../wiki/utils#moduledebug)
- [moduleError](../wiki/utils#moduleerror)
- [moduleLog](../wiki/utils#modulelog)
- [moduleWarn](../wiki/utils#modulewarn)
- [warn](../wiki/utils#warn)

### support Functions

- [isSupportFlash](../wiki/utils#issupportflash)
- [isSupportFullscreen](../wiki/utils#issupportfullscreen)
- [isSupportRTC](../wiki/utils#issupportrtc)

### time Functions

- [createCalendar](../wiki/utils#createcalendar)
- [formatDuration](../wiki/utils#formatduration)
- [formatToDate](../wiki/utils#formattodate)
- [getCountDownTime](../wiki/utils#getcountdowntime)
- [getEndTime](../wiki/utils#getendtime)
- [getMillisecond](../wiki/utils#getmillisecond)
- [getPastTime](../wiki/utils#getpasttime)
- [getStartTime](../wiki/utils#getstarttime)
- [time](../wiki/utils#time)

### transfer Functions

- [dataURLtoBlob](../wiki/utils#dataurltoblob)
- [decamelize](../wiki/utils#decamelize)
- [encryptMobile](../wiki/utils#encryptmobile)
- [fileToDataURI](../wiki/utils#filetodatauri)
- [filterTree](../wiki/utils#filtertree)
- [findTreeNode](../wiki/utils#findtreenode)
- [forEachTree](../wiki/utils#foreachtree)
- [getChainInfo](../wiki/utils#getchaininfo)
- [hash2List](../wiki/utils#hash2list)
- [keepKeys](../wiki/utils#keepkeys)
- [list2Hash](../wiki/utils#list2hash)
- [list2Tree](../wiki/utils#list2tree)
- [removeKeys](../wiki/utils#removekeys)
- [replaceKeys](../wiki/utils#replacekeys)
- [toCurrency](../wiki/utils#tocurrency)
- [toFileSize](../wiki/utils#tofilesize)
- [tree2List](../wiki/utils#tree2list)
- [tree2Map](../wiki/utils#tree2map)
- [urlToBase64](../wiki/utils#urltobase64)

### url Functions

- [addUrlParams](../wiki/utils#addurlparams)
- [getBaseUrl](../wiki/utils#getbaseurl)
- [getLevelDomain](../wiki/utils#getleveldomain)
- [getUrlParam](../wiki/utils#geturlparam)
- [http2https](../wiki/utils#http2https)
- [json2Params](../wiki/utils#json2params)
- [params2Json](../wiki/utils#params2json)
- [parseUrlParams](../wiki/utils#parseurlparams)
- [removeParamsKeys](../wiki/utils#removeparamskeys)
- [removeUrlParams](../wiki/utils#removeurlparams)

## Other Type Aliases

### ConsoleType

Ƭ **ConsoleType**: keyof typeof `systemConsole`

日志方法类型

___

### EventHandlerList

Ƭ **EventHandlerList**: [`Handler`](../wiki/utils#handler)[]

类型的所有当前注册的事件处理程序的数组

___

### EventHandlerMap

Ƭ **EventHandlerMap**: `Map`<[`EventType`](../wiki/utils#eventtype), [`EventHandlerList`](../wiki/utils#eventhandlerlist) \| [`WildCardEventHandlerList`](../wiki/utils#wildcardeventhandlerlist)\>

事件类型及其对应的事件处理程序的映射。

___

### EventType

Ƭ **EventType**: `string` \| `symbol`

___

### Handler

Ƭ **Handler**<`T`\>: (`event?`: `T`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (`event?`): `void`

事件处理程序可以接受可选的事件参数, 并且不应该返回值

##### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `T` |

##### Returns

`void`

___

### StorageType

Ƭ **StorageType**: ``"local"`` \| ``"session"``

___

### Tree

Ƭ **Tree**<`T`\>: `T` & { `children?`: [`Tree`](../wiki/utils#tree)<`T`\>[]  }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### TreeConfig

Ƭ **TreeConfig**: typeof [`DEFAULT_CONFIG`](../wiki/utils#default_config)

___

### WildCardEventHandlerList

Ƭ **WildCardEventHandlerList**: [`WildcardHandler`](../wiki/utils#wildcardhandler)[]

___

### WildcardHandler

Ƭ **WildcardHandler**: (`type`: [`EventType`](../wiki/utils#eventtype), `event?`: `any`) => `void`

#### Type declaration

▸ (`type`, `event?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EventType`](../wiki/utils#eventtype) |
| `event?` | `any` |

##### Returns

`void`

___

## transfer Type Aliases

### FilterKeysType

Ƭ **FilterKeysType**: ``"keep"`` \| ``"remove"``

对象属性处理类型

## Other Variables

### DEFAULT\_CONFIG

• `Const` **DEFAULT\_CONFIG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `parentId` | `string` |

___

## randomName Variables

### randomName

• `Const` **randomName**: [`RandomName`](../wiki/utils.RandomName)

生成随机数实例

## DOM Functions

### addClass

▸ **addClass**(`el`, `cls`): `void`

添加class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `Element` | 操作元素 |
| `cls` | `string` | 添加className |

#### Returns

`void`

___

### getBoundingClientRect

▸ **getBoundingClientRect**(`element`): `DOMRect` \| `number`

获取元素距离视图的偏移

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `Element` | 计算的元素 |

#### Returns

`DOMRect` \| `number`

___

### getStyle

▸ **getStyle**(`el`, `style`): `any`

获取元素的样式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | 当前元素 |
| `style` | `string` \| `string`[] | 需要查询样式的驼峰值，如 ：zIndex |

#### Returns

`any`

___

### getViewportOffset

▸ **getViewportOffset**(`element`): [`ViewportOffsetResult`](../wiki/utils.ViewportOffsetResult)

获取元素到视图的偏移量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `Element` | 计算的元素 |

#### Returns

[`ViewportOffsetResult`](../wiki/utils.ViewportOffsetResult)

___

### hasClass

▸ **hasClass**(`el`, `cls`): `boolean`

判断是否有class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `Element` | 操作元素 |
| `cls` | `string` | 判断className |

#### Returns

`boolean`

___

### loadJs

▸ **loadJs**(`url`, `params?`): `Promise`<`void` \| `Error`\>

动态加载js文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 需要加载的 js 链接 |
| `params?` | `Record`<`string`, `string`\> | - |

#### Returns

`Promise`<`void` \| `Error`\>

返回的是个Promise对象

___

### openWindow

▸ **openWindow**(`url`, `opt?`): `void`

打开窗口

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 链接 |
| `opt?` | `Object` | 窗口选项 |
| `opt.noopener?` | `boolean` | - |
| `opt.noreferrer?` | `boolean` | - |
| `opt.target?` | `string` | - |

#### Returns

`void`

___

### removeClass

▸ **removeClass**(`el`, `cls`): `void`

移除class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `Element` | 操作元素 |
| `cls` | `string` | 移除className |

#### Returns

`void`

___

## Download Functions

### downloadByBase64

▸ **downloadByBase64**(`buf`, `filename`, `mime?`, `bom?`): `void`

下载基于base64的图片

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buf` | `string` | base64字符串 |
| `filename` | `string` | 文件名 |
| `mime?` | `string` | 类型 |
| `bom?` | `BlobPart` |  |

#### Returns

`void`

___

### downloadByBlob

▸ **downloadByBlob**(`data`, `filename`): `Promise`<`void`\>

通过blob下载文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Blob` \| `MediaSource` | 数据源 |
| `filename` | `string` | 文件名 |

#### Returns

`Promise`<`void`\>

___

### downloadByData

▸ **downloadByData**(`data`, `filename`, `mime?`, `bom?`): `void`

根据后台接口文件流进行下载

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `BlobPart` | 文件流 |
| `filename` | `string` | 文件名 |
| `mime?` | `string` | 类型 |
| `bom?` | `BlobPart` |  |

#### Returns

`void`

___

### downloadByUrl

▸ **downloadByUrl**(`url`, `name`): `void`

通过链接下载文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |
| `name` | `string` | 文件名称 |

#### Returns

`void`

___

### downloadFileByResponse

▸ **downloadFileByResponse**(`res`): `void`

通过后端返回的数据进行下载

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | `any` | 需要下载的接口响应数据 |

#### Returns

`void`

___

## Helper Functions

### buildShortUUID

▸ **buildShortUUID**(`prefix?`): `string`

生成短的uuid

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `prefix?` | `string` | `''` | 前缀 |

#### Returns

`string`

___

### buildUUID

▸ **buildUUID**(): `string`

生成uuid

#### Returns

`string`

___

### debounceFn

▸ **debounceFn**(`fn`, `ms?`): (`this`: `any`, ...`args`: `any`[]) => `void`

防抖

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | `Fn`<`any`, `any`\> | `undefined` | 在延迟毫秒后执行的函数 |
| `ms?` | `number` | `200` | 以毫秒为单位的零或更大的延迟。对于事件回调，100或250(甚至更高)左右的值是最有用的 |

#### Returns

`fn`

▸ (`this`, `...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `...args` | `any`[] |

##### Returns

`void`

___

### defer

▸ **defer**(`duration`, `fn`, `...rest`): () => `void`

延时执行，并可以取消

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | 延时执行时间 |
| `fn` | (...`args`: `any`[]) => `any` | 执行函数 |
| `...rest` | `any`[] | 执行函数参数 |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

___

### delay

▸ **delay**(`delayTime`): `Promise`<`unknown`\>

延时执行

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delayTime` | `number` | 延时时间，毫秒为单位 |

#### Returns

`Promise`<`unknown`\>

返回Promise

___

### getTextLength

▸ **getTextLength**(`str`): `number`

获取文本长度（一个表情包算一个字符）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 源字符串 |

#### Returns

`number`

___

### noop

▸ **noop**(): `void`

空函数

#### Returns

`void`

___

### randomString

▸ **randomString**(`len?`): `string`

生成随机数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `len?` | `number` | `5` | 生成随机字符串的长度 |

#### Returns

`string`

___

### throttleFn

▸ **throttleFn**(`fn`, `ms?`, `trailing?`): (`this`: `any`, ...`args`: `any`[]) => `void`

截流，特别适用于速率限制，在诸如调整大小和滚动等事件上执行处理程序。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | `Fn`<`any`, `any`\> | `undefined` | 延迟毫秒后执行的函数。' this '上下文和所有参数都按原样传递 |
| `ms?` | `number` | `200` | 以毫秒为单位的零或更大的延迟。对于事件回调，100或250(甚至更高)左右的值是最有用的 |
| `trailing?` | `boolean` | `true` | 是否尾部执行 |

#### Returns

`fn`

▸ (`this`, `...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `...args` | `any`[] |

##### Returns

`void`

___

### to

▸ **to**<`T`, `U`\>(`promise`): `Promise`<[`U` \| ``null``, `T` \| `undefined`]\>

将await信息拆分为错误信息和正确数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `Error` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promise` | `Promise`<`T`\> | Promise类型参数 |

#### Returns

`Promise`<[`U` \| ``null``, `T` \| `undefined`]\>

___

## Mitt Functions

### mitt

▸ **mitt**(`all?`): [`Emitter`](../wiki/utils.Emitter)

发布订阅

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `all?` | [`EventHandlerMap`](../wiki/utils#eventhandlermap) | 全部 |

#### Returns

[`Emitter`](../wiki/utils.Emitter)

___

## Other Functions

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

### getNetwork

▸ **getNetwork**(): `Object`

获取网络信息

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `downlink` | `undefined` \| `number` |
| `downlinkMax` | `undefined` \| `number` |
| `effectiveType` | `undefined` \| `string` |
| `isOnline` | `boolean` |
| `isSupported` | `boolean` |
| `offlineAt` | `undefined` \| `number` |
| `rtt` | `undefined` \| `number` |
| `saveData` | `boolean` |
| `type` | `string` |

___

### getNetworkTime

▸ **getNetworkTime**(`url?`, `method?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `location.href` |
| `method` | ``"GET"`` \| ``"HEAD"`` | `'GET'` |

#### Returns

`Promise`<`unknown`\>

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

### isOpera

▸ **isOpera**(): `boolean`

是否为Opera浏览器

**`Function`**

#### Returns

`boolean`

___

### resetConfig

▸ **resetConfig**(): `void`

还原全局配置信息

#### Returns

`void`

___

### throwNoKeyError

▸ **throwNoKeyError**(`error`): `Error`

抛出错误信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | 提示错误的字符串 |

#### Returns

`Error`

___

## cache Functions

### createCookie

▸ **createCookie**(`namespace?`): [`Cookie`](../wiki/utils.Cookie)

创建指定命名空间的cookie

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `namespace?` | `string` | `'xiao-nomi'` | 命名空间 |

#### Returns

[`Cookie`](../wiki/utils.Cookie)

___

### createStorage

▸ **createStorage**(`type?`, `namespace?`): [`Storage`](../wiki/utils.Storage)

生成指定命名空间的本地存储

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type?` | [`StorageType`](../wiki/utils#storagetype) | `'local'` | 本地存储类型 |
| `namespace?` | `string` | `'xnomi-store'` | 命名空间字符串名称 |

#### Returns

[`Storage`](../wiki/utils.Storage)

___

## is Functions

### getBrowserName

▸ **getBrowserName**(): ``"搜狗浏览器"`` \| ``"edge浏览器"`` \| ``"夸克浏览器"`` \| ``"微信浏览器"`` \| ``"企业微信浏览器"`` \| ``"QQ浏览器"`` \| ``"猎豹浏览器"`` \| ``"UC浏览器"`` \| ``"百度浏览器"`` \| ``"火狐浏览器"`` \| ``"vivo自带浏览器"`` \| ``"DingTalk"`` \| ``"支付宝"`` \| ``"Opera浏览器"`` \| ``"谷歌浏览器"`` \| ``"Safari浏览器"`` \| ``"未知浏览器"``

获取浏览器名称

**`Function`**

#### Returns

``"搜狗浏览器"`` \| ``"edge浏览器"`` \| ``"夸克浏览器"`` \| ``"微信浏览器"`` \| ``"企业微信浏览器"`` \| ``"QQ浏览器"`` \| ``"猎豹浏览器"`` \| ``"UC浏览器"`` \| ``"百度浏览器"`` \| ``"火狐浏览器"`` \| ``"vivo自带浏览器"`` \| ``"DingTalk"`` \| ``"支付宝"`` \| ``"Opera浏览器"`` \| ``"谷歌浏览器"`` \| ``"Safari浏览器"`` \| ``"未知浏览器"``

___

### getDeviceInfo

▸ **getDeviceInfo**(): [`DeviceInfo`](../wiki/utils.DeviceInfo)

获取设备信息

#### Returns

[`DeviceInfo`](../wiki/utils.DeviceInfo)

___

### getFileSuffix

▸ **getFileSuffix**(`url`): `undefined` \| `string`

获取文件后缀

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`undefined` \| `string`

___

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

### isAlipay

▸ **isAlipay**(): `boolean`

是否为支付宝

**`Function`**

#### Returns

`boolean`

___

### isAndroid

▸ **isAndroid**(): `boolean`

是否为安卓端

**`Function`**

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

### isAudio

▸ **isAudio**(`url`): `boolean`

是否为音频

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isBaidu

▸ **isBaidu**(): `boolean`

是否为百度浏览器

**`Function`**

#### Returns

`boolean`

___

### isCharacters

▸ **isCharacters**(`val`): `boolean`

是否为汉字

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

___

### isChrome

▸ **isChrome**(): `boolean`

是否为谷歌端

**`Function`**

#### Returns

`boolean`

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

### isDevice

▸ **isDevice**(`regexp`): () => `boolean`

判断设备

**`Function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `RegExp` | 正则表达式 |

#### Returns

`fn`

▸ (): `boolean`

##### Returns

`boolean`

___

### isDingTalk

▸ **isDingTalk**(): `boolean`

是否为DingTalk

**`Function`**

#### Returns

`boolean`

___

### isEMail

▸ **isEMail**(`val`): `boolean`

是否为合法邮箱

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

___

### isEdge

▸ **isEdge**(): `boolean`

是否为edge浏览器

**`Function`**

#### Returns

`boolean`

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

### isExcel

▸ **isExcel**(`url`): `boolean`

是否为Excel/csv文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isFirefox

▸ **isFirefox**(): `boolean`

是否为火狐端

**`Function`**

#### Returns

`boolean`

___

### isIOS

▸ **isIOS**(): `boolean`

是否为iOS端

**`Function`**

#### Returns

`boolean`

___

### isIPad

▸ **isIPad**(): `boolean`

是否为iPad端

**`Function`**

#### Returns

`boolean`

___

### isIPhone

▸ **isIPhone**(): `boolean`

是否为iPhone端

**`Function`**

#### Returns

`boolean`

___

### isIdCard

▸ **isIdCard**(`val`): `boolean`

是否为合法身份证

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

___

### isImage

▸ **isImage**(`url`): `boolean`

是否为图片

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isLandline

▸ **isLandline**(`val`): `boolean`

是否为合法固话

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

___

### isLieBao

▸ **isLieBao**(): `boolean`

是否为猎豹浏览器

**`Function`**

#### Returns

`boolean`

___

### isLink

▸ **isLink**(`val`): `boolean`

是否为有效链接

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

___

### isMicroMessenger

▸ **isMicroMessenger**(): `boolean`

是否为微信端

**`Function`**

#### Returns

`boolean`

___

### isMobile

▸ **isMobile**(): `boolean`

是否为手机端

**`Function`**

#### Returns

`boolean`

___

### isMp3

▸ **isMp3**(`url`): `boolean`

是否为mp3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isMp4

▸ **isMp4**(`url`): `boolean`

是否为Mp4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isNormalChar

▸ **isNormalChar**(`val`): `boolean`

是否为 汉字+数字+字母

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

___

### isNotEmptyString

▸ **isNotEmptyString**(`val`): `boolean`

字符串含有非空字符

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

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

### isOffice

▸ **isOffice**(`url`): `boolean`

是否为office文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isPPT

▸ **isPPT**(`url`): `boolean`

是否为PPT文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isPc

▸ **isPc**(): `boolean`

是否为PC端

**`Function`**

#### Returns

`boolean`

___

### isPdf

▸ **isPdf**(`url`): `boolean`

是否为pdf文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isPost

▸ **isPost**(`val`): `boolean`

是否为邮政编码

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

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

### isQQ

▸ **isQQ**(`val`): `boolean`

是否为合法QQ

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

___

### isQQBrowser

▸ **isQQBrowser**(): `boolean`

是否为QQ浏览器端

**`Function`**

#### Returns

`boolean`

___

### isQuark

▸ **isQuark**(): `boolean`

是否为夸克浏览器

**`Function`**

#### Returns

`boolean`

___

### isRegExp

▸ **isRegExp**(`val`): val is RegExp

是否为正则表达式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | 要判断的值 |

#### Returns

val is RegExp

{val is RegExp}

___

### isRule

▸ **isRule**(`rule`): [`RuleFn`](../wiki/utils.RuleFn)

是否匹配提供的正则表达式规则

**`Function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rule` | `RegExp` | 正则表达式 |

#### Returns

[`RuleFn`](../wiki/utils.RuleFn)

___

### isSafari

▸ **isSafari**(): `boolean`

是否为Safari端

**`Function`**

#### Returns

`boolean`

___

### isSogou

▸ **isSogou**(): `boolean`

是否为搜狗浏览器

**`Function`**

#### Returns

`boolean`

___

### isStrictTel

▸ **isStrictTel**(`val`): `boolean`

是否为合法手机号码（严格限制）

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

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

### isTel

▸ **isTel**(`val`): `boolean`

是否为合法手机号码（通用，限制没有这么大）

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

___

### isTxt

▸ **isTxt**(`url`): `boolean`

是否为TXT文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isUC

▸ **isUC**(): `boolean`

是否为UC浏览器

**`Function`**

#### Returns

`boolean`

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

### isVideo

▸ **isVideo**(`url`): `boolean`

是否为视频

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isVivo

▸ **isVivo**(): `boolean`

是否为vivo自带浏览器

**`Function`**

#### Returns

`boolean`

___

### isWechat

▸ **isWechat**(`val`): `boolean`

是否为合法微信

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

`boolean`

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

___

### isWord

▸ **isWord**(`url`): `boolean`

是否为Word文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 文件链接 |

#### Returns

`boolean`

___

### isWorkWx

▸ **isWorkWx**(): `boolean`

是否为企业微信端

**`Function`**

#### Returns

`boolean`

___

## log Functions

### configGlobalConsole

▸ **configGlobalConsole**(`config`): `void`

配置全局信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`GlobalConsoleConfigModel`](../wiki/utils.GlobalConsoleConfigModel) | 配置信息 |

#### Returns

`void`

___

### debug

▸ **debug**(`...args`): `void`

调试日志

**`Function`**

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

**`Function`**

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

**`Function`**

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

**`Function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | 模块名称 |
| `...args` | `any`[] | - |

#### Returns

`void`

___

### moduleError

▸ **moduleError**(`moduleName`, `...args`): `void`

调试日志（定制模块名称）

**`Function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | 模块名称 |
| `...args` | `any`[] | - |

#### Returns

`void`

___

### moduleLog

▸ **moduleLog**(`moduleName`, `...args`): `void`

普通日志（定制模块名称）

**`Function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | 模块名称 |
| `...args` | `any`[] | - |

#### Returns

`void`

___

### moduleWarn

▸ **moduleWarn**(`moduleName`, `...args`): `void`

警告日志（定制模块名称）

**`Function`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | 模块名称 |
| `...args` | `any`[] | - |

#### Returns

`void`

___

### warn

▸ **warn**(`...args`): `void`

警告日志

**`Function`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

___

## support Functions

### isSupportFlash

▸ **isSupportFlash**(): `boolean`

是否支持flash

**`Function`**

#### Returns

`boolean`

___

### isSupportFullscreen

▸ **isSupportFullscreen**(): `boolean`

是否支持全屏功能

#### Returns

`boolean`

___

### isSupportRTC

▸ **isSupportRTC**(): `boolean`

是否支持rtc

#### Returns

`boolean`

___

## time Functions

### createCalendar

▸ **createCalendar**(`config?`): [`Calendar`](../wiki/utils.Calendar)

生成日历

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `Partial`<[`OptionsModel`](../wiki/utils.OptionsModel)\> | 日历配置 |

#### Returns

[`Calendar`](../wiki/utils.Calendar)

___

### formatDuration

▸ **formatDuration**(`duration`, `format?`): `string`

格式化时长

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `duration` | `number` | `undefined` | 时长 单位为毫秒 |
| `format?` | `string` | `'HH:mm:ss'` | 格式 |

#### Returns

`string`

{string}

___

### formatToDate

▸ **formatToDate**(`time`, `format?`): `string`

格式化时间

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `time` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 日期对象/日期字符串/时间戳毫秒 |
| `format?` | `string` | `'YYYY-MM-DD HH:mm'` | - |

#### Returns

`string`

___

### getCountDownTime

▸ **getCountDownTime**(`time`): `string`

获取倒计时

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | 计算时间 |

#### Returns

`string`

___

### getEndTime

▸ **getEndTime**(`time`, `type?`): `number`

获取给定时间和类型的结束时间

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `time` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 时间 |
| `type?` | `OpUnitType` | `'day'` | 类型 "millisecond" \| "second" \| "minute" \| "hour" \| "day" \| "month" \| "year" \| "date" \| "d" \| "M" \| "y" \| "h" \| "m" \| "s" \| "ms" \| "week" \| "w" |

#### Returns

`number`

返回时间戳

___

### getMillisecond

▸ **getMillisecond**(`time`): `number`

将时间转为毫秒格式

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` |

#### Returns

`number`

___

### getPastTime

▸ **getPastTime**(`time`): `string`

获取已过去时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | 计算时间 |

#### Returns

`string`

___

### getStartTime

▸ **getStartTime**(`time`, `type?`): `number`

获取给定时间和类型的起始时间

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `time` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | `undefined` | 时间 |
| `type?` | `OpUnitType` | `'day'` | 类型 "millisecond" \| "second" \| "minute" \| "hour" \| "day" \| "month" \| "year" \| "date" \| "d" \| "M" \| "y" \| "h" \| "m" \| "s" \| "ms" \| "week" \| "w" |

#### Returns

`number`

返回时间戳

___

### time

▸ **time**(`date?`): `dayjs.Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` |

#### Returns

`dayjs.Dayjs`

▸ **time**(`date?`, `format?`, `strict?`): `dayjs.Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` |
| `format?` | `OptionType` |
| `strict?` | `boolean` |

#### Returns

`dayjs.Dayjs`

▸ **time**(`date?`, `format?`, `locale?`, `strict?`): `dayjs.Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` |
| `format?` | `OptionType` |
| `locale?` | `string` |
| `strict?` | `boolean` |

#### Returns

`dayjs.Dayjs`

___

## transfer Functions

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
| `file` | `File` \| `Blob` | 需要转换的File文件 |

#### Returns

`Promise`<`string`\>

___

### filterTree

▸ **filterTree**<`T`\>(`tree`, `handler`): `T`[]

过滤树节点

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `T`[] | 树形结构数据 |
| `handler` | (`data`: `T`) => `boolean` | 过滤回调函数 |

#### Returns

`T`[]

___

### findTreeNode

▸ **findTreeNode**<`T`\>(`tree`, `id`, `config?`): `undefined` \| `T`

根据id查询对应节点的完整信息

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `T`[] | 树形结构数据 |
| `id` | `string` \| `number` | 需要查询的id |
| `config?` | `Partial`<{ `id`: `string` = 'id'; `parentId`: `string` = 'parentId' }\> | 数据关键字段映射 |

#### Returns

`undefined` \| `T`

___

### forEachTree

▸ **forEachTree**<`T`\>(`tree`, `handler?`): `void`

遍历树形结构数据

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `T`[] | 树形结构数据 |
| `handler?` | (`item`: `T`) => `boolean` \| `void` | 每个节点的处理函数和判断是否中断 |

#### Returns

`void`

___

### getChainInfo

▸ **getChainInfo**<`T`\>(`tree`, `id`, `config?`): `Object`

通过指定id获取完整链式信息

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `T`[] | 树形结构数据 |
| `id` | `string` \| `number` | 需要查询的id |
| `config?` | `Partial`<{ `id`: `string` = 'id'; `parentId`: `string` = 'parentId' }\> | 数据关键字段映射 |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chainIds` | (`string` \| `number`)[] |
| `chainNodes` | `T`[] |

___

### hash2List

▸ **hash2List**<`T`, `U`\>(`map`, `cb?`): `U`[]

将key-value对象转换成列表

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `Record`<`string`, `T`\> | 对象 |
| `cb?` | (`item`: `T`) => `U` | 处理函数 |

#### Returns

`U`[]

___

### keepKeys

▸ **keepKeys**(`obj`, `keys?`): `Record`<`string`, `any`\>

保留给定字段

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `Record`<`string`, `any`\> | `undefined` | 要处理的对象 |
| `keys` | `string`[] | `[]` | 要保留的字段列表 |

#### Returns

`Record`<`string`, `any`\>

返回已保留对应字段后的对象

___

### list2Hash

▸ **list2Hash**<`T`, `U`\>(`list`, `key?`, `cb?`): `Record`<`string`, `U`\>

将列表转化为key-value对象

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `list` | `T`[] | `undefined` | 列表数据 |
| `key?` | `string` | `'id'` | key |
| `cb?` | (`item`: `T`) => `U` | `undefined` | 处理函数 |

#### Returns

`Record`<`string`, `U`\>

___

### list2Tree

▸ **list2Tree**<`T`\>(`list`, `config?`): [`Tree`](../wiki/utils#tree)<`T`\>[]

将一维数组转化为树形结构

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | [`Tree`](../wiki/utils#tree)<`T`\>[] | 一维数组数据 |
| `config?` | `Partial`<{ `id`: `string` = 'id'; `parentId`: `string` = 'parentId' }\> | 数据关键字段映射 |

#### Returns

[`Tree`](../wiki/utils#tree)<`T`\>[]

___

### removeKeys

▸ **removeKeys**(`obj`, `keys?`): `Record`<`string`, `any`\>

删除给定字段

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `Record`<`string`, `any`\> | `undefined` | 要处理的对象 |
| `keys` | `string`[] | `[]` | 要删除的字段列表 |

#### Returns

`Record`<`string`, `any`\>

返回已移除对应字段后的对象

___

### replaceKeys

▸ **replaceKeys**(`obj`, `rules?`): `Record`<`string`, `any`\>

替换对象字段名

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Record`<`string`, `any`\> | 要操作的对象 |
| `rules?` | `Record`<`string`, `any`\> | key-value键值对，key 为 原字段，value为替换字段 |

#### Returns

`Record`<`string`, `any`\>

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

▸ **tree2List**<`T`\>(`tree`): `T`[]

将树形结构time成以为数组

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | `T`[] | 树形结构数据 |

#### Returns

`T`[]

___

### tree2Map

▸ **tree2Map**<`T`\>(`tree`, `config?`, `includeChildren?`): `Map`<`string` \| `number`, `T`\>

将树形结构数据转化成Map

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tree` | `T`[] | `undefined` | 树形结构数据 |
| `config?` | `Partial`<{ `id`: `string` = 'id'; `parentId`: `string` = 'parentId' }\> | `{}` | 数据关键字段映射 |
| `includeChildren?` | `boolean` | `false` | 解析出来的数据是否包含子元素列表 |

#### Returns

`Map`<`string` \| `number`, `T`\>

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

___

## url Functions

### addUrlParams

▸ **addUrlParams**<`T`\>(`params`, `url?`): `string`

添加参数到链接上

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `T` | `undefined` | 需要添加的参数 |
| `url?` | `string` | `location.href` | 源链接字符串 |

#### Returns

`string`

{string}

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

### getUrlParam

▸ **getUrlParam**<`T`\>(`key`, `url?`): `T` extends `string` ? `string` \| `undefined` : `Record`<`string`, `string`\>

获取链接指定字段名的值

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `string`[] |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `T` | `undefined` | 指定获取的字段名 |
| `url?` | `string` | `location.href` | 源链接字符串 |

#### Returns

`T` extends `string` ? `string` \| `undefined` : `Record`<`string`, `string`\>

{(T extends string ? (string | undefined) : Record<string, string>)}

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

▸ **json2Params**<`T`\>(`json`): `string`

转换json为链接参数字符串

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `json` | `T` | 需要解析的json |

#### Returns

`string`

{string}

___

### params2Json

▸ **params2Json**(`url?`): `Record`<`string`, `string`\>

将链接参数转为JSON格式返回

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url?` | `string` | `location.href` | 源链接字符串 |

#### Returns

`Record`<`string`, `string`\>

___

### parseUrlParams

▸ **parseUrlParams**(`search`): `Record`<`string`, `string`\>

将链接参数转为JSON格式返回

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `search` | `string` | 解析字符串 |

#### Returns

`Record`<`string`, `string`\>

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

▸ **removeUrlParams**(`params`, `url?`): `string`

删除链接指定的参数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `string` \| `string`[] | `undefined` | 如果为字符串时，多个参数需要用英文','分割，如果不传或者传的时空字符串或者空数组则删除全部参数 |
| `url?` | `string` | `location.href` | 源链接字符串 |

#### Returns

`string`
