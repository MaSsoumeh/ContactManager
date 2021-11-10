import React, { useState } from 'react';

const AddContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('All fields are required!');
      return;
    }
    props.addContactHandler({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className='ui piled segment'>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={add}>
        <div className='field'>
          <label style={{ color: 'brown' }}>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name . . .'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>

        <div className='field'>
          <label style={{ color: 'brown' }}>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email . . .'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <button className='ui blue button'>Add</button>
      </form>
    </div>
  );
};
export default AddContact;
