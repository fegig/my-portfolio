import React from 'react'
import QuizzerHeader from './QuizzerHeader'

function QuizzerHome() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-yellow-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-yellow-100/80 blur-3xl" />

        <QuizzerHeader />

        <main className="mx-auto max-w-6xl px-6 pb-16">
          <section className="grid items-center gap-12 py-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-700">
                Gaming + Studying Platform
              </div>
              <h1 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
                Quizzer Study/Play/Earn makes learning feel like a game you cannot put down.
              </h1>
              <p className="text-lg text-neutral-700">
                Challenge yourself with rapid-fire quizzes, climb leaderboards, and turn your knowledge into real rewards.
                Quizzer is built for learners who want momentum and for players who want meaningful wins.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-neutral-900 shadow-sm transition hover:bg-yellow-300"
                  href="https://play.google.com/store/apps/details?id=com.fegig.quizzer"
                  rel="noreferrer"
                  target="_blank"
                >
                  Download on Play Store
                </a>
                <div className="text-sm text-neutral-600">
                  Play Store ID: <span className="font-semibold text-neutral-900">com.fegig.quizzer</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-700">
                <div className="rounded-2xl border border-yellow-200 bg-white px-4 py-3 shadow-sm">
                  100+ bite-size quiz modes
                </div>
                <div className="rounded-2xl border border-yellow-200 bg-white px-4 py-3 shadow-sm">
                  Earn points every session
                </div>
                <div className="rounded-2xl border border-yellow-200 bg-white px-4 py-3 shadow-sm">
                  Compete with friends
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-yellow-200 bg-white/80 p-6 shadow-lg backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-yellow-700">Today in Quizzer</p>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">Live</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-neutral-900">Level up your streak</h2>
                <p className="mt-2 text-sm text-neutral-700">
                  Complete 5 quizzes in a row to unlock bonus points and double rewards on your next match.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-yellow-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">Streak</p>
                    <p className="text-2xl font-bold text-neutral-900">5/5</p>
                    <p className="text-xs text-neutral-600">Bonus unlocked</p>
                  </div>
                  <div className="rounded-2xl bg-yellow-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">Rewards</p>
                    <p className="text-2xl font-bold text-neutral-900">2x</p>
                    <p className="text-xs text-neutral-600">Next match boost</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">Leaderboard</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-yellow-50 px-4 py-3">
                    <span className="text-sm font-semibold text-neutral-900">1. Amina</span>
                    <span className="text-sm font-semibold text-yellow-700">9,420 pts</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <span className="text-sm font-semibold text-neutral-900">2. Jordan</span>
                    <span className="text-sm font-semibold text-yellow-700">8,975 pts</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <span className="text-sm font-semibold text-neutral-900">3. You</span>
                    <span className="text-sm font-semibold text-yellow-700">8,540 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900">Study</h3>
                <p className="mt-3 text-sm text-neutral-700">
                  Curated questions across core subjects, with smart difficulty that adapts to keep you in the flow.
                </p>
              </div>
              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900">Play</h3>
                <p className="mt-3 text-sm text-neutral-700">
                  Fast matches, live challenges, and surprise rounds that turn every session into a game night.
                </p>
              </div>
              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900">Earn</h3>
                <p className="mt-3 text-sm text-neutral-700">
                  Rack up points for streaks, leaderboards, and special events to unlock rewards and status.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8">
              <h2 className="text-2xl font-bold text-neutral-900">How Quizzer Works</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">Step 1</p>
                  <p className="mt-2 text-sm font-semibold text-neutral-900">Pick a topic</p>
                  <p className="mt-1 text-xs text-neutral-600">Choose a subject or a daily challenge.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">Step 2</p>
                  <p className="mt-2 text-sm font-semibold text-neutral-900">Play the round</p>
                  <p className="mt-1 text-xs text-neutral-600">Answer fast and keep your streak alive.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">Step 3</p>
                  <p className="mt-2 text-sm font-semibold text-neutral-900">Earn points</p>
                  <p className="mt-1 text-xs text-neutral-600">Score bonuses for speed and accuracy.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">Step 4</p>
                  <p className="mt-2 text-sm font-semibold text-neutral-900">Redeem rewards</p>
                  <p className="mt-1 text-xs text-neutral-600">Turn points into perks and status.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-neutral-900">Built for fair play</h2>
                <p className="mt-3 text-sm text-neutral-700">
                  Quizzer rewards consistency, accuracy, and smart strategy. Our anti-cheat and fair scoring system
                  protect every match so your wins actually mean something.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                  <li>Real-time scoring with transparent multipliers.</li>
                  <li>Adaptive difficulty to keep matches competitive.</li>
                  <li>Event-based challenges with unique rewards.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-neutral-900">Privacy-first learning</h2>
                <p className="mt-3 text-sm text-neutral-700">
                  We focus on the progress that matters and keep your personal data minimal. You stay in control of
                  your profile, and you can request deletion anytime.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                  <li>Only essential profile info is required to play.</li>
                  <li>No selling of personal data.</li>
                  <li>Clear controls for account and data deletion.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="rounded-3xl border border-yellow-200 bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">Ready to study, play, and earn?</h2>
              <p className="mt-3 text-sm text-neutral-700">
                Join Quizzer today and turn every study session into a win.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  className="rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-neutral-900 shadow-sm transition hover:bg-yellow-300"
                  href="https://play.google.com/store/apps/details?id=com.fegig.quizzer"
                  rel="noreferrer"
                  target="_blank"
                >
                  Get Quizzer on Play Store
                </a>
                <a
                  className="rounded-full border border-yellow-300 px-6 py-3 text-base font-semibold text-yellow-700 transition hover:bg-yellow-50"
                  href="/quizzer/privacy-policy"
                >
                  Read the Privacy Policy
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default QuizzerHome
