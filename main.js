// function a(callback) {
//   setTimeout(() => {
//     console.log('A')
//     callback()
//   }, 1000)
// }
function a() {
  // promise: 약속의 객체가 반환
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('A')
      resolve('Hello A')
    }, 1000)
  })
}

function b() {
  // promise: 약속의 객체가 반환
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('B')
      resolve('Hello B')
    }, 1000)
  })
}

function c() {
  // promise: 약속의 객체가 반환
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('C')
      resolve('Hello C')
    }, 1000)
  })
}

function d() {
  // promise: 약속의 객체가 반환
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('D')
      resolve('Hello D')
    }, 1000)
  })
}

// async function test() {
//   const res = await a()
//   console.log('res: ', res)
//   b()
// }
// test()

async function test() {
  const h1 = await a()
  const h2 = await b()
  const h3 = await c()
  const h4 = await d()
  console.log('Done')
  console.log(h1,h2,h3,h4)
}