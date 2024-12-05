import React, { useEffect, useState, useMemo } from 'react'; 
import axios from 'axios'; 

const UserList = ({ onSelectUser, searchQuery }) => {


  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    
    const fetchData = async () => {// Define an asynchronous function to fetch user data
      try {
        setLoading(true); 
        const response = await axios.get('https://api.github.com/users'); 
        setUsers(response.data); 
        setLoading(false); // Set loading to false after the data is fetched

      } catch (err) {

        setError('Failed to fetch user data.'); 
        setLoading(false); // Set loading to false since the request failed
      }
    };
    
    fetchData(); 
  }, []); 

  // Memoize the filtered users list to optimize performance
  const filteredUsers = useMemo(() => {
    
    return users.filter((user) =>
      user.login.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, users]); 

  if (loading) return <p>Loading...</p>; // Render loading text if data is being fetched
  if (error) return <p>{error}</p>; // Render error message if data fetching fails

  return (
    <ul>
      {filteredUsers.map((user) => (
        // Render a list of users
        <li key={user.id} onClick={() => onSelectUser(user)}>
          {user.login} 
        </li>
      ))}
    </ul>
  );
};

export default UserList; 
