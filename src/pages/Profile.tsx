import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateProfile, deleteUser } from 'firebase/auth';
import styles from '../styles/auth-styles';

const Profile = () => {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!user) {
      setError('User not found');
      return;
    }
    try {
      await updateProfile(user, { displayName: displayName });
      setSuccess('Profile updated successfully!');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      if (!user) {
        setError('User not found');
        return;
      }
      await deleteUser(user);
      setSuccess('Account deleted successfully!');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div style={styles.form}>
      <h1>Profile</h1>
      <form onSubmit={handleUpdateProfile}>
        <input
          type='text'
          style={styles.input}
          placeholder='Name'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type='email'
          style={styles.input}
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={true}
        />
        <button type='submit' style={styles.button}>
          Update Profile
        </button>
        {success && <p style={styles.success}>{success}</p>}
        {error && <p style={styles.error}>{error}</p>}
        <div>
          <button
            type='button'
            style={styles.deleteAccountButton}
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;
