[@scrolia/vanilla](../README.md) / CreateScrollbar

# Type Alias: CreateScrollbar

```ts
type CreateScrollbar = object;
```

Defined in: [packages/vanilla/src/base/index.ts:22](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/vanilla/src/base/index.ts#L22)

Result of the `createScrollbar` function.

## Properties

### attach()

```ts
attach: (el) => () => void;
```

Defined in: [packages/vanilla/src/base/index.ts:26](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/vanilla/src/base/index.ts#L26)

Attaches complete scrollbar function into the element.

#### Parameters

##### el

`HTMLElement`

#### Returns

```ts
(): void;
```

##### Returns

`void`

***

### container

```ts
container: CreateContainer;
```

Defined in: [packages/vanilla/src/base/index.ts:30](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/vanilla/src/base/index.ts#L30)

Container functions.

***

### content

```ts
content: CreateContent;
```

Defined in: [packages/vanilla/src/base/index.ts:34](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/vanilla/src/base/index.ts#L34)

Content functions.

***

### thumbX

```ts
thumbX: CreateThumbX;
```

Defined in: [packages/vanilla/src/base/index.ts:46](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/vanilla/src/base/index.ts#L46)

Horizontal thumb functions.

***

### thumbY

```ts
thumbY: CreateThumbY;
```

Defined in: [packages/vanilla/src/base/index.ts:50](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/vanilla/src/base/index.ts#L50)

Vertical thumb functions.

***

### trackX

```ts
trackX: CreateTrackX;
```

Defined in: [packages/vanilla/src/base/index.ts:38](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/vanilla/src/base/index.ts#L38)

Horizontal track functions.

***

### trackY

```ts
trackY: CreateTrackY;
```

Defined in: [packages/vanilla/src/base/index.ts:42](https://github.com/alpheus-day/scrolia/blob/a7062c82222b0dcb500e88f7ca3fff69b13a5fcd/packages/vanilla/src/base/index.ts#L42)

Vertical track functions.
