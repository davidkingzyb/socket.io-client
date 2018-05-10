/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    console.log('socket io test')
    var cookies='io=101b379e7a8840bd859b137f3934f912; id=225; session=.eJwlzjEOwjAMBdC7ZO7wYzeO08sgO7EFElMrJsTdQeICT-9dbnnGdS9H2vOKrdweqxxFtNWhMxgMDCIZ2jwW1LWB2bPOacJabV9otNrskd1FoLA6aZJU7grdI02AQPf0RTBbIMEcNhyQ_ceaI0eqJTjHztx6i7KV1xXnP0PUyucLqoUurQ.DcuFAw.hnqRMXZ7hqxKH-Le7F8FxzrfX8w'
    var url='http://127.0.0.1:9004/campfireio'
    var opts={'transportOptions':{'polling':
    {'extraHeaders':{'Cookie':cookies}}}}
    var testio=io(url,opts).connect();
    testio.on('fail',data=>{
        console.log('@fail',data);
    })
    testio.on('get_info',data=>{
        console.log('@get_info',data);
    })
    testio.emit('join',{'room_token':'test'})

    // 维护当前requestAnimationFrame的id
    // this.aniId = 0

    // this.restart()
  }
}
