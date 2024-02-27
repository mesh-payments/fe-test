import React from 'react';
import styles from '../styles/UserList.module.css';
import { User } from '../model/types';

interface UserListProps {
    users: User[];
}

function UserList({ users }: UserListProps) {
    return (
        <div className={styles.users}>
           <h1>Hello</h1>
          
        </div>
    );
}

export default UserList;
