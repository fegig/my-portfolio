import React from 'react'

function QuizzerHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-400 text-lg font-bold text-neutral-900 shadow-sm">
          Q
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-600">Quizzer</p>
          <p className="text-sm font-semibold text-neutral-700">Study. Play. Earn.</p>
        </div>
      </div>

      <nav className="flex items-center gap-3 text-sm font-semibold">
        <a
          href="/quizzer"
          className="rounded-full border border-yellow-300 px-4 py-2 text-yellow-700 transition hover:bg-yellow-50"
        >
          Home
        </a>
        <a
          href="/quizzer/privacy-policy"
          className="rounded-full border border-yellow-300 px-4 py-2 text-yellow-700 transition hover:bg-yellow-50"
        >
          Privacy Policy
        </a>
        <a
          href="/quizzer/delete-account"
          className="rounded-full border border-yellow-300 px-4 py-2 text-yellow-700 transition hover:bg-yellow-50"
        >
          Delete Account
        </a>
        <a
          className="rounded-full bg-yellow-400 px-4 py-2 text-neutral-900 shadow-sm transition hover:bg-yellow-300"
          href="https://play.google.com/store/apps/details?id=com.fegig.quizzer"
          rel="noreferrer"
          target="_blank"
        >
          Get the App
        </a>
      </nav>
    </header>
  )
}

export default QuizzerHeader

