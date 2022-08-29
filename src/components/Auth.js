import classes from './Auth.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { authActions } from '../reducers/auth';

const Auth = ({children}) => {
  
  const dispatch = useDispatch()
  
  const handleLogin = e => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  
  
  return (
    <main className={classes.auth}>
      <section>
        {children}
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button >Login</button>
        </form>
        
      </section>
    </main>
  );
};

export default Auth;
