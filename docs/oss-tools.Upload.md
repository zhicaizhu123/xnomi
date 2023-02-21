# Class: Upload

[oss-tools](../wiki/oss-tools).Upload

阿里云ali-oss上传类

## Table of contents

### Constructors

- [constructor](../wiki/oss-tools.Upload#constructor)

### Properties

- [checkpoints](../wiki/oss-tools.Upload#checkpoints)
- [client](../wiki/oss-tools.Upload#client)
- [getStsConfig](../wiki/oss-tools.Upload#getstsconfig)
- [option](../wiki/oss-tools.Upload#option)
- [stsConfig](../wiki/oss-tools.Upload#stsconfig)

### Methods

- [abort](../wiki/oss-tools.Upload#abort)
- [beforeUploadValidate](../wiki/oss-tools.Upload#beforeuploadvalidate)
- [commonUpload](../wiki/oss-tools.Upload#commonupload)
- [fileHandler](../wiki/oss-tools.Upload#filehandler)
- [getUploadFileName](../wiki/oss-tools.Upload#getuploadfilename)
- [initOssClient](../wiki/oss-tools.Upload#initossclient)
- [multipartUpload](../wiki/oss-tools.Upload#multipartupload)
- [multipartUploadHandler](../wiki/oss-tools.Upload#multipartuploadhandler)
- [onMultipartUploadProgress](../wiki/oss-tools.Upload#onmultipartuploadprogress)
- [refreshSTSToken](../wiki/oss-tools.Upload#refreshststoken)
- [resume](../wiki/oss-tools.Upload#resume)
- [resumeMultipartUpload](../wiki/oss-tools.Upload#resumemultipartupload)
- [stop](../wiki/oss-tools.Upload#stop)
- [upload](../wiki/oss-tools.Upload#upload)
- [validate](../wiki/oss-tools.Upload#validate)

## Constructors

### constructor

• **new Upload**(`option`)

创建Upload的实例。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | [`UploadFileOption`](../wiki/oss-tools.UploadFileOption) | 上传配置项 |

## Properties

### checkpoints

• `Private` **checkpoints**: `Record`<`string`, `Checkpoint`\> = `{}`

___

### client

• `Private` **client**: `OSS`

___

### getStsConfig

• `Private` **getStsConfig**: () => `Promise`<[`OssConfigModel`](../wiki/oss-tools.OssConfigModel)\>

#### Type declaration

▸ (): `Promise`<[`OssConfigModel`](../wiki/oss-tools.OssConfigModel)\>

##### Returns

`Promise`<[`OssConfigModel`](../wiki/oss-tools.OssConfigModel)\>

___

### option

• `Private` **option**: [`UploadFileOption`](../wiki/oss-tools.UploadFileOption)

___

### stsConfig

• `Private` **stsConfig**: {} \| [`OssParams`](../wiki/oss-tools.OssParams) = `{}`

## Methods

### abort

▸ **abort**(`name`, `uploadId`): `void`

取消上传

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |
| `uploadId` | `string` | 上传ID |

#### Returns

`void`

___

### beforeUploadValidate

▸ **beforeUploadValidate**(`file`): `Promise`<`boolean`\>

上传前校验

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` \| `File`[] | 待上传文件 |

#### Returns

`Promise`<`boolean`\>

___

### commonUpload

▸ **commonUpload**(`file`): `Promise`<`void`\>

普通上传文件（不分片）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 待上传文件 |

#### Returns

`Promise`<`void`\>

___

### fileHandler

▸ `Private` **fileHandler**(`file`): `File`[]

处理单个和多个文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` \| `File`[] | 待上传文件 |

#### Returns

`File`[]

返回文件列表

___

### getUploadFileName

▸ `Private` **getUploadFileName**(`file`): `string`

获取待上传文件对应的oss文件名

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 待上传文件 |

#### Returns

`string`

___

### initOssClient

▸ `Private` **initOssClient**(): `Promise`<`void`\>

初始化上传配置和OSS Client

#### Returns

`Promise`<`void`\>

___

### multipartUpload

▸ **multipartUpload**(`file`): `Promise`<`void`\>

分片上传

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 待上传文件 |

#### Returns

`Promise`<`void`\>

___

### multipartUploadHandler

▸ **multipartUploadHandler**(`filename`, `file`, `checkpoint?`): `void`

分片上传处理器，用户分片上传和断点续传

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | 文件名称 |
| `file` | `File` | 源文件 |
| `checkpoint?` | `any` |  |

#### Returns

`void`

___

### onMultipartUploadProgress

▸ **onMultipartUploadProgress**(`progress`, `checkpoint`): `Promise`<`void`\>

上传进度回调

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `progress` | `number` | 上传进度 |
| `checkpoint` | `Checkpoint` |  |

#### Returns

`Promise`<`void`\>

___

### refreshSTSToken

▸ `Private` **refreshSTSToken**(): `Promise`<{ `accessKeyId`: `string` ; `accessKeySecret`: `string` ; `bucket`: `string` ; `endpoint`: `undefined` \| `string` ; `region`: `string` ; `stsToken`: `string`  }\>

刷新上传的token签名配置信息

#### Returns

`Promise`<{ `accessKeyId`: `string` ; `accessKeySecret`: `string` ; `bucket`: `string` ; `endpoint`: `undefined` \| `string` ; `region`: `string` ; `stsToken`: `string`  }\>

Promise<Record<string, string>>

___

### resume

▸ **resume**(): `void`

续传

#### Returns

`void`

___

### resumeMultipartUpload

▸ **resumeMultipartUpload**(): `void`

断点续传

#### Returns

`void`

___

### stop

▸ **stop**(): `void`

暂停上传

#### Returns

`void`

___

### upload

▸ **upload**(`file`, `shouldValidate?`): `Promise`<`void`\>

上传文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `file` | `File` \| `File`[] | `undefined` | 待上传文件 |
| `shouldValidate` | `boolean` | `true` | - |

#### Returns

`Promise`<`void`\>

___

### validate

▸ `Private` **validate**(`file`): `string`[]

检验上传文件

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` \| `File`[] |

#### Returns

`string`[]
