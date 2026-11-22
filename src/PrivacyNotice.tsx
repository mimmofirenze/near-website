
import { useState } from "react";
import "./PrivacyNotice.css";

const STORAGE_KEY = "near-privacy-notice-dismissed";

export default function PrivacyNotice() {
  const [visible, setVisible] = useState(
    () => localStorage.getItem(STORAGE_KEY) !== "true"
  );

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="privacy-notice"
      role="region"
      aria-label="Privacy notice"
    >
      <div className="privacy-notice-header">
        <span className="privacy-notice-icon" aria-hidden="true">
          ◈
        </span>
        <h3>Your privacy matters.</h3>
      </div>

      <p>
        We respect your privacy. Near's website doesn't use
        advertising or analytics cookies. Learn more about
        how we handle your data in our Privacy Policy.
      </p>

      <div className="privacy-notice-actions">
        <a
          className="privacy-notice-policy"
          href="/privacy-policy"
        >
          Privacy Policy ↗
        </a>

        <button
          type="button"
          className="privacy-notice-button"
          onClick={dismiss}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
