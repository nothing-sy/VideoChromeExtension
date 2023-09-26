// 解析列表
const analysisUrlList = [
  {
    "url": 'https://jx.777jiexi.com/player/?url=',
    "name": 'JSON Player'
  },
  {
      "url": "https://jx.aidouer.net/?url=",
      "name": "爱豆"
  },
  {
      "url": "https://okjx.cc/?url=",
      "name": "OK解析"
  },
  {
      "url": "https://im1907.top/?jx=",
      "name": "纯净/B站"
  },
  {
      "url": "https://www.nxflv.com/?url=",
      "name": "诺讯"
  },
  {
      "url": "https://www.yemu.xyz/?url=",
      "name": "夜幕"
  },
  {
      "url": "https://jx.xmflv.com/?url=",
      "name": "虾米"
  },
  {
      "url": "https://jx.yangtu.top/?url=",
      "name": "yangtu"
  },
  {
      "url": "https://jx.m3u8.tv/jiexi/?url=",
      "name": "M3U8.TV"
  },
  {
      "url": "https://jx.blbo.cc=>4433/?url=",
      "name": "人人迷"
  },
  {
      "url": "https://jx.jsonplayer.com/player/?url=",
      "name": "综合/B站"
  },
  {
      "url": "https://jx.blbo.cc=>4433/?url=",
      "name": "全民"
  },
  {
      "url": "https://jx.nnxv.cn/tv.php?url=",
      "name": "七哥"
  },
  {
      "url": "https://api.qianqi.net/vip/?url=",
      "name": "冰豆"
  },
  {
      "url": "https://123.1dior.cn/?url=",
      "name": "迪奥"
  },
  {
      "url": "https://www.ckplayer.vip/jiexi/?url=",
      "name": "CK"
  },
  {
      "url": "https://www.ckmov.vip/api.php?url=",
      "name": "ckmov"
  },
  {
      "url": "https://jx.playerjy.com/?url=",
      "name": "playerjy/B站"
  },
  {
      "url": "https://ckmov.ccyjjd.com/ckmov/?url=",
      "name": "ccyjjd"
  },
  {
      "url": "https://www.ckmov.com/?url=",
      "name": "诺诺"
  },
  {
      "url": "https://www.h8jx.com/jiexi.php?url=",
      "name": "H8"
  },
  {
      "url": "https://vip.bljiex.com/?v=",
      "name": "BL"
  },
  {
      "url": "https://api.jiexi.la/?url=",
      "name": "解析la"
  },
  {
      "url": "https://jiexi.janan.net/jiexi/?url=",
      "name": "MUTV"
  },
  {
      "url": "https://www.mtosz.com/m3u8.php?url=",
      "name": "MAO"
  },
  {
      "url": "https://www.pangujiexi.cc/jiexi.php?url=",
      "name": "盘古"
  },
  {
      "url": "https://go.yh0523.cn/y.cy?url=",
      "name": "0523"
  },
  {
      "url": "https://www.1717yun.com/jx/ty.php?url=",
      "name": "17云"
  },
  {
      "url": "https://jx.4kdv.com/?url=",
      "name": "4K"
  },
  {
      "url": "https://www.8090g.cn/?url=",
      "name": "8090"
  },
  {
      "url": "https://jx.000180.top/jx/?url=",
      "name": "180"
  },
  {
      "url": "https://www.administratorw.com/video.php?url=",
      "name": "无名"
  }
]



window.onload = () => {

  const wrapper = document.getElementById('wrapper')
  wrapper.append(...analysisUrlList.map((item,index) => {
    const el = document.createElement('div')
    el.setAttribute('class', 'item')
    el.setAttribute('data-url',item.url)
    el.innerText = item.name
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
    return el
  }))


}