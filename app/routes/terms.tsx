import type { MetaFunction } from "react-router";
import LegalPage from "../components/legal/LegalPage";

export const meta: MetaFunction = () => [
  { title: "Terms of Service | Fegig Technologies" },
  {
    name: "description",
    content:
      "Terms governing the Fegig Technologies website, project enquiries, and software services.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      label="Company terms / L01"
      title="Terms of Service"
      summary="The ground rules for using this website and working with Fegig Technologies Limited."
    >
      <p>
        These Terms of Service (“Terms”) apply to your use of this website and
        to enquiries made through it. A separate proposal, statement of work,
        order form, or signed agreement will set the specific commercial terms
        for a client project. If that agreement conflicts with these Terms, the
        project agreement controls for that project.
      </p>

      <h2>1. About Fegig Technologies</h2>
      <p>
        Fegig Technologies Limited (“Fegig”, “we”, “us”, or “our”) is a software
        studio based in Abraka, Nigeria. We provide product direction, interface
        design, web and mobile engineering, applied AI, cloud delivery, and
        related support services.
      </p>

      <h2>2. Using this website</h2>
      <p>
        You may use this website to learn about our work and contact us for a
        legitimate business purpose. You must not interfere with the website,
        attempt unauthorised access, introduce malicious code, scrape it in a
        way that disrupts service, misrepresent our work, or use its content for
        unlawful activity.
      </p>

      <h2>3. Enquiries are not engagements</h2>
      <p>
        Sending an email, using a contact link, or discussing a possible project
        does not by itself create a client relationship, reserve delivery time,
        or require either party to proceed. An engagement begins only when the
        parties accept the applicable proposal or agreement and any required
        initial payment has been received.
      </p>

      <h2>4. Project scope, timing, and client responsibilities</h2>
      <p>
        Each engagement will identify its scope, deliverables, assumptions,
        schedule, fees, review process, and acceptance criteria. You agree to
        provide timely access, content, decisions, credentials, approvals, and
        accurate information needed for delivery. A delay or material change in
        those inputs may require a revised schedule or fee.
      </p>

      <h2>5. Fees and payment</h2>
      <p>
        Fees, taxes, currencies, milestones, and payment dates are stated in the
        project agreement. Unless that agreement says otherwise, invoices are
        due on the date shown and work may pause on an overdue account. You are
        responsible for charges imposed by your bank or payment provider.
      </p>

      <h2>6. Changes and acceptance</h2>
      <p>
        Requests outside the agreed scope may be handled through a written
        change request covering impact on cost and timing. Deliverables are
        reviewed against the acceptance process in the project agreement. We
        will have a reasonable opportunity to correct a deliverable that does
        not meet agreed requirements.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        Ownership and licence terms are set out in the project agreement.
        Unless stated otherwise there, and subject to full payment, the client
        receives the agreed rights in custom final deliverables. Fegig retains
        ownership of pre-existing tools, methods, reusable components,
        know-how, and materials identified as third-party or open source. Those
        materials remain subject to their existing licences.
      </p>

      <h2>8. Confidentiality and portfolio use</h2>
      <p>
        Each party must protect confidential information received from the
        other and use it only for the engagement, except where disclosure is
        required by law or authorised in writing. Any public case study,
        testimonial, or display of non-public client material is subject to the
        confidentiality and publicity terms agreed for that project.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        A project or this website may rely on hosting, payment, analytics,
        app-store, open-source, or other third-party services. Their own terms,
        availability, security practices, pricing, and technical limits apply.
        We are not responsible for a third party’s independent acts or service
        changes, but we will use reasonable care when selecting and integrating
        services within our scope.
      </p>

      <h2>10. Warranties</h2>
      <p>
        We will perform agreed services with reasonable skill and care. Except
        for commitments expressly stated in a project agreement or required by
        law, this website and its general content are provided “as is”. We do
        not promise that every third-party service will remain uninterrupted or
        that general website information will suit a particular purpose.
      </p>

      <h2>11. Liability</h2>
      <p>
        Nothing in these Terms excludes liability that cannot lawfully be
        excluded. To the extent permitted by law, neither party is liable for
        indirect or consequential loss arising from website use. Liability for
        a paid engagement is governed by the applicable project agreement.
      </p>

      <h2>12. Suspension and termination</h2>
      <p>
        We may restrict website access where reasonably necessary to protect
        the service, users, or our rights. A project may be suspended or ended
        as described in its agreement. Fees for work completed and committed
        third-party costs remain payable, subject to applicable law and our
        Refund Policy.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Federal Republic of Nigeria.
        The parties should first try in good faith to resolve a dispute through
        direct discussion. Any forum or dispute procedure for a paid engagement
        will be stated in the project agreement.
      </p>

      <h2>14. Changes and contact</h2>
      <p>
        We may update these Terms when our services or legal obligations change.
        The effective date above shows the current version. Questions can be
        sent to{" "}
        <a href="mailto:messageme@codewithfegig.com">
          messageme@codewithfegig.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
