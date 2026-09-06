import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('teams').then(setTeams).catch(() => setError('Teams are unavailable.')) }, [])
  return <section className="content-section"><div className="section-heading"><span className="eyebrow">Find your people</span><h1>Teams</h1><p>Small groups, shared momentum.</p></div>{error && <p className="status-message">{error}</p>}<div className="data-grid">{teams.map((team) => <article className="data-card" key={team._id}><span className="card-kicker">Team</span><strong>{team.name}</strong><p>{team.motto || 'Keep moving together.'}</p><small>{team.members?.length || 0} members</small></article>)}</div>{!error && teams.length === 0 && <p className="status-message">No teams created yet.</p>}</section>
}

export default Teams