import { randomNumber } from './randomNumber'

/**
 * randomMinMaxString
 * : 최소값 ~ 최대값 사이의 길이를 가지는 임의의 문자열(소문자)을 생성하여 반환
 * 
 * @param min 글자 수 최소값
 * @param max 글자 수 최대값
 */

function randomMinMaxString(min, max) {
    const len = randomNumber(max - min) + min
    let result = ''

    for (let i = 0; i < len; i++) {
      result += String.fromCharCode(randomNumber(26) + 97) // 소문자
    }

    return result
  }