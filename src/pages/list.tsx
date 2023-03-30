import React from 'react'

const List = ({users}: any) => {
  return (
    <div>
      {
        users?.map((user: any, index: number) => 
          <div key={`${user.id}-${index}`} className="card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
          </div>
        )
      }
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();

    return {
      props: {
        users
      },
    }
  } catch (error) {
    console.log(error)
    return {}
  }
}


export default List
