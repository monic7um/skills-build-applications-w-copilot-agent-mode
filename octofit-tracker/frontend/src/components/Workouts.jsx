import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('workouts').then(setWorkouts).catch(() => setError('Workouts are unavailable.')) }, [])
  return <section className="content-section"><div className="section-heading"><span className="eyebrow">Your next session</span><h1>Workouts</h1><p>Purposeful sessions for wherever you are today.</p></div>{error && <p className="status-message">{error}</p>}<div className="data-grid">{workouts.map((workout) => <article className="data-card" key={workout._id}><span className="card-kicker">{workout.difficulty}</span><strong>{workout.name}</strong><p>{workout.focus} · {workout.durationMinutes} min</p><small>{workout.exercises?.join(' · ')}</small></article>)}</div>{!error && workouts.length === 0 && <p className="status-message">No workouts available.</p>}</section>
}

export default Workouts