import { useState } from 'react'
import useSWR from 'swr'

export default function Home() {
  // const url = './data.json'
  // const [data, setData] = useState({message:'', data:[]})
  const func = (...args) => fetch(...args).then(res => res.text())
  const {data} = useSWR('/data.txt', func)

  // fetch(url).then(res => res.json()).then(res => setData(res))

  return (
    <div>
      <div className='alert alert-primary text-center'>
        <h5 className='mb-4'>{data}</h5>
      </div>
      <div className='alert alert-primary text-center'>
          <table className='table bg-white'>
            <thead className="table-dark">
              <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
            </thead>
            <tbody>
              {/* {data != undefined ? data.data.map((value, key) => (
                <tr key={key}>
                  <th>{value.name}</th>
                  <th>{value.mail}</th>
                  <th>{value.age}</th>
                </tr>
              )) : <tr><th></th><td>no data.</td><td></td></tr>} */}
            </tbody>
          </table>
      </div>
    </div>
  )
}
