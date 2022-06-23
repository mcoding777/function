/**
 * randomString
 * : 임의의 문자열을 생성해서 반환
 */

function randomString() {
    return Math.random().toString(36).slice(2, 11);
  }