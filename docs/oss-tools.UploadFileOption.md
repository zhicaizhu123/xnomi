# Interface: UploadFileOption

[oss-tools](../wiki/oss-tools).UploadFileOption

上传的配置信息

## Table of contents

### Properties

- [accept](../wiki/oss-tools.UploadFileOption#accept)
- [dir](../wiki/oss-tools.UploadFileOption#dir)
- [getStsConfig](../wiki/oss-tools.UploadFileOption#getstsconfig)
- [maxCount](../wiki/oss-tools.UploadFileOption#maxcount)
- [maxScreen](../wiki/oss-tools.UploadFileOption#maxscreen)
- [maxSize](../wiki/oss-tools.UploadFileOption#maxsize)
- [onAbort](../wiki/oss-tools.UploadFileOption#onabort)
- [onError](../wiki/oss-tools.UploadFileOption#onerror)
- [onProgress](../wiki/oss-tools.UploadFileOption#onprogress)
- [onResume](../wiki/oss-tools.UploadFileOption#onresume)
- [onStart](../wiki/oss-tools.UploadFileOption#onstart)
- [onStop](../wiki/oss-tools.UploadFileOption#onstop)
- [onSuccess](../wiki/oss-tools.UploadFileOption#onsuccess)
- [onValidateError](../wiki/oss-tools.UploadFileOption#onvalidateerror)
- [parallel](../wiki/oss-tools.UploadFileOption#parallel)
- [partSize](../wiki/oss-tools.UploadFileOption#partsize)
- [validator](../wiki/oss-tools.UploadFileOption#validator)

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

• **getStsConfig**: () => `Promise`<[`OssConfigModel`](../wiki/oss-tools.OssConfigModel)\>

#### Type declaration

▸ (): `Promise`<[`OssConfigModel`](../wiki/oss-tools.OssConfigModel)\>

上传前用户获取oss配置信息

##### Returns

`Promise`<[`OssConfigModel`](../wiki/oss-tools.OssConfigModel)\>

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

• `Optional` **onSuccess**: (`data`: [`UploadFileItem`](../wiki/oss-tools.UploadFileItem)) => `void`

#### Type declaration

▸ (`data`): `void`

上传成功回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`UploadFileItem`](../wiki/oss-tools.UploadFileItem) |

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
