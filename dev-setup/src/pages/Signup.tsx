import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/v1/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const msg = data?.message || 'Registration failed'
        throw new Error(msg)
      }
      setStatus('User created successfully')
      setUsername('')
      setEmail('')
      setPassword('')
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Create account</h2>
        <p className="auth-sub">Sign up to start tracking your workouts.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Username
            <input value={username} onChange={(e) => setUsername(e.target.value)} required minLength={3} />
          </label>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
          </label>
          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Sign up'}
          </button>
        </form>
        {status && <div className="auth-status">{status}</div>}
      </div>
    </section>
  )
}
