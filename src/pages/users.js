import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

function users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        axios.get('/api/users').then((response) => {
            setUsers(response.data)
            console.log(users);
        });
    }
    return (
        <div>
            <table class="table">
                <tbody>
                    {users && users.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default users