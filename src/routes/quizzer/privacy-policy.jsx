import React from 'react'
import QuizzerHeader from './QuizzerHeader'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-yellow-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-yellow-100/80 blur-3xl" />

        <QuizzerHeader />

        <main className="mx-auto max-w-5xl px-6 pb-16">
          <section className="py-12">
            <div className="rounded-3xl border border-yellow-200 bg-white/90 p-8 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">Privacy Policy</p>
              <h1 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">Quizzer Study/Play/Earn</h1>
              <p className="mt-3 text-sm text-neutral-700">
                Effective date: February 3, 2026. This policy explains how Quizzer (Play Store ID: com.fegig.quizzer)
                collects, uses, and protects your information when you use our gaming and studying platform.
              </p>
              <p className="mt-4 text-sm text-neutral-700">
                By using Quizzer, you agree to this Privacy Policy. If you do not agree, please do not use the app.
              </p>
            </div>
          </section>

          <section className="space-y-8 pb-12">
            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">1. Information We Collect</h2>
              <p className="mt-3 text-sm text-neutral-700">
                We collect information to operate Quizzer, improve the experience, and keep the platform fair and safe.
              </p>
              <p className="mt-4 text-sm font-semibold text-neutral-900">Information you provide</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                <li>Profile details such as display name, avatar, and optional contact information.</li>
                <li>Learning preferences, quiz selections, and gameplay settings.</li>
                <li>Support requests or messages you send to us.</li>
                <li>Reward redemption details if a reward requires identity or payout verification.</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-neutral-900">Information collected automatically</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                <li>Device and app data such as device model, operating system, app version, and language settings.</li>
                <li>Usage data including gameplay history, streaks, scores, and feature interactions.</li>
                <li>Diagnostics and performance logs used to fix crashes and improve stability.</li>
                <li>Network information such as IP address used for security and fraud prevention.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">2. How We Use Your Information</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                <li>Provide core gameplay, scoring, and rewards features.</li>
                <li>Personalize quiz content and recommend challenges based on your activity.</li>
                <li>Maintain leaderboards, streaks, and competitive play integrity.</li>
                <li>Communicate important updates, reward confirmations, or support responses.</li>
                <li>Analyze performance to improve app stability and prevent abuse or fraud.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">3. Sharing and Disclosure</h2>
              <p className="mt-3 text-sm text-neutral-700">
                We do not sell your personal information. We share information only as needed to run Quizzer.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                <li>Service providers who help us host, secure, analyze, or operate the app.</li>
                <li>Legal or safety requests when required to comply with law or protect users.</li>
                <li>Business transfers in the event of a merger, acquisition, or asset sale.</li>
                <li>Aggregated or de-identified data for research and product improvements.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">4. Rewards and Earn Features</h2>
              <p className="mt-3 text-sm text-neutral-700">
                Quizzer may offer points, perks, or rewards for gameplay milestones. To fulfill rewards, we may request
                additional verification or payout details as required by the reward provider or applicable law.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                <li>Reward eligibility is based on gameplay activity and fair-play rules.</li>
                <li>We may review activity to prevent fraud or abuse of rewards.</li>
                <li>Reward fulfillment may require identity confirmation or tax-related information.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">5. Analytics and Advertising</h2>
              <p className="mt-3 text-sm text-neutral-700">
                We may use analytics tools to understand how Quizzer is used and to improve the experience. If we
                display ads or sponsored content, partners may use device identifiers to measure effectiveness. You can
                manage ad personalization in your device settings.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">6. Data Retention</h2>
              <p className="mt-3 text-sm text-neutral-700">
                We keep personal information for as long as your account is active or as needed to provide services and
                comply with legal obligations. We may retain some data in backups or logs for a limited period after
                account deletion.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">7. Security</h2>
              <p className="mt-3 text-sm text-neutral-700">
                We use reasonable security measures to protect your information. No method of transmission or storage is
                100% secure, so we cannot guarantee absolute security.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">8. Children?s Privacy</h2>
              <p className="mt-3 text-sm text-neutral-700">
                Quizzer is not directed to children under 13. If you believe a child has provided personal information
                without parental consent, please contact us so we can delete it.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">9. Your Rights and Choices</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                <li>Access, update, or delete your profile information in the app settings.</li>
                <li>Request account deletion and data removal via in-app support.</li>
                <li>Opt out of marketing communications where available.</li>
                <li>Control analytics and ad personalization through device settings.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">10. International Transfers</h2>
              <p className="mt-3 text-sm text-neutral-700">
                Your information may be processed or stored in countries other than where you live. We take steps to
                ensure appropriate safeguards are in place for cross-border data transfers.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">11. Changes to This Policy</h2>
              <p className="mt-3 text-sm text-neutral-700">
                We may update this policy from time to time. We will post the latest version in the app and update the
                effective date at the top of this page.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">12. Contact Us</h2>
              <p className="mt-3 text-sm text-neutral-700">
                For privacy questions, contact us through the in-app support channel or the support email listed on the
                Play Store page for com.fegig.quizzer.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default PrivacyPolicy
