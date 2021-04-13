import { useEffect, useState } from 'react';
import ws from 'utilities/websocket';

const Home = () => {
  const [name, setName] = useState();
  const [uid, setUid] = useState();
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    ws.addEventListener('open', (e) => {
      //
    });

    ws.addEventListener('message', (e) => {
      const { uid, text, users: usersList } = JSON.parse(e.data);
      if (uid) setUid(uid);
      if (text !== undefined) setText(text);
      setUsers(usersList);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    ws.send(JSON.stringify({ name }));
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleTextFieldChange = (e) => {
    setText(e.target.value);
    ws.send(JSON.stringify({ uid, text: e.target.value }));
  };

  return (
    <>
      <>ET phone home</>
      {uid ? (
        <>
          <h1>Signed in!</h1>
          <h3>Name: {name}</h3>
          <h3>UID: {uid}</h3>
          <hr />
          <h1>Other users:</h1>
          <ul>
            {users.length &&
              users.map((user) => {
                return <li key={`user-list-${user.uid}`}>{user.name}</li>;
              })}
          </ul>
          <hr />
          <h1>Write nice messages to each other:</h1>
          <textarea value={text} onChange={handleTextFieldChange} />
        </>
      ) : (
        <>
          <input type='text' onChange={handleInputChange} />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </>
  );
};

export default Home;
