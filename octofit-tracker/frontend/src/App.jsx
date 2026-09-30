import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import { apiBaseUrl } from './api.js'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

const navigation = [
  { path: '/users', label: 'Users' },
  { path: '/teams', label: 'Teams' },
  { path: '/activities', label: 'Activities' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Multi-tier fitness tracker</p>
          <h1>OctoFit Tracker</h1>
        </div>
        <span className="api-pill">API: {apiBaseUrl}</span>
      </header>

      <nav className="app-nav" aria-label="OctoFit sections">
        {navigation.map((item) => (
          <NavLink className="nav-link" key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
