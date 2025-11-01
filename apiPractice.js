api = "https://apis.scrimba.com/bored/api"
endpoint = "/activity"

async function getData() {
    const res = await fetch(api+endpoint)
    console.log(res)
    const data = await res.json()
    console.log(data)
}

// getData()

async function getAllPosts() {
   try {
        const res = await fetch("https://apis.scrimba.com/jsonplaceholder/posts")
        const data = await res.json()
        console.log(data)
   }
   catch (err) {
        console.log(err)
   }
   finally {
        console.log("The operation is completed")
   }
}

// getAllPosts()

async function posts() {
     try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts",
          {
                    method: "POST",
                    body: JSON.stringify(
                         {
                              title:"foo",
                              body:"bar",
                              userId:1
                         }
                    ),
                    headers: {
                         'Content-Type': 'application/json'
                    }
          }
          )
          const data = await res.json()
          console.log(data)
     }
     catch (err) {
          console.log(err)
     }

     finally {
          console.log("POST request is completed")
     }
}

// posts()

const arr = [1,2,3,4,5]

console.log(
     arr.filter(
          a => a>3
     ).reduce((acc, val) => {return acc+val})
)

console.log(arr.map(
     a => a*3
))

