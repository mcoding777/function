/**
 * randomNumber
 * : 0 이상 n 미만의 임의의 정수를 생성하여 반환
 *
 * @param n 생성할 난수 범위
 */

export function randomNumber(n) {
    return Math.floor(Math.random() * n)
}