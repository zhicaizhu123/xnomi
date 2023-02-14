# Module: router-guard 路由拦截器

## Table of contents

### Type Aliases

- [AfterMiddlewareFn](../wiki/router-guard%20%E8%B7%AF%E7%94%B1%E6%8B%A6%E6%88%AA%E5%99%A8#aftermiddlewarefn)
- [BeforeMiddlewareFn](../wiki/router-guard%20%E8%B7%AF%E7%94%B1%E6%8B%A6%E6%88%AA%E5%99%A8#beforemiddlewarefn)

### Variables

- [afterEachHook](../wiki/router-guard%20%E8%B7%AF%E7%94%B1%E6%8B%A6%E6%88%AA%E5%99%A8#aftereachhook)
- [beforeEachHook](../wiki/router-guard%20%E8%B7%AF%E7%94%B1%E6%8B%A6%E6%88%AA%E5%99%A8#beforeeachhook)
- [beforeResolveHook](../wiki/router-guard%20%E8%B7%AF%E7%94%B1%E6%8B%A6%E6%88%AA%E5%99%A8#beforeresolvehook)

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
