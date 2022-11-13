import React from 'react'

const Records = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>User ID</th>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Body</th>
                <th scope='col'>Email</th>

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.postId} </td>
                    <td>{item.id} </td>
                    <td>{item.name} </td>
                    <td>{item.body} </td>
                    <td>{item.email} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records  