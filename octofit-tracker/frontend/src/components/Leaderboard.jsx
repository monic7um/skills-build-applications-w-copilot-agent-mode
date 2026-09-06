import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => { fetchCollection('leaderboard').then(setEntries).catch(() => setError('Leaderboard is unavailable.')) }, [])

  return <section className="content-section"><div className="section-heading"><span className="eyebrow">Friendly competition</span><h1>Leaderboard</h1><p>Points earned through consistent movement.</p></div>{error && <p className="status-message">{error}</p>}<div className="ranking-list">{entries.sort((a, b) => a.rank - b.rank).map((entry) => <article className="ranking-row" key={entry._id}><span className="rank">{String(entry.rank).padStart(2, '0')}</span><div><strong>{entry.userId?.name || 'OctoFit athlete'}</strong><small>{entry.points} points</small></div></article>)}</div>{!error && entries.length === 0 && <p className="status-message">No rankings yet.</p>}</section>
}

export default Leaderboard