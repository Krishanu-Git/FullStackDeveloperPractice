
const promise = new Promise(
     (resolve, reject) => {
          const success = Math.random() > 0.5
          if (success) {
               resolve("operation successful")
          }
          else {
               reject("operation failed")
          }
     }
)

try {
     const res = await promise
     console.log(res)
}
catch (err) {
     console.log(err)
}