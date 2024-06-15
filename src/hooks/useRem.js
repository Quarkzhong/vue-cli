import { computed, readonly, ref } from "vue"
// 基准大小
const baseSize = 16
const fontSize = ref(16)
// 设置 rem 函数
const setRem = () => {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientHeight / 1080
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 3) + "px"
  fontSize.value = baseSize * Math.min(scale, 3)
}
// 初始化
setRem()
window.onresize = () => {
  setRem()
}
const px2rem = computed(() => {
  return (px) => {
    if (typeof px === "number") {
      return (px / 16) * fontSize.value
    } else {
      return parseFloat(px) / 16 + "rem"
    }
  }
})

const useRem = () => {
  return {
    px2rem: readonly(px2rem)
  }
}

export default useRem
