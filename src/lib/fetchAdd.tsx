
export async function fetchAdd(firstName:string, age?:string, email?: string) {
   let response =  await fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: firstName,
    email: email,
    age: age,
  })
})
.then(res => res.json())
.then(console.log);
console.log(firstName, age, email)
}