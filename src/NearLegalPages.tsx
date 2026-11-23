
import "./NearLegalPages.css";

const SUPPORT_EMAIL = "support@app-near.me";
const UPDATED = "November 22, 2026";

const deletionEmail =
  `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    "Near - Account Deletion Request"
  )}&body=${encodeURIComponent(
    "Hello Near Support,\n\nI would like to request deletion of my Near account and associated personal data.\n\nMy account email or username is:\n\nThank you."
  )}`;

function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <a href="/" className="legal-logo">
        <img
            src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-logo-light.png"
            alt="Near"
            className="legal-logo-image"
        />
        </a>

        <a href="/" className="legal-back">
          <span aria-hidden="true">←</span> Back to home
        </a>
      </header>

      <main className="legal-container">
        <div className="legal-intro">
          <span className="legal-eyebrow">NEAR / LEGAL</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <span className="legal-updated">
            Last updated: {UPDATED}
          </span>
        </div>

        <article className="legal-content">{children}</article>
      </main>

      <footer className="legal-footer">
        <span>© {new Date().getFullYear()} Near</span>

        <nav aria-label="Legal navigation">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/delete-account">Delete Account</a>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
        </nav>
      </footer>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy."
      subtitle="Your connections matter. Your privacy does too."
    >
      <section>
        <h2>01. Introduction</h2>
        <p>
          Near is a location-based social application designed
          to help people discover when they are near their
          friends, stay connected, and share experiences.
        </p>
        <p>
          This Privacy Policy explains how Near collects, uses,
          stores, and protects personal information through
          the Near mobile application and the website
          app-near.me.
        </p>
        <p>
          For privacy-related questions, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>.
        </p>
        <p>
          Data controller:  KCWebSolutions, contact at: developer@kevincaulo.com.
        </p>
      </section>

      <section>
        <h2>02. Information we collect</h2>
        <p>
          Depending on the features you use and the
          permissions you grant, we may process:
        </p>
        <ul>
          <li>
            <strong>Account information:</strong> email
            address, username, display name, authentication
            identifiers, and profile information.
          </li>
          <li>
            <strong>Location information:</strong> precise
            device location, including background location
            when enabled, to provide proximity-based features.
          </li>
          <li>
            <strong>Social information:</strong> friendships,
            friend requests, and related connections.
          </li>
          <li>
            <strong>Messages:</strong> chat messages and
            information needed to deliver conversations.
          </li>
          <li>
            <strong>Notification information:</strong> push
            notification tokens and notification preferences.
          </li>
          <li>
            <strong>Technical information:</strong> app
            diagnostics, errors, and information needed to
            investigate crashes and maintain reliability.
          </li>
          <li>
            <strong>Website information:</strong> email
            addresses voluntarily submitted through our
            newsletter or launch waitlist.
          </li>
        </ul>
      </section>

      <section>
        <h2>03. How we use your information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Create and manage Near accounts.</li>
          <li>
            Provide proximity-based features and notify users
            about relevant nearby connections.
          </li>
          <li>
            Enable friendships, messaging, and profile features.
          </li>
          <li>Deliver notifications you have enabled.</li>
          <li>
            Detect and resolve errors, maintain security, and
            improve app reliability.
          </li>
          <li>
            Respond to support, privacy, and deletion requests.
          </li>
          <li>
            Send launch updates to people who have subscribed.
          </li>
        </ul>
      </section>

      <section>
        <h2>04. Location and background tracking</h2>
        <p>
          Location is a central feature of Near. With your
          permission, the app uses device location to determine
          proximity between connected users.
        </p>
        <p>
          If you enable background location, Near may continue
          processing location while the application is not
          actively displayed, so proximity features can
          continue operating.
        </p>
        <p>
          You can manage device location permissions through
          your operating system settings. Disabling location
          may limit proximity-related features.
        </p>
      </section>

      <section>
        <h2>05. Legal bases for processing</h2>
        <p>
          Where the GDPR applies, our processing may rely on
          performance of our agreement with users, consent
          where required, legitimate interests such as service
          security and reliability, or compliance with legal
          obligations.
        </p>
        <p>
          Location permissions are controlled through your
          device. Where processing relies on consent, you may
          withdraw that consent, subject to applicable law.
        </p>
      </section>

      <section>
        <h2>06. Service providers</h2>
        <p>
          Near uses third-party technology providers to
          operate certain features, including:
        </p>
        <ul>
          <li>
            <strong>Supabase:</strong> authentication, database,
            and application backend services.
          </li>
          <li>
            <strong>Expo and platform notification services:</strong>
            delivery of supported push notifications.
          </li>
          <li>
            <strong>Sentry:</strong> application error monitoring
            and diagnostics.
          </li>
        </ul>
        <p>
          These providers process information as necessary to
          deliver their respective services. Processing may
          involve international transfers subject to
          applicable safeguards.
        </p>
      </section>

      <section>
        <h2>07. Sharing and visibility</h2>
        <p>
          Information you choose to make available through
          your profile, friendships, and chats may be visible
          to other users according to the app's functionality
          and privacy settings.
        </p>
        <p>
          We do not sell users' personal information to
          advertisers.
        </p>
      </section>

      <section>
        <h2>08. Data retention</h2>
        <p>
          We retain information for as long as reasonably
          necessary to provide Near, maintain security,
          resolve disputes, and meet applicable legal
          obligations.
        </p>
        <p>
          When an account is deleted, associated personal
          information is deleted or anonymized unless
          retention is necessary or legally permitted for
          specific purposes. Limited information may remain
          in backups for a restricted period before removal.
        </p>
      </section>

      <section>
        <h2>09. Your privacy rights</h2>
        <p>
          Depending on your location and applicable law, you
          may have the right to access, correct, erase,
          restrict, or obtain a copy of your personal data,
          object to certain processing, or withdraw consent.
        </p>
        <p>
          You may also have the right to lodge a complaint
          with the relevant data protection authority.
        </p>
        <p>
          To exercise your rights, email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>.
        </p>
      </section>

      <section>
        <h2>10. Account deletion</h2>
        <p>
          You can request deletion of your Near account and
          associated personal information through the app
          or our dedicated deletion page.
        </p>
        <a className="legal-text-link" href="/delete-account">
          Learn how to delete your account →
        </a>
      </section>

      <section>
        <h2>11. Website cookies</h2>
        <p>
          The Near website does not currently use advertising
          or analytics cookies. Necessary browser storage
          may be used to remember interface preferences,
          such as dismissal of the privacy notice.
        </p>
      </section>

      <section>
        <h2>12. Children's privacy</h2>
        <p>
          Near is not intended for children below the
          minimum age permitted under its applicable
          terms and laws. If you believe a child has
          provided personal information in violation of
          these requirements, please contact us.
        </p>
      </section>


