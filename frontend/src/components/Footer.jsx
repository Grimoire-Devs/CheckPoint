// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function GamingFooter() {
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const [dialogContent, setDialogContent] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     useEffect(() => {
//         const user = localStorage.getItem('user');
//         const token = localStorage.getItem('token');
//         if (user && token) {
//             setIsLoggedIn(true);
//         } else {
//             setIsLoggedIn(false);
//         }
//     }, []);

//     const openDialog = (content) => {
//         setDialogContent(content);
//         setIsDialogOpen(true);
//     };

//     const closeDialog = () => {
//         setIsDialogOpen(false);
//         setDialogContent("");
//     };

//     return (
//         <section className="cta-section">
//             <div className="cta-background">
//                 <div className="cta-gradient"></div>
//                 <div className="cta-glow"></div>
//                 <div className="cta-grid"></div>
//             </div>

//             <div className="container cta-content">
//                 {!isLoggedIn && <>
//                     <span className="badge cta-badge">JOIN THE COMMUNITY</span>
//                     <h2 className="cta-title">Ready to level up your gaming experience?</h2>
//                     <p className="cta-description">
//                         Create your account today and start tracking your gaming journey, connect with fellow gamers, and discover
//                         your next favorite game.
//                     </p>
//                     <div className="cta-actions">
//                         <Link to="/create-account">
//                             <button className="btn btn-neon group px-6 py-3">
//                                 Create Free Account
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
//                                 >
//                                     <line x1="5" y1="12" x2="19" y2="12"></line>
//                                     <polyline points="12 5 19 12 12 19"></polyline>
//                                 </svg>
//                             </button>
//                         </Link>
//                     </div>
//                 </>
//                 }
//                 <div className="flex flex-row justify-between">
//                     <div className="logo">
//                         <div className="logo-dots">
//                             <div className="logo-dot logo-dot-1 animate-pulse"></div>
//                             <div className="logo-dot logo-dot-2 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
//                             <div className="logo-dot logo-dot-3 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
//                         </div>
//                         <Link to="/">
//                             Check<span style={{ color: "#7000FF" }}>Point</span>
//                         </Link>
//                     </div>
//                     <button className="btn btn-outline px-6 py-3" onClick={() => openDialog("privacy")}>Learn More About Us</button>

//                     <div className="footer-links">
//                         <div>
//                             <button className="footer-link" onClick={() => openDialog("privacy")}>Privacy Policy</button>

//                             <button className="footer-link ml-5" onClick={() => openDialog("tnc")}>Terms of Service</button>
//                         </div>
//                         <br />
//                         <div>
//                             <a href="mailto:contact@example.com" className="footer-link">Email Us: contact@example.com</a>
//                             <br />
//                             <a href="tel:+1234567890" className="footer-link">Call Us: +1234567890</a>
//                         </div>
//                     </div>
//                     {isDialogOpen && (
//                         <div className="dialog-overlay" onClick={closeDialog}>
//                             <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
//                                 <button className="close-button" onClick={closeDialog}>✖</button>
//                                 {dialogContent === "privacy" && (
//                                     <div>
//                                         <h2>Privacy Policy</h2>
//                                         <p>Your privacy is important to us. We collect and use your personal data to provide and improve our services...</p>
//                                     </div>
//                                 )}
//                                 {dialogContent === "tnc" && (
//                                     <div>
//                                         <h2>Terms of Service</h2>
//                                         <p>By using our services, you agree to our terms and conditions. Please read them carefully...</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }
 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Sample Privacy Policy and T&C
const PRIVACY_POLICY = (
  <>
    <h2 style={{ color: "#fff" }}>Privacy Policy</h2>
    <p>
      At CheckPoint, your privacy is our priority. We collect only the minimal information required to provide our services, such as your email and username. We do not sell or share your personal data with third parties. All data is securely stored and used solely to enhance your gaming experience. You can request deletion of your data at any time by contacting us.
    </p>
    <ul>
      <li>We use cookies to keep you logged in and personalize your experience.</li>
      <li>Your data is encrypted and never shared without your consent.</li>
      <li>Contact us at <a href="mailto:contact@example.com" style={{ color: "#A885FF" }}>contact@example.com</a> for any privacy concerns.</li>
    </ul>
  </>
);

const TERMS_OF_SERVICE = (
  <>
    <h2 style={{ color: "#fff" }}>Terms of Service</h2>
    <p>
      By using CheckPoint, you agree to abide by our community guidelines and respect other users. You must be at least 13 years old to create an account. Do not use the platform for illegal activities or to harass others. We reserve the right to suspend accounts that violate these terms.
    </p>
    <ul>
      <li>You are responsible for maintaining the confidentiality of your account.</li>
      <li>Do not upload offensive or copyrighted content.</li>
      <li>We may update these terms; continued use means you accept changes.</li>
    </ul>
  </>
);

export default function GamingFooter() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!(user && token));
  }, []);

  const openDialog = (content) => {
    setDialogContent(content);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogContent("");
  };

  return (
    <section className="cta-section" style={{ position: "relative" }}>
      {/* Background layers */}
      <div className="cta-background">
        <div className="cta-gradient"></div>
        <div className="cta-glow"></div>
        <div className="cta-grid"></div>
      </div>

      <div className="container cta-content" style={{ position: "relative", zIndex: 1 }}>
        {/* CTA for not logged in users */}
        {!isLoggedIn && (
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="badge cta-badge">JOIN THE COMMUNITY</span>
            <h2 className="cta-title">Ready to level up your gaming experience?</h2>
            <p className="cta-description">
              Create your account today and start tracking your gaming journey, connect with fellow gamers, and discover your next favorite game.
            </p>
            <div className="cta-actions">
              <Link to="/create-account">
                <button className="btn btn-neon group px-6 py-3">
                  Create Free Account
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Footer Row */}
        <div
          className="footer-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
            padding: "2rem 0",
            borderTop: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          {/* Logo */}
          <div className="footer-logo" style={{ minWidth: 180 }}>
            <Link to="/" className="font-bold text-xl flex items-center" style={{ color: "#fff", textDecoration: "none" }}>
              <div className="logo-dots" style={{ display: "inline-block", marginRight: 8 }}>
                <div className="logo-dot logo-dot-1 animate-pulse" style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#A885FF", marginRight: 2 }}></div>
                <div className="logo-dot logo-dot-2 animate-pulse" style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#A885FF", marginRight: 2, animationDelay: "0.2s" }}></div>
                <div className="logo-dot logo-dot-3 animate-pulse" style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#A885FF", animationDelay: "0.4s" }}></div>
              </div>
              Check<span style={{ color: "#7000FF" }}>Point</span>
            </Link>
          </div>

          {/* Links */}
          <div className="footer-nav" style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: 8 }}>
              <button className="footer-link" style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }} onClick={() => openDialog("privacy")}>Privacy Policy</button>
              <button className="footer-link" style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }} onClick={() => openDialog("tnc")}>Terms of Service</button>
            </div>
            <button className="btn btn-outline px-6 py-3" style={{ marginTop: 8 }} onClick={() => openDialog("privacy")}>Learn More About Us</button>
          </div>

          {/* Contact */}
          <div className="footer-contact" style={{ textAlign: "right", minWidth: 180 }}>
            <div>
              <a href="mailto:contact@example.com" className="footer-link" style={{ color: "#A885FF", display: "block", marginBottom: 4 }}>Email: contact@example.com</a>
              <a href="tel:+1234567890" className="footer-link" style={{ color: "#A885FF" }}>Call: +1234567890</a>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div
          className="dialog-overlay"
          onClick={closeDialog}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(20, 10, 40, 0.97)", // similar to your footer bg
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            className="dialog-content"
            onClick={e => e.stopPropagation()}
            style={{
              background: "rgba(40, 20, 80, 0.98)",
              color: "#fff",
              borderRadius: 12,
              padding: "2rem",
              maxWidth: 480,
              width: "90%",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              position: "relative"
            }}
          >
            <button
              className="close-button"
              onClick={closeDialog}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 24,
                cursor: "pointer"
              }}
            >✖</button>
            <div style={{ marginTop: 16 }}>
              {dialogContent === "privacy" ? PRIVACY_POLICY : TERMS_OF_SERVICE}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
