import {React,useState} from 'react' 
function App() {

  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  function handlePassword(event){
    const newpassword=event.target.value ;
    setPassword(newpassword)
        let strength;
        const criteria = [
          { regex: /.{8,}/ },           // At least 8 characters
          { regex: /[A-Z]/ },           // At least one uppercase letter
          { regex: /[a-z]/ },           // At least one lowercase letter
          { regex: /[^A-Za-z0-9]/ },    // At least one special character
          { regex: /[0-9]/ }            // At least one digit
        ];
       const passwordCriteria=criteria.filter((criterion)=>criterion.regex.test(newpassword))
        switch (passwordCriteria.length){
          case 5:
            strength="very Strong"
            break
          case 4 :
            strength="strong"
            break
          case 3 :
            strength="medium"
            break
          default :
            strength="weak please give strong password"
            break;
          }
          setStrength(strength)
      }
  return (
    <div className="App">
      <label>Password Checker</label>
     <input type="password" value={password} onChange={handlePassword} placeholdername="enter your pwd"/>
     <small>Password strength: {strength}</small>

    </div>
  );
}

export default App;
