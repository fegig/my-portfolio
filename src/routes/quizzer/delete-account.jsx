import React, { useState } from 'react'
import QuizzerHeader from './QuizzerHeader'

function DeleteAccountRequest() {
  const [email, setEmail] = useState('')
  const [userTag, setUserTag] = useState('')
  const [region, setRegion] = useState('')
  const [message, setMessage] = useState('I confirm that I want my Quizzer account and associated data permanently deleted.')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('https://quizzer-backend.fegigtech.workers.dev/auth/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          userTag,
          region,
          message,
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to submit request. Please try again.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-yellow-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-yellow-100/80 blur-3xl" />

        <QuizzerHeader />

        <main className="mx-auto max-w-5xl px-6 pb-16">
          {/* Intro Card */}
          <section className="py-12">
            <div className="rounded-3xl border border-yellow-200 bg-white/90 p-8 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                Account & Data Deletion
              </p>
              <h1 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
                Request to Delete Your Quizzer Account
              </h1>
              <p className="mt-3 text-sm text-neutral-700">
                You are in control of your data. This page explains how to request deletion of your Quizzer account and
                associated personal information linked to your profile.
              </p>
              <p className="mt-4 text-sm text-neutral-700">
                Once your deletion request is completed, you will lose access to your Quizzer profile, streaks, rewards,
                and any progress linked to that account.
              </p>
            </div>
          </section>

          {/* How to request deletion */}
          <section className="space-y-8 pb-12">
            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">1. How to Request Account Deletion</h2>
              <p className="mt-3 text-sm text-neutral-700">
                Use the secure form below to send a deletion request to our backend. For security reasons, make sure you
                enter the same email address you use to sign in or register in the Quizzer app.
              </p>
              <p className="mt-3 text-sm text-neutral-700">
                We may contact you at that address if we need additional information to verify ownership of the account
                before completing the deletion.
              </p>
            </div>

            {/* What gets deleted */}
            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">2. What Will Be Deleted</h2>
              <p className="mt-3 text-sm text-neutral-700">
                When your deletion request is approved and processed, we will remove or anonymize personal data linked
                to your Quizzer account, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                <li>Profile details such as display name, avatar, and optional contact information saved in-app.</li>
                <li>Gameplay history tied to your account identity, including streaks and rewards.</li>
                <li>Any in-app support messages or tickets linked directly to your profile.</li>
              </ul>
              <p className="mt-4 text-sm text-neutral-700">
                Some data may remain in secure backups or logs for a limited time where required for fraud prevention,
                security, or legal compliance, as described in the Privacy Policy.
              </p>
            </div>

            {/* Timing & status */}
            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">3. How Long It Takes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                <li>
                  We aim to review and begin processing verified deletion requests within a reasonable timeframe after
                  receiving your email.
                </li>
                <li>
                  You may receive a confirmation email once your account has been deleted or if we need any extra
                  details.
                </li>
                <li>
                  During processing, you may temporarily lose access to certain features or your account as we complete
                  removal.
                </li>
              </ul>
            </div>

            {/* Quick action card with request form */}
            <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900 text-center">Submit a Deletion Request</h2>
              <p className="mt-3 text-sm text-neutral-700 text-center max-w-2xl mx-auto">
                Fill in the details below and submit the form. Your request will be sent securely to our backend service
                at <span className="font-mono text-xs">quizzer-backend.fegigtech.workers.dev</span> for processing.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-xl mx-auto">
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1" htmlFor="email">
                    Email address used in Quizzer
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-yellow-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1" htmlFor="userTag">
                    Quizzer user tag
                  </label>
                  <input
                    id="userTag"
                    type="text"
                    required
                    value={userTag}
                    onChange={(e) => setUserTag(e.target.value)}
                    className="w-full rounded-2xl border border-yellow-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                    placeholder="User tag as shown in the app"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1" htmlFor="region">
                    Country / Region
                  </label>
                  <input
                    id="region"
                    type="text"
                    required
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full rounded-2xl border border-yellow-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                    placeholder="e.g. Nigeria"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1" htmlFor="message">
                    Confirmation
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-2xl border border-yellow-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 resize-none"
                  />
                  <p className="mt-1 text-xs text-neutral-600">
                    This confirmation text helps us verify that you understand this action is permanent.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? 'Submitting request…' : 'Submit deletion request'}
                </button>

                {status === 'success' && (
                  <p className="mt-3 text-sm text-green-700 text-center">
                    Your deletion request has been received. You will get a confirmation email once processing is
                    complete or if we need any extra details.
                  </p>
                )}

                {status === 'error' && (
                  <p className="mt-3 text-sm text-red-700 text-center">
                    {error || 'Unable to submit your request right now. Please try again later.'}
                  </p>
                )}
              </form>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  className="rounded-full border border-yellow-300 px-6 py-3 text-base font-semibold text-yellow-700 transition hover:bg-yellow-100"
                  href="/quizzer/privacy-policy"
                >
                  View Privacy Policy
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default DeleteAccountRequest

