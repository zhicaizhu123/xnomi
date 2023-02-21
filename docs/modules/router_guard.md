[xnomi工具库](../README.md) / [Modules](../modules.md) / router-guard

# Module: router-guard

## Table of contents

### Type Aliases

- [AfterMiddlewareFn](router_guard.md#aftermiddlewarefn)
- [BeforeMiddlewareFn](router_guard.md#beforemiddlewarefn)

### Variables

- [afterEachHook](router_guard.md#aftereachhook)
- [beforeEachHook](router_guard.md#beforeeachhook)
- [beforeResolveHook](router_guard.md#beforeresolvehook)

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
