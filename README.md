
# socket.io-wx-client

**socket.io client for wechat app and game**

2018/5/10 by DKZ

fork from socket.io-client v2.1.0

add engine.io-client v3.2.1

## How to use

A standalone build of `socket.io-client` is exposed automatically by the
socket.io server as `/socket.io/socket.io.js`. Alternatively you can
serve the file `socket.io.js` found in the `dist` folder.

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io('http://localhost');
  socket.on('connect', function(){});
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
</script>
```

```js
// with ES6 import
import io from 'socket.io-client';

const socket = io('http://localhost');
```

A slim build (without `JSON3`, a JSON polyfill for IE6/IE7, and `debug`) is also available: `socket.io.slim.js`.

Socket.IO is compatible with [browserify](http://browserify.org/) and [webpack](https://webpack.js.org/) (see example [there](https://github.com/socketio/socket.io/tree/2.0.3/examples/webpack-build)).

### Node.JS (server-side usage)

  Add `socket.io-client` to your `package.json` and then:

  ```js
  var socket = require('socket.io-client')('http://localhost');
  socket.on('connect', function(){});
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
  ```

## API

See [API](/docs/API.md)

## License

[MIT](/LICENSE)
