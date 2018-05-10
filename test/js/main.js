
/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    wx.request({
        url:'http://127.0.0.1:9008/signin',
        success:function(res){
            console.log('signin',res)
            var cookieobj=parseSetCookie(res.header['Set-Cookie']);
            var cookies='id='+cookieobj['id']+'; session='+cookieobj['session'];
            testSocketIO(cookies);
        }
    })

    function parseSetCookie(cookies){
        var result={};
        var arr=cookies.split(';')
        for(var x of arr){
            var carr=x.split(',')
            for(var y of carr){
                var cookie=y.trim().split('=');
                if(cookie.length==2){
                    result[cookie[0]]=cookie[1];
                }
            }
        }
        return result;
    }

    function testSocketIO(cookies){
        var url='http://127.0.0.1:9004/campfireio'
        var opts={
            'transportOptions':{
                'polling':{
                    'extraHeaders':{'Cookie':cookies}
                }
            },
            'forceBase64':true
        }
        var testio=io(url,opts).connect();
        testio.on('fail',data=>{
            console.log('@fail',data);
        })
        testio.on('get_info',data=>{
            console.log('@get_info',data);
            var info = {
                'room_token': 'test',
            };
            testio.emit('send_info', info);
        })
        testio.on('set_info',data=>{
            console.log('@send_info',data);
        })
        testio.emit('join',{'room_token':'test'})
    }
    

    // 维护当前requestAnimationFrame的id
    // this.aniId = 0

    // this.restart()
  }
}
