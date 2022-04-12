// 비동기 - 콜백과 프로미스 객체

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

// 비동기 예외 처리(then, catch, finally)
function A() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('A')
      resolve()
    }, 1000)
  })
}

function B() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('B')
      resolve()
    }, 1000)
  })
}

function C() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('C')
      resolve()
    }, 1000)
  })
}

function D() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('D')
      resolve()
    }, 1000)
  })
}

function TEST() {
  const promise = a()

  // A().then(() => {
  //   console.log('B')
  // )}
  promise.then(() => {
    console.log('B')
  })
}
TEST()

// 비권장
function TEST2() {
  A().then(() => {
    B().then(() => {
      C().then(() => {
        D().then(() => {
          console.log('Done')
        })
      })
    })
  })
}

function TEST3() {
  A().then(() => {
    return B()
  }).then(() => {
    return C()
  }).then(() => {
    return D()
  }).then(() => {
    console.log('Done')
  })
}

function TEST4() {
  A()
    .then(() => B())
    .then(() => C())
    .then(() => D()  )
    .then(() => {
      console.log('Done')
    })
}


function A1(number) {
  return new Promise((resolve, reject) => {
    if( number > 4 ) {
      reject() // resolve() 콜백함수가 작동하지 않게된다
      return
    }
    setTimeout(() => {
      console.log('A')
      resolve()
    }, 1000)
  })
}

// then, catch, finally
function Atest() {
  A1()
    .then(() => {
      console.log('resolve')
    })
    .catch(() => {
      console.log('reject')
    })
    .finally(() => {
      console.log('Done')
    })
}

// try, catch, finally
async function Atest2() {
  try {
    await A1(5)
    console.log('resolve')
  } catch(error) {
    console.log('reject')
  } finally {
    console.log('Done')
  }
}