[xnomi工具库](../README.md) / [Modules](../modules.md) / [oss-tools](../modules/oss_tools.md) / UploadFileOption

# Interface: UploadFileOption

[oss-tools](../modules/oss_tools.md).UploadFileOption

上传的配置信息

## Table of contents

### Properties

- [accept](oss_tools.UploadFileOption.md#accept)
- [dir](oss_tools.UploadFileOption.md#dir)
- [getStsConfig](oss_tools.UploadFileOption.md#getstsconfig)
- [maxCount](oss_tools.UploadFileOption.md#maxcount)
- [maxScreen](oss_tools.UploadFileOption.md#maxscreen)
- [maxSize](oss_tools.UploadFileOption.md#maxsize)
- [onAbort](oss_tools.UploadFileOption.md#onabort)
- [onError](oss_tools.UploadFileOption.md#onerror)
- [onProgress](oss_tools.UploadFileOption.md#onprogress)
- [onResume](oss_tools.UploadFileOption.md#onresume)
- [onStart](oss_tools.UploadFileOption.md#onstart)
- [onStop](oss_tools.UploadFileOption.md#onstop)
- [onSuccess](oss_tools.UploadFileOption.md#onsuccess)
- [onValidateError](oss_tools.UploadFileOption.md#onvalidateerror)
- [parallel](oss_tools.UploadFileOption.md#parallel)
- [partSize](oss_tools.UploadFileOption.md#partsize)
- [validator](oss_tools.UploadFileOption.md#validator)

## Properties

### accept

• `Optional` **accept**: `string`

上传类型

___

### dir

• `Optional` **dir**: `string`

存储目录

___

### getStsConfig

• **getStsConfig**: () => `Promise`<[`OssConfigModel`](oss_tools.OssConfigModel.md)\>

#### Type declaration

▸ (): `Promise`<[`OssConfigModel`](oss_tools.OssConfigModel.md)\>

上传前用户获取oss配置信息

##### Returns

`Promise`<[`OssConfigModel`](oss_tools.OssConfigModel.md)\>

___

### maxCount

• `Optional` **maxCount**: `number`

最大数

___

### maxScreen

• `Optional` **maxScreen**: `string`

最大尺寸大小
- 格式：width*height

___

### maxSize

• `Optional` **maxSize**: `number`

最大大小

___

### onAbort

• `Optional` **onAbort**: (`filename`: `string`, `uploadId`: `string`) => `void`

#### Type declaration

▸ (`filename`, `uploadId`): `void`

取消上传回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `uploadId` | `string` |

##### Returns

`void`

___

### onError

• `Optional` **onError**: (`err`: `any`) => `void`

#### Type declaration

▸ (`err`): `void`

上传失败回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

##### Returns

`void`

___

### onProgress

• `Optional` **onProgress**: (`p`: `number`, `checkpoint`: `Checkpoint`) => `void`

#### Type declaration

▸ (`p`, `checkpoint`): `void`

上传中回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `number` |
| `checkpoint` | `Checkpoint` |

##### Returns

`void`

___

### onResume

• `Optional` **onResume**: () => `void`

#### Type declaration

▸ (): `void`

续传

##### Returns

`void`

___

### onStart

• `Optional` **onStart**: () => `void`

#### Type declaration

▸ (): `void`

开始上传回调

##### Returns

`void`

___

### onStop

• `Optional` **onStop**: () => `void`

#### Type declaration

▸ (): `void`

暂停上传回调

##### Returns

`void`

___

### onSuccess

• `Optional` **onSuccess**: (`data`: [`UploadFileItem`](oss_tools.UploadFileItem.md)) => `void`

#### Type declaration

▸ (`data`): `void`

上传成功回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UploadFileItem`](oss_tools.UploadFileItem.md) |

##### Returns

`void`

___

### onValidateError

• `Optional` **onValidateError**: (`errors`: `string`[]) => `void`

#### Type declaration

▸ (`errors`): `void`

校验失败回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `string`[] |

##### Returns

`void`

___

### parallel

• `Optional` **parallel**: `number`

同时上传的分片数

___

### partSize

• `Optional` **partSize**: `number`

每个分片大小(byte)

___

### validator

• `Optional` **validator**: (`file`: `File` \| `File`[]) => `boolean` \| `Promise`<`boolean`\>

#### Type declaration

▸ (`file`): `boolean` \| `Promise`<`boolean`\>

自定义检验

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` \| `File`[] |

##### Returns

`boolean` \| `Promise`<`boolean`\>
