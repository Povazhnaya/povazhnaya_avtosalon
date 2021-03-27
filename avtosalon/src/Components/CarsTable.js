import React from 'react';

import GroupOfButtons from '../Components/GroupOfButtons';

const CarsTable = () => {
  return(
    <table align="center" className="cars">
      <thead>
        <tr>
          <th>id</th>
          <th>Car Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Car 1</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Car 2</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Car 3</td>
          <td>
            <GroupOfButtons />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CarsTable;