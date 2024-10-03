import React from 'react'

const PropertyDemo = (property) => {
    let ipldata =property.data
  return (
    <div>
        <h1>IPL Dashboard</h1>
        <table>
            <tr>
                <th>Team</th>
                <th>Matches</th>
                <th>Won</th>
                <th>Lost</th>
            </tr>
            {ipldata.map((data) => 
            <tr>
                <td>{data.team}</td>
                <td>{data.matches}</td>
                <td>{data.won}</td>
                <td>{data.lost}</td>
            </tr>
            )}
        </table>    
        
    </div>
  )
}

export default PropertyDemo