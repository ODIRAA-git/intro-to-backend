import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { workouts } from '../data/workouts'
import ThemeSwitcher from './ThemeSwitcher'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const dropRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" className="brand-link">Fitness<span className="accent">Moves</span></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className="nav-theme"><ThemeSwitcher /></li>
          <li className="dropdown" ref={dropRef}>
            <button className="dropbtn" onClick={() => setOpen((s) => !s)} aria-expanded={open}>
              Workouts ▾
            </button>
            {open && (
              <div className="dropdown-content">
                <div className="dropdown-inner">
                  {workouts.map((w) => (
                    <Link key={w.id} to={`/workouts/${w.id}`} onClick={() => setOpen(false)}>{w.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>
      </div>
    </nav>
  )
}
