import axios from 'axios'

export default function fetch(options) {
  return new Promise((resolve, reject)=>{
    axios(options)
    .then(res=>{
      resolve(res.data)
    })
    .catch(err=>{
      reject(err.response.data)
    })
  })
}