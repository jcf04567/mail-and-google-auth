import { useState } from "react";
import { auth } from "../service/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password} = e.target.elements;

    await createUserWithEmailAndPassword(auth, email.value, password.value);

    setEmail('');
    setPassword('');
  }

  const handleChangeEmail = e => {
    setEmail(e.currentTarget.value);
  }
  const handleChangePassword = e => {
    setPassword(e.currentTarget.value);

  }

  return(
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email address:</label>
          <input name="email" type="email" placeholder="email" onChange={handleChangeEmail} value={email}/>
        </div>
        <div>
        <label>password:</label>
        <input name="password" type="password"  onChange={handleChangePassword}  value={password}/>
        </div>
        <div>
          <button>SignUp</button>
        </div>

      </form>
    </div>
  );
}

export default SignUp;
