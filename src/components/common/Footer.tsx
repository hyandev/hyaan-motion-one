import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import classNames from "classnames";

const NAV_LINKS = {
  Links: ["Services", "Process", "Case studies", "Benefits", "Pricing"],
  Pages: ["Home", "About", "Blog", "Contact", "404"],
  Socials: ["Instagram", "Facebook", "Linkedin", "Twitter"],
};

function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <footer
      className="border-charcoal mt-10 w-full border-t text-white md:mt-35"
      aria-label="Site footer"
    >
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="flex max-w-sm flex-col gap-6">
          <a
            href="/"
            className="group flex w-fit items-center gap-3 rounded-sm"
            aria-label="Xtract – go to homepage"
          >
            <img
              src={logo}
              alt="HYANX Logo"
              className="max-w-40"
              width={150}
              height={40}
            />
          </a>

          <p className="text-neutral-muted flex flex-col text-sm leading-relaxed font-bold">
            <span className="">Xtract – Automate Smarter, Optimize</span>
            <span className="">Faster, and Grow Stronger.</span>
          </p>

          <div>
            <p className="mb-3 text-base font-semibold text-white">
              Join our newsletter
            </p>

            {submitted ? (
              <p
                role="status"
                aria-live="polite"
                className="rounded-lg border border-purple-700/40 bg-purple-950/40 px-4 py-3 text-sm text-purple-300"
              >
                ✓ You're subscribed! Thanks for joining.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                aria-labelledby="newsletter-heading"
                noValidate
              >
                <div className="border-neutral-surface/15 flex gap-2 rounded-md border">
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      aria-describedby={error ? "newsletter-error" : undefined}
                      aria-invalid={!!error}
                      className="placeholder-neutral-surface h-full w-full px-4 text-sm text-white transition-all duration-200 focus:border-transparent focus:outline-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary m-1 rounded-xs px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p
                    id="newsletter-error"
                    role="alert"
                    className="mt-2 text-xs text-red-400"
                  >
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(NAV_LINKS).map(([section, items]) => (
              <div key={section}>
                <h2 className="mb-4 text-sm font-semibold tracking-widest text-white">
                  {section}
                </h2>
                <ul className="space-y-2.5" role="list">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className={classNames(
                          "text-neutral-muted inline-flex rounded-sm text-sm font-semibold transition-all duration-250 hover:text-white",
                        )}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div
        aria-label="Footer legal bar"
        className={classNames(
          "flex items-center justify-between text-[13px]",
          "border-charcoal border-t-2 px-4 py-4",
          "text-neutral-surface/60 flex-wrap gap-2.5 font-medium tracking-wider",
        )}
      >
        <a href="#" className="hover:text-neutral-surface">
          <span>Logo by Haynx</span>
        </a>
        <a href="#" className="hover:text-neutral-surface">
          <span>Visioned and Crafted by Hyanx</span>
        </a>
        <span>© All right reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
