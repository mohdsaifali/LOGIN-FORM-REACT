import './Signup.css'

const Signup = () => {
  return (
    <div className='signup'>
        <h1>Sign Up</h1>
        <h2>Create Account</h2>
        <h3>and new skills ASAP for super afforable cost</h3>
        <form>
            <input type={"text"} placeholder={'Name'} />
            <input type={"email"} placeholder={'Email'} />
            <input type={"password"} placeholder={'password'} />
            <input type={"password"} placeholder={'Confirm Password'} />
            <button type={'submit'}>Signup</button>
        </form>

    </div>
  )
}

export default Signup