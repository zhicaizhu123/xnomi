# Module: router-guard

## Table of contents

### Type Aliases

- [AfterMiddlewareFn](../wiki/router-guard#aftermiddlewarefn)
- [BeforeMiddlewareFn](../wiki/router-guard#beforemiddlewarefn)

### Variables

- [afterEachHook](../wiki/router-guard#aftereachhook)
- [beforeEachHook](../wiki/router-guard#beforeeachhook)
- [beforeResolveHook](../wiki/router-guard#beforeresolvehook)

## Type Aliases

### AfterMiddlewareFn

Ƭ **AfterMiddlewareFn**: (`to`: `RouteLocationNormalized`, `from`: `RouteLocationNormalized`, `next`: (`flag?`: `boolean`) => `void`) => `void`

#### Type declaration

▸ (`to`, `from`, `next`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `RouteLocationNormalized` |
| `from` | `RouteLocationNormalized` |
| `next` | (`flag?`: `boolean`) => `void` |

##### Returns

`void`

___

### BeforeMiddlewareFn

Ƭ **BeforeMiddlewareFn**: (`to`: `RouteLocationNormalized`, `from`: `RouteLocationNormalized`, `next`: `NavigationGuardNext`) => `void`

#### Type declaration

▸ (`to`, `from`, `next`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `RouteLocationNormalized` |
| `from` | `RouteLocationNormalized` |
| `next` | `NavigationGuardNext` |

##### Returns

`void`

## Variables

### afterEachHook

• `Const` **afterEachHook**: `LifecycleHook`

___

### beforeEachHook

• `Const` **beforeEachHook**: `LifecycleHook`

导出路由守卫处理器

___

### beforeResolveHook

• `Const` **beforeResolveHook**: `LifecycleHook`
