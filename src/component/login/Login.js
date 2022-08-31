import './Login.css'
const Login = () => {
  return (
    <div className='login'>
      <h1>Neat Skills</h1>
      <h2>Log In</h2>

      <form>
      <input type={"email"} placeholder={'Email'} />
      <input type={"password"} placeholder={'Password'} />
      <div className="pass"><a href="/">Forget Password</a></div>
      <button type={'submit'}>Login</button>
      </form>
    </div>
  )
}

export default Login