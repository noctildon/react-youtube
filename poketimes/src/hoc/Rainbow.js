import React from 'react'

// 傳一個已經定義好的react component進來(命名為WrappedComponent),然後再用更高階的tag包住
const Rainbow = (WrappedComponent) => {

  // 隨機產生顏色
  const colors = ['red', 'blue', 'orange', 'yellow', 'green', 'black']
  const randomColor = colors[Math.floor(Math.random() * 5)]
  const className = randomColor + '-text'

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Rainbow