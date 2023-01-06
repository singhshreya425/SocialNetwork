import React, { useState } from 'react';

function StudentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState(0);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name, email, mobile);
        }}
      >
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {name && email && mobile !== 0 ? (
        <div style={{ marginTop: '10px' }}>
          Things you have filled up: <br />
          Name: {name} <br />
          Email: {email} <br />
          Mobile: {mobile} <br />
        </div>
      ) : null}
    </div>
  );
}

export default StudentForm;