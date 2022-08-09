/**
 * randomColor
 * : 임의의 컬러(HEX 코드)를 생성해서 반환
 */

 function randomColor() {
    const color = `#${Math.round(Math.random() * 0xffffff).toString(16)}`
    return color
  }