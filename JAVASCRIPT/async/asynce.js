// ascync & await
// clear style of using promise

// 1. async : 자동으로 Promis로 변경
async function fetchUser() {
  //do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  /* 직렬 수행*/
  // const apple = await getApple();
  // const banana = await getBanana();
  /* 병렬 수행*/
  // 보통 사용하지 않음. 지저분한 코드
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// 병렬처리 API
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(" + "));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  //race : 배열 중 가장 먼저 전달된 값만 출력
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
