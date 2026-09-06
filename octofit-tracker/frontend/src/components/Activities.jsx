import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('activities').then(setActivities).catch(() => setError('Activities are unavailable.'))
  }, [])

  return (
    <section className="content-section">
      <div className="section-heading"><span className="eyebrow">Movement log</span><h1>Activities</h1><p>Recent effort across the OctoFit crew.</p></div>
      {error && <p className="status-message">{error}</p>}
      <div className="data-grid">
        {activities.map((activity) => <article className="data-card" key={activity._id}><span className="card-kicker">{activity.type}</span><strong>{activity.durationMinutes} min</strong><p>{activity.calories} calories · {new Date(activity.completedAt).toLocaleDateString()}</p></article>)}
      </div>
      {!error && activities.length === 0 && <p className="status-message">No activities logged yet.</p>}
    </section>
  )
}

export default Activities