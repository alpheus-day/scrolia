[@scrolia/vanilla](../README.md) / CreateScrollbar

# Type Alias: CreateScrollbar

```ts
type CreateScrollbar = object;
```

Defined in: [packages/vanilla/src/base/index.ts:21](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/vanilla/src/base/index.ts#L21)

## Properties

### attach()

```ts
attach: (el) => () => void;
```

Defined in: [packages/vanilla/src/base/index.ts:25](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/vanilla/src/base/index.ts#L25)

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

Defined in: [packages/vanilla/src/base/index.ts:29](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/vanilla/src/base/index.ts#L29)

Container functions.

***

### content

```ts
content: CreateContent;
```

Defined in: [packages/vanilla/src/base/index.ts:33](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/vanilla/src/base/index.ts#L33)

Content functions.

***

### thumbX

```ts
thumbX: CreateThumbX;
```

Defined in: [packages/vanilla/src/base/index.ts:45](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/vanilla/src/base/index.ts#L45)

Horizontal thumb functions.

***

### thumbY

```ts
thumbY: CreateThumbY;
```

Defined in: [packages/vanilla/src/base/index.ts:49](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/vanilla/src/base/index.ts#L49)

Vertical thumb functions.

***

### trackX

```ts
trackX: CreateTrackX;
```

Defined in: [packages/vanilla/src/base/index.ts:37](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/vanilla/src/base/index.ts#L37)

Horizontal track functions.

***

### trackY

```ts
trackY: CreateTrackY;
```

Defined in: [packages/vanilla/src/base/index.ts:41](https://github.com/alpheustangs/scrolia/blob/6e40d863f64abf882be181a26502e5d480dddfc9/packages/vanilla/src/base/index.ts#L41)

Vertical track functions.
