import type { MetaFunction } from "react-router";
import LegalPage from "../components/legal/LegalPage";

export const meta: MetaFunction = () => [
  { title: "Refund Policy | Fegig Technologies" },
  {
    name: "description",
    content:
      "How cancellations, service concerns, credits, and refunds are handled by Fegig Technologies Limited.",
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      label="Commercial policy / L03"
      title="Refund Policy"
      summary="How we handle cancellations, unperformed work, delivery concerns, and payments for professional services."
    >
      <p>
        This policy applies to professional services supplied by Fegig
        Technologies Limited. A signed proposal, statement of work, or order
        form may include terms specific to an engagement. Those specific terms
        apply alongside this policy, but nothing here limits a right or remedy
        that cannot lawfully be limited.
      </p>

      <h2>1. Before work starts</h2>
      <p>
        If you cancel an advance booking or project before work begins, tell us
        in writing as soon as possible. We will refund the amount paid less any
        reasonable, disclosed reservation charge and non-recoverable
        third-party cost already committed for the engagement. Where no work or
        cost has been incurred and no reasonable cancellation charge applies,
        the eligible advance payment will be refunded in full.
      </p>

      <h2>2. Discovery, reservation, and completed milestones</h2>
      <p>
        Payments allocated to completed discovery, planning, design,
        engineering, project reservation, or an accepted milestone are
        generally earned for the value already supplied. If an engagement ends
        early, we will provide a fair account of completed work and committed
        external costs and assess the remaining unperformed portion for refund
        or credit.
      </p>

      <h2>3. If Fegig cannot deliver</h2>
      <p>
        If we cancel an engagement or cannot provide an agreed service for
        reasons within our control, you will receive a refund for the
        unperformed portion. Depending on what has already been delivered, this
        may be a full refund of the affected milestone or a reasonable partial
        refund.
      </p>

      <h2>4. If a service does not meet the agreement</h2>
      <p>
        Raise the issue promptly and identify the agreed requirement you believe
        has not been met. We will review the concern and, where appropriate,
        have a reasonable opportunity to correct the affected service. If the
        issue cannot be corrected within a reasonable time, available remedies
        may include re-performance, a credit, or a reasonable refund reflecting
        the extent of the service failure.
      </p>

      <h2>5. Change of preference or scope</h2>
      <p>
        A refund is not normally due merely because business priorities,
        preferences, stakeholders, or requirements change after agreed work has
        been performed. We will instead identify work completed and propose a
        change, pause, handover, credit, or cancellation route that is fair in
        the circumstances.
      </p>

      <h2>6. Third-party charges</h2>
      <p>
        Domain names, hosting, app-store fees, licences, paid APIs, stock assets,
        payment-provider fees, and other third-party purchases may be
        non-refundable under the provider’s terms. We will disclose material
        external charges in advance where practical and pass through any refund
        we actually receive for a charge paid on your behalf.
      </p>

      <h2>7. Requesting a review</h2>
      <p>
        Email{" "}
        <a href="mailto:messageme@codewithfegig.com">
          messageme@codewithfegig.com
        </a>{" "}
        with your name, project or invoice reference, amount, payment date, and
        the reason for the request. We aim to acknowledge a complete request
        within two business days and provide an outcome or meaningful update
        within ten business days.
      </p>

      <h2>8. Approved refunds</h2>
      <p>
        An approved refund will normally be returned to the original payment
        method unless another lawful method is agreed. We aim to initiate it
        within seven business days after approval. Banks and payment providers
        may need additional time to make the funds available. We will provide
        written confirmation of the approved amount.
      </p>

      <h2>9. Consumer rights</h2>
      <p>
        This policy is intended to operate consistently with applicable
        consumer-protection law, including rights relating to advance bookings
        and services that are not supplied to an agreed standard. Information
        about consumer rights and complaint channels is available from the{" "}
        <a
          href="https://fccpc.gov.ng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federal Competition and Consumer Protection Commission
        </a>
        .
      </p>
    </LegalPage>
  );
}
