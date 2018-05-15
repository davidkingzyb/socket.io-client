
# socket.io-wx-client

**socket.io client for wechat app and game**

2018/5/10 by DKZ

fork from socket.io-client v2.1.0

add engine.io-client v3.2.1

## How to use

A standalone build of `socket.io-client` is exposed automatically by the
socket.io server as `/socket.io/socket.io.js`. Alternatively you can
serve the file `socket.io.js` found in the `dist` folder.

```
  var socket = io('http://localhost',{
    'transportOptions':{
        'polling':{
            'extraHeaders':{'Cookie':cookies}
        }
    },
    'forceBase64':true
  });
  socket.on('connect', function(){});
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
```

## API

See [API](/docs/API.md)

## License

[MIT](/LICENSE)
