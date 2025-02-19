import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const styles = {
    container: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#000',
      width: '100%',
      marginBottom: '1rem',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      margin: '0 1rem',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  const { user } = useAuth();

  return (
    <div style={styles.container}>
      <Link to='/' style={styles.link}>
        Home
      </Link>
      <Link to='/cart' style={styles.link}>
        Cart
      </Link>
      {user ? (
        <>
          <Link to='/profile' style={styles.link}>
            Profile
          </Link>
          <Link to='/logout' style={styles.link}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to='/login' style={styles.link}>
            Login
          </Link>
          <Link to='/register' style={styles.link}>
            Register
          </Link>
        </>
      )}
    </div>
  );
};
export default Navbar;
