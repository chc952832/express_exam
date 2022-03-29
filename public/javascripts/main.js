// 加上按鈕按下樣式
const url = window.location.pathname
const route = url.split('/')[1]  // 確認頁面跳轉之後使用者所處頁面

// 排除點擊「回到首頁」按鈕的狀況
if (route.length > 0) {
  const button = document.querySelector(`.${route}`)
  console.log(button)
  button.classList.add('clicked')
} 
