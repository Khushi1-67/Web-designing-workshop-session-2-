import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [users, setUsers] = useState([])
  const [success, setSuccess] = useState(false)

  const handleRegister = () => {
    if (name === '' || email === '' || password === '') {
      alert('Please fill all fields')
      return
    }

    const newUser = { name, email }
    setUsers([...users, newUser])
    setSuccess(true)
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Registration Form</h2>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div style={styles.passwordWrapper}>
          <input
            style={styles.input}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            style={styles.eyeIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </span>
        </div>

        <button style={styles.button} onClick={handleRegister}>
          Register
        </button>

        {success && (
          <p style={styles.successMsg}>Registration Successful</p>
        )}

        {users.length > 0 && (
          <div style={styles.userBox}>
            <h3 style={styles.userTitle}>Registered Users</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}


export default App