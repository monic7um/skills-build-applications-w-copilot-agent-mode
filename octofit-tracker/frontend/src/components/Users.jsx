import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('users').then(setUsers).catch(() => setError('Athletes are unavailable.')) }, [])
  return <section className="content-section"><div className="section-heading"><span className="eyebrow">The crew</span><h1>Athletes</h1><p>Meet the people making progress together.</p></div>{error && <p className="status-message">{error}</p>}<div className="data-grid">{users.map((user) => <article className="data-card profile-card" key={user._id}><span className="avatar">{user.avatar || user.name?.slice(0, 2).toUpperCase()}</span><div><strong>{user.name}</strong><p>{user.email}</p></div></article>)}</div>{!error && users.length === 0 && <p className="status-message">No athletes found.</p>}</section>
}

export default Users