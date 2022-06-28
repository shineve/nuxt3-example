export default defineEventHandler((event) => {
  console.log('run in server')
  return $fetch('https://jsonplaceholder.typicode.com/todos/1')
})

