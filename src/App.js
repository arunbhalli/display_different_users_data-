import React from 'react';
import users from './users-data';
function App() {
  return (
    <div className="App">
      <div className='page-deets'>
        <div className='heading'>
        <h1>Users information</h1>
        </div>
      </div>
      <div className="users">
      {users.map((user, index)=> 
        <div key={index}>
          <h3 data-cy='name'>Name:{user.name}</h3> 
          <p data-cy='location'>Location: {user.location}</p>
          <p data-cy='car'>Owned car:{user.car}</p>
          <p data-cy='age'>Age :{user.age}</p>
        </div>      
        )}
      </div>
    </div>
  );
}

export default App;
