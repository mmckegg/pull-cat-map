pull-cat-map
===

Map [pull-streams](https://github.com/pull-stream/pull-stream) to other pull-streams then [concat](https://github.com/pull-stream/pull-cat) together.

Works like [`pull.map`](https://github.com/pull-stream/pull-stream/blob/master/docs/throughs/map.md) except you can return streams as well as normal values. If you return a stream, it will drain before moving on to the next value.

## Install

```shell
$ npm install --save pull-cat-map
```
