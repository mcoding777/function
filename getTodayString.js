/**
 * getTodayString
 * : 오늘 날짜를 원하는 문자열 형태로 가공해서 반환
 * 
 * @returns YYYYMMDD 또는 YYYY.MM.DD 또는 YYYY-MM-DD 형태의 문자열
 */

function getTodayString() {
    const today = new Date(); // Mon Dec 20 2021 22:04:03 GMT+0900 (한국 표준시)

    const year = today.getFullYear(); // 2021
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // 12
    const day = ('0' + today.getDate()).slice(-2); // 20

    // 아래 주석을 해제하고 사용하세요.
    // const dateString = `${year}${month}${day}`; // 20211220
    // const dateString = `${year}.${month}.${day}`; // 2021.12.20
    // const dateString = `${year}-${month}-${day}`; // 2021-12-20

    return dateString;
}