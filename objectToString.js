// 객체를 문자열로 바꿔주는 함수
// 인자 값 {'B1':'1', 'B2':'2', 'B3':'3', ...}
// 반환 값 "B1:1, B2:2, B3:3"

function objectToString(object) {
    let result = ""
    
    for (let i in object) {
        result = result + " " + `${i}:${object[i]}`;
    }
    
    return result.trim();
}