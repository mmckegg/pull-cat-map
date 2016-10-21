pull-cat-map
===

Map pull-streams to other pull-streams then concat together.

Works like `pull.map` except you can return streams as well as normal values. If you return a stream, it will drain before moving on to the next value.
