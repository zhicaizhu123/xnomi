[xnomi工具库](../README.md) / [Modules](../modules.md) / [oss-tools](../modules/oss_tools.md) / Upload

# Class: Upload

[oss-tools](../modules/oss_tools.md).Upload

阿里云ali-oss上传类

## Table of contents

### Constructors

- [constructor](oss_tools.Upload.md#constructor)

### Properties

- [checkpoints](oss_tools.Upload.md#checkpoints)
- [client](oss_tools.Upload.md#client)
- [getStsConfig](oss_tools.Upload.md#getstsconfig)
- [option](oss_tools.Upload.md#option)
- [stsConfig](oss_tools.Upload.md#stsconfig)

### Methods

- [abort](oss_tools.Upload.md#abort)
- [beforeUploadValidate](oss_tools.Upload.md#beforeuploadvalidate)
- [commonUpload](oss_tools.Upload.md#commonupload)
- [fileHandler](oss_tools.Upload.md#filehandler)
- [getUploadFileName](oss_tools.Upload.md#getuploadfilename)
- [initOssClient](oss_tools.Upload.md#initossclient)
- [multipartUpload](oss_tools.Upload.md#multipartupload)
- [multipartUploadHandler](oss_tools.Upload.md#multipartuploadhandler)
- [onMultipartUploadProgress](oss_tools.Upload.md#onmultipartuploadprogress)
- [refreshSTSToken](oss_tools.Upload.md#refreshststoken)
- [resume](oss_tools.Upload.md#resume)
- [resumeMultipartUpload](oss_tools.Upload.md#resumemultipartupload)
- [stop](oss_tools.Upload.md#stop)
- [upload](oss_tools.Upload.md#upload)
- [validate](oss_tools.Upload.md#validate)

## Constructors

### constructor

• **new Upload**(`option`)

创建Upload的实例。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | [`UploadFileOption`](../interfaces/oss_tools.UploadFileOption.md) | 上传配置项 |

## Properties

### checkpoints

• `Private` **checkpoints**: `Record`<`string`, `Checkpoint`\> = `{}`

___

### client

• `Private` **client**: `OSS`

___

### getStsConfig

• `Private` **getStsConfig**: () => `Promise`<[`OssConfigModel`](../interfaces/oss_tools.OssConfigModel.md)\>

#### Type declaration

▸ (): `Promise`<[`OssConfigModel`](../interfaces/oss_tools.OssConfigModel.md)\>

##### Returns

`Promise`<[`OssConfigModel`](../interfaces/oss_tools.OssConfigModel.md)\>

___

### option

• `Private` **option**: [`UploadFileOption`](../interfaces/oss_tools.UploadFileOption.md)

___

### stsConfig

• `Private` **stsConfig**: {} \| [`OssParams`](../interfaces/oss_tools.OssParams.md) = `{}`

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
