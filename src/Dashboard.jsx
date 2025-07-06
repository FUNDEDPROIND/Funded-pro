import { useEffect, useState } from 'react';
import { auth, db, doc, getDoc, signOut } from './firebase';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      getDoc(doc(db, 'users', user.uid)).then(docSnap => {
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        }
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome, {userInfo?.name}</h2>
      <p className="mb-4">Email: {userInfo?.email}</p>
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}
