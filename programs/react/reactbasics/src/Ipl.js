import React from 'react'

const Ipl = () => {
 const ipldata = [
    {   
        team: "GT",
        matches:14,
        won:10,
        lost:4 
    },
    {   
        team: "CSK",
        matches:14,
        won:8,
        lost:5 
    }
]
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

export default Ipl