<section id="child-safety">
  <h2>13. Child Safety Standards</h2>

  <p>
    Near is committed to maintaining a safe environment for
    all users and has a zero-tolerance policy toward child
    sexual abuse and exploitation (CSAE), including child
    sexual abuse material (CSAM).
  </p>

  <h3>Prohibited Content and Behavior</h3>
  <p>
    Near strictly prohibits any activity involving the
    sexual abuse or exploitation of minors, including:
  </p>

  <ul>
    <li>
      Creating, uploading, sharing, distributing, or
      requesting child sexual abuse material (CSAM).
    </li>
    <li>
      Grooming, sexual solicitation, or attempting to
      exploit minors.
    </li>
    <li>
      Sexual harassment, coercion, sextortion, or
      trafficking involving minors.
    </li>
    <li>
      Using Near to facilitate, promote, or coordinate
      child sexual abuse or exploitation.
    </li>
    <li>
      Any other behavior that endangers the safety
      or well-being of minors.
    </li>
  </ul>

  <h3>Reporting Child Safety Concerns</h3>

  <p>
    Users can report suspected child sexual abuse,
    exploitation, inappropriate behavior, or other
    safety concerns through the Support feature
    available within the Near application.
  </p>

  <p>
    Reports can also be submitted directly to{" "}
    <a href="mailto:support@app-near.me">
      support@app-near.me
    </a>.
  </p>

  <p>
    We encourage users to provide relevant details
    about the incident so that reports can be
    properly assessed. Do not send or redistribute
    suspected child sexual abuse material.
  </p>

  <h3>Enforcement and Response</h3>

  <p>
    Near treats reports involving potential child
    sexual abuse or exploitation as a priority.
    When violations are identified, appropriate
    measures may include:
  </p>

  <ul>
    <li>
      Reviewing reported accounts and activities.
    </li>
    <li>
      Removing prohibited content where technically
      possible.
    </li>
    <li>
      Restricting, suspending, or permanently
      terminating accounts involved in violations.
    </li>
    <li>
      Reporting suspected illegal activities to
      appropriate authorities when required by law.
    </li>
  </ul>

  <h3>Compliance With Child Safety Laws</h3>

  <p>
    Near is committed to complying with applicable
    child protection and online safety laws.
    We cooperate with relevant law enforcement
    agencies and competent authorities in accordance
    with applicable legal requirements.
  </p>

  <h3>Child Safety Contact</h3>

  <p>
    For questions regarding Near's child safety
    standards, reporting procedures, or compliance,
    contact our designated representative at{" "}
    <a href="mailto:developer@kevincaulo.com">
      developer@kevincaulo.com
    </a>.
  </p>
