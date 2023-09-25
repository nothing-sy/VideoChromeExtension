const analysisUrlList = ['href="https://jx.aidouer.net/?url="', 'href="https://okjx.cc/?url="', 'href="https://www.nxflv.com/?url="', 'href="https://www.yemu.xyz/?url="', 'href="https://jx.xmflv.com/?url="', 'href="https://jx.yangtu.top/?url="', 'href="https://jx.m3u8.tv/jiexi/?url="', 'href="https://jx.blbo.cc=>4433/?url="', 'href="https://jx.jsonplayer.com/player/?url="', 'href="https://jx.blbo.cc=>4433/?url="', 'href="https://jx.nnxv.cn/tv.php?url="', 'href="https://api.qianqi.net/vip/?url="', 'href="https://123.1dior.cn/?url="', 'href="https://www.ckplayer.vip/jiexi/?url="', 'href="https://www.ckmov.vip/api.php?url="', 'href="https://jx.playerjy.com/?url="', 'href="https://ckmov.ccyjjd.com/ckmov/?url="', 'href="https://www.ckmov.com/?url="', 'href="https://www.h8jx.com/jiexi.php?url="', 'href="https://api.jiexi.la/?url="', 'href="https://jiexi.janan.net/jiexi/?url="', 'href="https://www.mtosz.com/m3u8.php?url="', 'href="https://www.pangujiexi.cc/jiexi.php?url="', 'href="https://go.yh0523.cn/y.cy?url="', 'href="https://www.1717yun.com/jx/ty.php?url="', 'href="https://jx.4kdv.com/?url="', 'href="https://www.8090g.cn/?url="', 'href="https://jx.000180.top/jx/?url="', 'href="https://www.administratorw.com/video.php?url="']

window.onload = () => {

  const wrapper = document.getElementById('wrapper')
  wrapper.append(...analysisUrlList.map((url,index) => {
    const u = url.match(/https:\/\/\S+[^"]/g)[0]
    const el = document.createElement('div')
    el.setAttribute('class', 'item')
    el.setAttribute('data-url',u)
    el.innerText = '线路' + index
    return el
  }))

  const list = document.querySelectorAll('.item')

  list.forEach(el => {
    el.addEventListener('click', async (e) => {
      const url = e.target.getAttribute('data-url');
        chrome.tabs.query({
          active: true }
          ,([tab]) => {
            //想要获取到tab.url这个参数，在manifest里面，必须配置permissions: tabs，否则无法获取
            //实际开发中请查找开发文档，会有说明某些数据是否需要开启权限
            window.open(url+tab.url, '_blnk');
        })
  
    })
  })

}