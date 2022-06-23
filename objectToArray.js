/**
 * objectToArray
 * : 객체를 배열로 바꾸는 함수
 * 
 * @returns [[key1, value1], [key2, value2], ...]
 */

function objectToArray(object) {
    const array = [];

    for (let i in object) {
        array.push([i, object[i]]);
    }

    return array
}
