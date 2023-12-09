
export async function fetchEdits(slug:any, firstName:string, age?:string, email?: string, phone?: string, city?:string, bloodGroup?: string) {
   let response =  fetch(`https://dummyjson.com/users/${slug}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName,
          age: age,
          email: email,
          phone: phone,
          city: city,
          bloodGroup: bloodGroup
        })
      })
      .then(res => res.json())
      .then(console.log)
      console.log(response)  
 }