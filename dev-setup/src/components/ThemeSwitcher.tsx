import React from 'react'

export default function ThemeSwitcher() {
  function setTheme(id: string) {
    const root = document.documentElement
    root.classList.remove('theme-colorful', 'theme-dark')
    root.classList.add(id)
  }

  return (
    <div className="theme-switcher" aria-hidden>
      <button
        className="theme-btn"
        title="Colorful theme"
        onClick={() => setTheme('theme-colorful')}
        aria-label="Colorful theme"
      >
        {/* palette icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7 3 3 7 3 12c0 2.7 1.2 5.2 3.4 6.8C8.6 20.8 10 21 11 21c2.8 0 5-2.2 5-5 0-1 .2-2.4 1.2-4.6C18.8 8.2 15.2 3 12 3z" fill="currentColor"/>
        </svg>
      </button>

      <button
        className="theme-btn"
        title="Dark theme"
        onClick={() => setTheme('theme-dark')}
        aria-label="Dark theme"
      >
        {/* moon icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  )
}
