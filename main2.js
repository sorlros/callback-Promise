// 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
// 이행(fulfilled): 연산이 성공적으로 완료됨.
// 거부(rejected): 연산이 실패함.

function fetchMovies(title) {
  // 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
  const OMDB_API_KEY = '7035c60c'
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
      // 이행(fulfilled): 연산이 성공적으로 완료됨.
      resolve(res)
    } catch(error) {
      console.log(error.message)
      // 거부(rejected): 연산이 실패함.
      reject('ERROR')
    } finally {
      console.log('Done')
    }
  }) 
}

async function test() {
  try {
    const res = await fetchMovies('frozen')
    console.log(res)
  } catch(error) {
    console.log(error)
  }
}
test()

function hello() {
  fetchMovies('jobs')
    .then(res => console.log(res))
    .catch(error => { console.log(error) })
}
hello()