</section>


      <section>
        <h2>14. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy when our features,
          practices, or legal obligations change. The latest
          version will be available on this page, with its
          updated date.
        </p>
      </section>

      <div className="legal-contact-box">
        <h3>Questions about your privacy?</h3>
        <p>We're here to help.</p>
        <a href={`mailto:${SUPPORT_EMAIL}`}>
          Contact Near Support ↗
        </a>
      </div>
    </LegalLayout>
  );
}

export function DeleteAccount() {
  return (
    <LegalLayout
      title="Delete your account."
      subtitle="Your account. Your data. Your choice."
    >
      <section>
        <h2>01. Delete your account in the app</h2>
        <p>
          If you can access your Near account, you can
          initiate account deletion directly from the app.
        </p>

        <ol>
          <li>Open the Near application.</li>
          <li>Sign in to your account.</li>
          <li>Navigate to Settings.</li>
          <li>Select Delete Account.</li>
          <li>
            Follow the confirmation steps to request
            permanent deletion.
          </li>
        </ol>
      </section>

      <section>
        <h2>02. Request deletion by email</h2>
        <p>
          If you cannot access the app, you can request
          deletion of your Near account and associated
          personal data by contacting our support team.
        </p>
        <p>
          Use the email address associated with your Near
          account where possible, or provide your username
          to help us identify the correct account.
        </p>

        <a className="legal-primary-button" href={deletionEmail}>
          <span>Request account deletion</span>
          <span aria-hidden="true">↗</span>
        </a>

        <p className="legal-small-note">
          This button opens your email application. Your
          request is submitted when you send the email.
          Never include your password.
        </p>
      </section>

      <section>
        <h2>03. What happens to your data?</h2>
        <p>
          When your account deletion request is completed,
          Near will delete or anonymize associated personal
          data as applicable, including:
        </p>

        <ul>
          <li>Account and profile information.</li>
          <li>Stored location information.</li>
          <li>Friendships and social connections.</li>
          <li>
            Chat messages and related account-associated
            information, subject to applicable exceptions.
          </li>
          <li>
            Push notification tokens and notification
            preferences.
          </li>
        </ul>

        <p>
          Certain records may be retained where required
          by law or necessary for security, fraud prevention,
          or legal claims. Residual copies may remain in
          backups temporarily according to applicable
          retention schedules.
        </p>
      </section>

      <section>
        <h2>04. Important information</h2>
        <p>
          Account deletion is intended to be permanent.
          Once completed, you will no longer be able to
          access your deleted account or recover data
          that has been permanently removed.
        </p>
        <p>
          For email requests, we may need to verify account
          ownership before processing deletion. We will
          handle requests within the timeframes required
          by applicable law.
        </p>
      </section>

      <section>
        <h2>05. Need help?</h2>
        <p>
          If you have questions about account deletion,
          contact{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>.
        </p>
      </section>

      <div className="legal-contact-box">
        <h3>Ready to leave Near?</h3>
        <p>
          You can request deletion even if you no longer
          have access to the application.
        </p>
        <a href={deletionEmail}>
          Request account deletion ↗
        </a>
      </div>
    </LegalLayout>
  );
}
