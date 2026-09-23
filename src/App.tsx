import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import { supabase } from "./lib/supabase";

const RELEASE_DATE = new Date("2026-10-17T00:00:00");

function getTimeLeft() {
  const difference = Math.max(RELEASE_DATE.getTime() - Date.now(), 0);

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Navbar({
  dark = false,
  onHowItWorks,
  onNotify,
}: {
  dark?: boolean;
  onHowItWorks: () => void;
  onNotify: () => void;
}) {
  return (
    <nav className={`navbar ${dark ? "navbar-black" : "navbar-white"}`}>
      <a
        href="#"
        className="logo-link"
        onClick={(e) => {
          e.preventDefault();

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img className="logo" src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-logo-light.png" alt="Near" />
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a
          href="#how"
          onClick={(e) => {
            e.preventDefault();
            onHowItWorks();
          }}
        >
          How it works
        </a>
        <button type="button" className="notify-link" onClick={onNotify}>
          Notify me
        </button>
      </div>
    </nav>
  );
}

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [time, setTime] = useState(getTimeLeft());
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const introCopyRef = useRef<HTMLDivElement>(null);
  const homeCopyRef = useRef<HTMLDivElement>(null);
  const profileCopyRef = useRef<HTMLDivElement>(null);
  const friendsCopyRef = useRef<HTMLDivElement>(null);
  const qrCopyRef = useRef<HTMLDivElement>(null);
  const releaseCopyRef = useRef<HTMLDivElement>(null);
  const introDescriptionRef = useRef<HTMLParagraphElement>(null);
  const homeDescriptionRef = useRef<HTMLParagraphElement>(null);
  const profileDescriptionRef = useRef<HTMLParagraphElement>(null);
  const friendsDescriptionRef = useRef<HTMLParagraphElement>(null);
  const qrDescriptionRef = useRef<HTMLParagraphElement>(null);
  const releaseDescriptionRef = useRef<HTMLDivElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const homeScreenRef = useRef<HTMLDivElement>(null);
  const profileScreenRef = useRef<HTMLDivElement>(null);
  const friendsScreenRef = useRef<HTMLDivElement>(null);
  const qrScreenRef = useRef<HTMLDivElement>(null);
  const creditRef = useRef<HTMLElement>(null);
  const [aboutTop, setAboutTop] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  const scrollToHowItWorks = () => {
  if (!aboutRef.current) return;

  const about = aboutRef.current;

  const start = about.offsetTop;
  const scrollableDistance =
    about.offsetHeight - window.innerHeight;

  const homeProgress = 0.27;

  window.scrollTo({
    top: start + scrollableDistance * homeProgress,
    behavior: "smooth",
  });
};

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!notifyOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNotifyOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [notifyOpen]);

  useEffect(() => {
  const handleScroll = () => {
    const progress = Math.min(
      Math.max(window.scrollY / window.innerHeight, 0),
      1
    );

    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  useEffect(() => {
    const updateAboutTop = () => {
      if (!aboutRef.current) return;
      setAboutTop(aboutRef.current.getBoundingClientRect().top);
    };

    updateAboutTop();

    window.addEventListener("scroll", updateAboutTop, { passive: true });
    window.addEventListener("resize", updateAboutTop);

    return () => {
      window.removeEventListener("scroll", updateAboutTop);
      window.removeEventListener("resize", updateAboutTop);
    };
  }, []);

  useEffect(() => {
    if (!aboutRef.current || !phoneRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(homeScreenRef.current, { autoAlpha: 0, scale: 1.035, filter: "blur(8px)" });
      gsap.set(homeCopyRef.current, { autoAlpha: 0, y: 24 });
      gsap.set(homeDescriptionRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(profileScreenRef.current, { autoAlpha: 0, scale: 1.035, filter: "blur(8px)" });
      gsap.set(profileCopyRef.current, { autoAlpha: 0, y: 24 });
      gsap.set(profileDescriptionRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(friendsScreenRef.current, { autoAlpha: 0, scale: 1.035, filter: "blur(8px)" });
      gsap.set(friendsCopyRef.current, { autoAlpha: 0, y: 24 });
      gsap.set(friendsDescriptionRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(qrScreenRef.current, { autoAlpha: 0, scale: 1.035, filter: "blur(8px)" });
      gsap.set(qrCopyRef.current, { autoAlpha: 0, y: 24 });
      gsap.set(qrDescriptionRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(releaseCopyRef.current, { autoAlpha: 0, y: 24 });
      gsap.set(releaseDescriptionRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(creditRef.current, { autoAlpha: 0, y: 10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // 1. Reveal the phone: back -> front.
      tl.fromTo(
        phoneRef.current,
        { rotateY: 180, scale: 0.88, y: 36 },
        { rotateY: 0, scale: 1, y: 0, duration: 1.4, ease: "none" }
      );

      // Small pause on the Near splash before the app loads.
      tl.to({}, { duration: 0.35 });

      // 2. Splash -> Home, while both text columns change with it.
      tl.to(splashRef.current, { autoAlpha: 0, scale: 0.97, duration: 0.45 }, "home");
      tl.to(
        homeScreenRef.current,
        { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.65 },
        "home+=0.08"
      );

      tl.to(introCopyRef.current, { autoAlpha: 0, y: -22, duration: 0.35 }, "home");
      tl.to(homeCopyRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "home+=0.22");

      tl.to(
        introDescriptionRef.current,
        { autoAlpha: 0, y: -18, duration: 0.35 },
        "home"
      );
      tl.to(
        homeDescriptionRef.current,
        { autoAlpha: 1, y: 0, duration: 0.5 },
        "home+=0.22"
      );

      // Give Home a moment before moving into the profile chapter.
      tl.to({}, { duration: 0.55 });

      // 3. Home -> Profile.
      tl.to(homeScreenRef.current, { autoAlpha: 0, scale: 0.97, filter: "blur(6px)", duration: 0.45 }, "profile");
      tl.to(
        profileScreenRef.current,
        { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.65 },
        "profile+=0.08"
      );

      tl.to(homeCopyRef.current, { autoAlpha: 0, y: -22, duration: 0.35 }, "profile");
      tl.to(profileCopyRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "profile+=0.22");

      tl.to(homeDescriptionRef.current, { autoAlpha: 0, y: -18, duration: 0.35 }, "profile");
      tl.to(profileDescriptionRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "profile+=0.22");

      // Hold the Profile state before moving into Friends.
      tl.to({}, { duration: 0.55 });

      // 4. Profile -> Friends.
      tl.to(profileScreenRef.current, { autoAlpha: 0, scale: 0.97, filter: "blur(6px)", duration: 0.45 }, "friends");
      tl.to(
        friendsScreenRef.current,
        { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.65 },
        "friends+=0.08"
      );

      tl.to(profileCopyRef.current, { autoAlpha: 0, y: -22, duration: 0.35 }, "friends");
      tl.to(friendsCopyRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "friends+=0.22");

      tl.to(profileDescriptionRef.current, { autoAlpha: 0, y: -18, duration: 0.35 }, "friends");
      tl.to(friendsDescriptionRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "friends+=0.22");

      // Hold Friends before the final QR chapter.
      tl.to({}, { duration: 0.55 });

      // 5. Friends -> QR.
      tl.to(friendsScreenRef.current, { autoAlpha: 0, scale: 0.97, filter: "blur(6px)", duration: 0.45 }, "qr");
      tl.to(
        qrScreenRef.current,
        { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.65 },
        "qr+=0.08"
      );

      tl.to(friendsCopyRef.current, { autoAlpha: 0, y: -22, duration: 0.35 }, "qr");
      tl.to(qrCopyRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "qr+=0.22");

      tl.to(friendsDescriptionRef.current, { autoAlpha: 0, y: -18, duration: 0.35 }, "qr");
      tl.to(qrDescriptionRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "qr+=0.22");

      // Let the QR chapter breathe before the final release state.
      tl.to({}, { duration: 0.55 });

      // 6. Power the phone down: QR -> black screen -> Near splash.
      tl.to(qrScreenRef.current, { autoAlpha: 0, scale: 0.985, filter: "blur(4px)", duration: 0.42 }, "release");
      tl.to(qrCopyRef.current, { autoAlpha: 0, y: -22, duration: 0.35 }, "release");
      tl.to(qrDescriptionRef.current, { autoAlpha: 0, y: -18, duration: 0.35 }, "release");

      // A short beat where the phone is completely black.
      tl.set(splashRef.current, { autoAlpha: 0, scale: 1 });
      tl.to({}, { duration: 0.28 });

      // Bring Near back, then reveal the launch CTA around the phone.
      tl.to(splashRef.current, { autoAlpha: 1, scale: 1, duration: 0.55 }, "launch");
      tl.to(releaseCopyRef.current, { autoAlpha: 1, y: 0, duration: 0.55 }, "launch+=0.12");
      tl.to(releaseDescriptionRef.current, { autoAlpha: 1, y: 0, duration: 0.55 }, "launch+=0.12");
      tl.to(creditRef.current, { autoAlpha: 1, y: 0, duration: 0.55 }, "launch+=0.12");

      // Hold the launch state before the pinned About section releases.
      tl.to({}, { duration: 1.15 });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const number = (value: number) => String(value).padStart(2, "0");

  return (
    <main>
      {notifyOpen && (
        <div
          className="notify-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setNotifyOpen(false);
          }}
        >
          <div
            className="notify-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="notify-modal-title"
          >
            <button
              type="button"
              className="notify-modal-close"
              aria-label="Close"
              onClick={() => setNotifyOpen(false)}
            >
              ×
            </button>

            {!notifySubmitted ? (
              <>
                <p className="notify-modal-kicker">NEAR IS COMING</p>
                <h2 id="notify-modal-title">BE THERE FIRST.</h2>
                <p className="notify-modal-copy">
                  Get notified when Near is ready to download.
                </p>

                <form
                  className="notify-modal-form"
                  onSubmit={async (event) => {
                    event.preventDefault();

                    const email = notifyEmail.trim().toLowerCase();

                    if (!email) return;

                    const { error } = await supabase
                      .from("waitlist")
                      .insert({ email });

                    if (error) {
                      if (error.code === "23505") {
                        // Already registered — still show success.
                        setNotifySubmitted(true);
                        return;
                      }

                      console.error("Waitlist signup failed:", error);
                      return;
                    }

                    setNotifySubmitted(true);
                  }}
                >
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={(event) => setNotifyEmail(event.target.value)}
                    placeholder="Your email"
                    autoComplete="email"
                    required
                    autoFocus
                  />
                  <button type="submit">Notify me</button>
                </form>

                <p className="notify-modal-note">No spam. Just the launch.</p>
              </>
            ) : (
              <div className="notify-modal-success">
                <span className="notify-modal-check">✓</span>
                <p className="notify-modal-kicker">YOU'RE ON THE LIST</p>
                <h2 id="notify-modal-title">SEE YOU SOON.</h2>
                <p className="notify-modal-copy">
                  We'll let you know when Near goes live.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Navbar onHowItWorks={scrollToHowItWorks} onNotify={() => setNotifyOpen(true)} />

      <div
        className="navbar-black-mask"
        style={{
          clipPath: `inset(${Math.max(0, aboutTop)}px 0 0 0)`,
        }}
      >
        <Navbar dark onHowItWorks={scrollToHowItWorks} onNotify={() => setNotifyOpen(true)} />
      </div>
      <section className="hero">  

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/ecco%20mimmo.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-shade" />

        <div
          className="hero-center"
          style={{
            opacity: 1 - scrollProgress,
          }}
        >

          <img className="hero-logo" src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-logo-long-light.png" alt="" />

          <div className="countdown">
            <div className="time">
              <strong>{number(time.days)}</strong>
              <span>DAYS</span>
            </div>

            <span className="colon">:</span>

            <div className="time">
              <strong>{number(time.hours)}</strong>
              <span>HOURS</span>
            </div>

            <span className="colon">:</span>

            <div className="time">
              <strong>{number(time.minutes)}</strong>
              <span>MINUTES</span>
            </div>

            <span className="colon">:</span>

            <div className="time">
              <strong>{number(time.seconds)}</strong>
              <span>SECONDS</span>
            </div>
          </div>

          <h1>
            SOME PEOPLE ARE
            <br />
            WORTH MEETING TWICE.
          </h1>

        </div>

        {/*<div className="bottom-left">
          - "A different kind of social app"
        </div>*/}

        <div className="bottom-right">
          <p className="launch-date">COMING OCTOBER 17, 2026 ON:</p>
          <div className="store-buttons">
            <div className="store-button">
              <img className="apple-logo" src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/apple-logo-dark.png" alt="" />

              <span>
                <strong>App Store</strong>
              </span>
            </div>

            <div className="store-button">
              <img className="play-store-logo" src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/google-play-store-logo-png-transparent.png" alt="" />

              <span>
                <strong>Google Play</strong>
              </span>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="scroll"
          style={{
            opacity: 1 - scrollProgress * 2,
          }}
        >
          <span>SCROLL TO DISCOVER</span>
          <span className="scroll-arrow">↓</span>
        </a>

      </section>
      <section ref={aboutRef} className="about" id="about">
        <div className="about-sticky">
          <div className="about-inner">
            <div className="about-copy about-copy-left about-copy-stack">
              <div ref={introCopyRef} className="about-copy-state">
                <p className="about-kicker">WHAT IS NEAR?</p>
                <h2 className="about-title">
                  YOUR PATHS CROSSED.
                  <br />
                  MAYBE THEY WILL
                  <br />
                  AGAIN.
                </h2>
              </div>

              <div ref={homeCopyRef} className="about-copy-state">
                <p className="about-kicker">HOME</p>
                <h2 className="about-title">
                  SEE WHO'S
                  <br />
                  NEAR.
                </h2>
              </div>

              <div ref={profileCopyRef} className="about-copy-state">
                <p className="about-kicker">PROFILE</p>
                <h2 className="about-title">
                  YOUR JOURNEY.
                  <br />
                  YOUR STORY.
                </h2>
              </div>

              <div ref={friendsCopyRef} className="about-copy-state">
                <p className="about-kicker">FRIENDS</p>
                <h2 className="about-title">
                  CROSS PATHS.
                  <br />
                  STAY CONNECTED.
                </h2>
              </div>

              <div ref={qrCopyRef} className="about-copy-state">
                <p className="about-kicker">MY QR</p>
                <h2 className="about-title">
                  MEET HERE.
                  <br />
                  STAY NEAR.
                </h2>
              </div>

              <div ref={releaseCopyRef} className="about-copy-state release-copy">
                <p className="about-kicker">LAUNCHING IN</p>
                <div className="release-countdown">
                  <div><strong>{number(time.days)}</strong><span>DAYS</span></div>
                  <span className="release-colon">:</span>
                  <div><strong>{number(time.hours)}</strong><span>HOURS</span></div>
                  <span className="release-colon">:</span>
                  <div><strong>{number(time.minutes)}</strong><span>MIN</span></div>
                  <span className="release-colon">:</span>
                  <div><strong>{number(time.seconds)}</strong><span>SEC</span></div>
                </div>
                <button
                  type="button"
                  className="release-notify"
                  onClick={() => setNotifyOpen(true)}
                >
                  Notify me
                </button>
              </div>
            </div>

            <div className="phone-scene" aria-label="Near app preview">
              <div ref={phoneRef} className="phone-3d">
                <div className="phone-face phone-front">
                  <div className="phone-screen">
                    <div ref={splashRef} className="phone-screen-state phone-splash">
                      <img src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-logo-long-light.png" className="phone-splash-logo" alt="Near" />
                    </div>
                    <div ref={homeScreenRef} className="phone-screen-state phone-home">
                      <img src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-home.jpg" className="phone-home-image" alt="Near Home map" />
                    </div>
                    <div ref={profileScreenRef} className="phone-screen-state phone-profile">
                      <img src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-profile.jpg" className="phone-screen-image" alt="Near profile" />
                    </div>
                    <div ref={friendsScreenRef} className="phone-screen-state phone-friends">
                      <img src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-friends.jpg" className="phone-screen-image" alt="Near friends" />
                    </div>
                    <div ref={qrScreenRef} className="phone-screen-state phone-qr">
                      <img src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-qr.jpg" className="phone-screen-image" alt="Near QR code" />
                    </div>
                  </div>
                </div>

                <div className="phone-face phone-back">
                  <div className="phone-camera-cluster">
                    <span className="phone-camera" />
                    <span className="phone-camera" />
                    <span className="phone-flash" />
                  </div>
                  <img src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/near-logo-light.png" className="phone-back-logo" alt="" />
                </div>
              </div>
            </div>

            <div className="about-copy about-copy-right about-description-stack">
              <p ref={introDescriptionRef} className="about-description about-description-state">
                Near remembers the places you've been and helps you discover people
                whose paths crossed yours — so a missed connection doesn't always
                have to stay missed.
              </p>

              <p ref={homeDescriptionRef} className="about-description about-description-state">
                Your Home map brings those crossings into view. See the people you've
                been near, explore where your paths overlapped, and rediscover the
                connections that might otherwise have disappeared.
              </p>

              <p ref={profileDescriptionRef} className="about-description about-description-state">
                Your profile tells the story behind the pin. Share who you are, where
                you're from, the places you've explored, and a little about yourself —
                giving the people you cross paths with something real to reconnect with.
              </p>

              <p ref={friendsDescriptionRef} className="about-description about-description-state">
                When a crossing becomes a connection, keep it. Find people by ID, add
                the travelers you meet, and build a network that can follow you far
                beyond the place where your paths first crossed.
              </p>

              <p ref={qrDescriptionRef} className="about-description about-description-state">
                Some connections happen in the moment. Share your personal QR code or
                scan someone else's to find each other instantly on Near — no searching,
                no usernames to remember.
              </p>

              <div ref={releaseDescriptionRef} className="about-description-state release-availability">
                <p className="about-kicker">SOON AVAILABLE ON</p>
                <div className="release-store-buttons">
                  <div className="release-store-button">
                    <img className="apple-logo" src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/apple-logo-light.png" alt="" />
                    <span><strong>App Store</strong></span>
                  </div>
                  <div className="release-store-button">
                    <img className="play-store-logo" src="https://pub-f87a061974ae427789e792fb6de0544d.r2.dev/google-play-store-logo-png-transparent.png" alt="" />
                    <span><strong>Google Play</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-sticky">
          <div className="about-inner">
            {/* all your existing content */}
          </div>

          <footer ref={creditRef} className="site-credit">
            Developed by{" "}
            <a
              href="https://kevincaulo"
              target="_blank"
              rel="noopener noreferrer"
            >
              KC WebSolutions
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;