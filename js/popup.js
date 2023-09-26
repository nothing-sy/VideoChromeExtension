// 解析列表
const analysisUrlList = [
  "https://jx.aidouer.net/?url=",
  "https://okjx.cc/?url=",
  "https://im1907.top/?jx=",
  "https://www.nxflv.com/?url=",
  "https://www.yemu.xyz/?url=",
  "https://jx.xmflv.com/?url=",
  "https://jx.yangtu.top/?url=",
  "https://jx.m3u8.tv/jiexi/?url=",
  "https://jx.blbo.cc=>4433/?url=",
  "https://jx.jsonplayer.com/player/?url=",
  "https://jx.blbo.cc=>4433/?url=",
  "https://jx.nnxv.cn/tv.php?url=",
  "https://api.qianqi.net/vip/?url=",
  "https://123.1dior.cn/?url=",
  "https://www.ckplayer.vip/jiexi/?url=",
  "https://www.ckmov.vip/api.php?url=",
  "https://jx.playerjy.com/?url=",
  "https://ckmov.ccyjjd.com/ckmov/?url=",
  "https://www.ckmov.com/?url=",
  "https://www.h8jx.com/jiexi.php?url=",
  "https://vip.bljiex.com/?v=",
  "https://api.jiexi.la/?url=",
  "https://jiexi.janan.net/jiexi/?url=",
  "https://www.mtosz.com/m3u8.php?url=",
  "https://www.pangujiexi.cc/jiexi.php?url=",
  "https://go.yh0523.cn/y.cy?url=",
  "https://www.1717yun.com/jx/ty.php?url=",
  "https://jx.4kdv.com/?url=",
  "https://www.8090g.cn/?url=",
  "https://jx.000180.top/jx/?url=",
  "https://www.administratorw.com/video.php?url="
]



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