import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/v1/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const msg = data?.message || 'Login failed'
        throw new Error(msg)
      }
      setStatus('Login successful')
    } catch (err: any) {
      setStatus(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Welcome back</h2>
        <p className="auth-sub">Log in to continue.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Log in'}
          </button>
        </form>
        {status && <div className="auth-status">{status}</div>}
      </div>
    </section>
  )
}
