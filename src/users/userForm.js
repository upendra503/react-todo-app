import React, {useState} from 'react';


const userForm = ({getUserDetails}) => {
  // const [choreDesc, setChoreDesc] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState(); 
    const insertUser= (e) => {
      getUserDetails({'name':name, 'age':age});
      e.preventDefault();
    }
  return (
    <div className="user-form">
      <form onSubmit={insertUser}>
        <div>
          Name: <input type="text" value={name} onChange={e => setName(e.target.value)} name="name"/>
        </div>
        <div>
          Age: <input type="text" value={age} onChange={e => setAge(e.target.value)} name="age"/>
        </div>
        <div>
          Name: <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default userForm;
