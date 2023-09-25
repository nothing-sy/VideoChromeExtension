const pList = document.querySelectorAll('p')
console.log(pList)
pList.forEach(el => {
  el.addEventListener('click', (e) => {
    const url = e.target.getAttribute('data-url');
    chrome.windows.getCurrent((window) => {
      console.log(window)
    })
    // window.open(url+ window.location.href, '_blank')
  })
})