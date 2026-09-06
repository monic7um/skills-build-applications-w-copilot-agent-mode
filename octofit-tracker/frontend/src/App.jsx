import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/"><span className="brand-mark">OF</span><span>OctoFit <em>Tracker</em></span></NavLink>
        <span className="season-label">Mergington / Fall 2026</span>
      </header>
      <nav className="primary-nav" aria-label="Primary navigation">
        <NavLink end to="/">Overview</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/users">Athletes</NavLink>
      </nav>
      <main><Routes><Route element={<PageFrame />}><Route index element={<Overview />} /><Route path="activities" element={<Activities />} /><Route path="workouts" element={<Workouts />} /><Route path="leaderboard" element={<Leaderboard />} /><Route path="teams" element={<Teams />} /><Route path="users" element={<Users />} /></Route></Routes></main>
      <footer>OctoFit Tracker <span>Move with purpose.</span></footer>
    </div>
  )
}

function PageFrame() { return <Outlet /> }

function Overview() {
  return <section className="content-section overview"><div className="section-heading"><span className="eyebrow">Your weekly rhythm</span><h1>Make today<br /><i>count.</i></h1><p>Track the small wins that build a stronger, more connected crew.</p></div><div className="overview-strip"><div><strong>05</strong><span>days active</span></div><div><strong>1,945</strong><span>team points</span></div><div><strong>12</strong><span>sessions logged</span></div></div><NavLink className="text-link" to="/activities">See recent activities <span>→</span></NavLink></section>
}

export default App
