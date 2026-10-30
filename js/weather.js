const weatherInfo = document.querySelector("#weather-info");

navigator.geolocation.getCurrentPosition(success, error);
async function success(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  console.log(lat, lon);

  let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code`;
  const response = await fetch(url);
  const { current } = await response.json();
  console.log(current);

  const descriptions = {
    0: "맑은 하늘",
    1: "대체로 명확함",
    2: "부분적으로 흐림",
    3: "흐린",
    45: "안개",
    48: "서리 안개 형성",
    51: "가벼운 이슬비",
    53: "적당한 이슬비",
    55: "굵은 이슬비",
    56: "가벼운 진눈깨비",
    57: "짙은 얼음비",
    61: "약간의 비",
    63: "적당한 비",
    65: "폭우",
    66: "가벼운 진눈깨비가 내립니다.",
    67: "폭우와 함께 얼음비가 내립니다.",
    71: "약간의 눈이 내렸다",
    73: "적당한 눈",
    75: "폭설",
    77: "눈 알갱이",
    80: "가벼운 소나기",
    81: "적당한 소나기",
    82: "폭우",
    85: "약간의 눈 소나기",
    86: "폭설",
    95: "뇌우",
    96: "약간의 우박을 동반한 천둥번개 *",
    97: "강한 뇌우",
    99: "우박을 동반한 천둥번개 *",
  };

  const weather = `${descriptions[current.weather_code]}  온도: ${current.temperature_2m} 습도:${current.relative_humidity_2m}`;
  console.log(weather);
  weatherInfo.textContent = weather;
}
function error() {
  console.log("에러");
}
