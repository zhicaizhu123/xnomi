[xnomi工具库](../README.md) / [Modules](../modules.md) / [oss-tools](../modules/oss_tools.md) / OssQuality

# Interface: OssQuality

[oss-tools](../modules/oss_tools.md).OssQuality

设置质量

## Table of contents

### Properties

- [Q](oss_tools.OssQuality.md#q)
- [q](oss_tools.OssQuality.md#q-1)

## Properties

### Q

• `Optional` **Q**: `number`

设置图片的绝对质量，将原图质量压缩至Q%，如果原图质量小于指定参数值，则按照原图质量重新进行压缩。
例如原图质量是95%，添加quality,Q_90参数会得到质量90％的图片。原图质量是80%，添加quality,Q_90只能得到质量80%的图片。
- [1, 100]

___

### q

• `Optional` **q**: `number`

设置图片的相对质量，对原图按百分比进行质量压缩。
例如原图质量为100%，添加quality,q_90参数会得到质量为90％的图片。原图质量为80%，添加quality,q_90参数会得到质量72%的图片。
- [1,100]
