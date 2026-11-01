:root {
  --bg: #f7f1e7;
  --surface: #fffdf9;
  --surface-strong: #f2e6d8;
  --card: #f4eadc;
  --header: #201d1b;
  --text: #1e1a17;
  --muted: #665d54;
  --line: rgba(32, 29, 27, 0.1);
  --accent: #a86d43;
  --accent-dark: #715034;
  --forest: #5b6a53;
  --shadow: 0 24px 70px rgba(38, 28, 18, 0.12);
  --success: #2a6a47;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #faf6f1 0%, #f3ede6 100%);
  line-height: 1.6;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

p {
  margin-top: 0;
  color: var(--muted);
}

h1,
h2,
h3,
button,
input,
select,
textarea {
  color: var(--text);
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5.6rem 0;
}

.section-muted {
  background: rgba(167, 109, 67, 0.06);
}

.eyebrow {
  color: var(--accent-dark);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0 0 0.9rem;
}

h1,
h2,
h3 {
  margin: 0 0 0.8rem;
  line-height: 1.1;
  letter-spacing: -0.05em;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
}

h2 {
  font-size: clamp(2.1rem, 3.2vw, 3.1rem);
}

h3 {
  font-size: clamp(1.2rem, 1.7vw, 1.6rem);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(247, 241, 231, 0.84);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5.2rem;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 800;
}

.brand-mark {
  width: 2.4rem;
  height: 2.4rem;
  display: grid;
  place-items: center;
  border-radius: 0.8rem;
  background: linear-gradient(135deg, var(--accent) 0%, #c18c60 100%);
  color: #fff;
  box-shadow: 0 16px 28px rgba(168, 109, 67, 0.25);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-text strong {
  font-size: 1.05rem;
}

.brand-text small {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-weight: 700;
}

.site-nav a {
  position: relative;
  transition: color 0.2s ease;
}

.site-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.4rem;
  width: 100%;
  height: 2px;
  background: var(--accent);
  opacity: 0;
  transform: scaleX(0.7);
  transition: all 0.2s ease;
}

.site-nav a:hover::after,
.site-nav a:focus-visible::after {
  opacity: 1;
  transform: scaleX(1);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.95rem 1.7rem;
  min-height: 3.2rem;
  font-weight: 800;
  line-height: 1;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button-primary {
  color: #fff;
  background: linear-gradient(135deg, var(--accent) 0%, #c18963 100%);
  box-shadow: 0 18px 32px rgba(146, 93, 60, 0.22);
}

.button-secondary {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(32, 29, 27, 0.14);
  color: var(--text);
}

.button-ghost {
  width: 100%;
  background: transparent;
  border-color: rgba(32, 29, 27, 0.15);
  color: var(--text);
}

.hero {
  padding: 4.5rem 0 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 3rem;
}

.lede {
  max-width: 42rem;
  font-size: 1.08rem;
  margin-bottom: 1.7rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.hero-stats li {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 8rem;
}

.hero-stats strong {
  font-size: 1.25rem;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.87rem;
}

.hero-visual {
  position: relative;
  min-height: 540px;
}

.image-card {
  position: absolute;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: var(--shadow);
}

.card-large {
  inset: 0 5.2rem 0 0;
}

.card-small {
  right: 0;
  bottom: 1.4rem;
  width: 42%;
  border: 8px solid rgba(255, 255, 255, 0.7);
}

.image-card img {
  height: 100%;
  object-fit: cover;
}

.section-heading {
  margin-bottom: 2rem;
}

.split-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
}

.text-link {
  color: var(--accent-dark);
  font-weight: 800;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.25rem;
}

.category-card {
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  background: var(--surface);
  overflow: hidden;
  box-shadow: 0 16px 30px rgba(32, 29, 27, 0.04);
}

.category-card img {
  height: 240px;
  object-fit: cover;
}

.category-body {
  padding: 1.2rem 1rem 1.4rem;
}

.category-body h3 {
  margin-bottom: 0.5rem;
}

.category-body p {
  margin: 0;
  font-size: 0.95rem;
}

.category-card.featured {
  background: linear-gradient(180deg, #f4eadc 0%, #faf5f1 100%);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.product-card {
  border: 1px solid var(--line);
  border-radius: 1.75rem;
  overflow: hidden;
  background: var(--surface);
  box-shadow: 0 18px 28px rgba(32, 29, 27, 0.05);
}

.product-card img {
  height: 250px;
  object-fit: cover;
}

.product-info {
  padding: 1.4rem 1.35rem 1.5rem;
}

.product-topline {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.product-topline h3 {
  margin: 0;
}

.product-topline span {
  color: var(--accent-dark);
  font-size: 0.82rem;
  font-weight: 800;
}

.product-card p {
  margin-bottom: 1rem;
}

.custom-section {
  background: linear-gradient(180deg, rgba(168, 109, 67, 0.06), rgba(32, 29, 27, 0.02));
}

.custom-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 2rem;
  align-items: center;
}

.custom-copy {
  max-width: 38rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1.4rem 0 2rem;
  display: grid;
  gap: 0.9rem;
  font-weight: 700;
  color: var(--text);
}

.feature-list li {
  position: relative;
  padding-left: 1.8rem;
}

.feature-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--accent-dark);
}

.custom-aside {
  display: grid;
  gap: 1.25rem;
}

.material-panel,
.craft-panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 18px 28px rgba(32, 29, 27, 0.04);
}

.material-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1rem;
}

.material-tags span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  background: rgba(168, 109, 67, 0.08);
  color: var(--header);
  font-size: 0.82rem;
  font-weight: 800;
}

.services-section {
  background: rgba(91, 106, 83, 0.04);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

.service-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 16px 28px rgba(32, 29, 27, 0.04);
}

.service-icon {
  width: 2.7rem;
  height: 2.7rem;
  display: grid;
  place-items: center;
  border-radius: 0.8rem;
  background: rgba(168, 109, 67, 0.1);
  color: var(--accent-dark);
  font-weight: 800;
  margin-bottom: 1rem;
}

.service-card h3 {
  margin-bottom: 0.6rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2.2rem;
  align-items: center;
}

.about-image img {
  width: 100%;
  min-height: 520px;
  object-fit: cover;
  border-radius: 2rem;
  box-shadow: var(--shadow);
}

.about-points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.about-points div {
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(168, 109, 67, 0.06);
  border: 1px solid rgba(113, 80, 52, 0.08);
}

.about-points strong {
  display: block;
  font-size: 1.3rem;
  color: var(--header);
}

.about-points span {
  color: var(--muted);
  font-size: 0.88rem;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.testimonial-card {
  margin: 0;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  padding: 1.6rem;
  box-shadow: 0 18px 28px rgba(32, 29, 27, 0.04);
}

.testimonial-card p {
  margin-bottom: 1rem;
  font-size: 1.04rem;
  color: var(--header);
}

.testimonial-card footer {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.testimonial-card footer span {
  color: var(--muted);
  font-size: 0.82rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  height: 240px;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 16px 28px rgba(32, 29, 27, 0.05);
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2rem;
  align-items: center;
}

.contact-list {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.contact-list div {
  display: grid;
  gap: 0.2rem;
}

.label {
  color: var(--accent-dark);
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  font-weight: 800;
  text-transform: uppercase;
}

.contact-list a,
.contact-list p {
  margin: 0;
  font-size: 1rem;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.8rem;
  padding: 0.7rem 1rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
  font-weight: 800;
}

.contact-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.75rem;
  padding: 1.4rem;
  box-shadow: var(--shadow);
}

.contact-form {
  display: grid;
  gap: 1rem;
}

.form-row {
  display: grid;
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.contact-form label {
  display: grid;
  gap: 0.45rem;
  font-weight: 700;
}

.contact-form span {
  color: var(--header);
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(32, 29, 27, 0.1);
  border-radius: 0.9rem;
  background: rgba(250, 247, 243, 0.9);
  color: var(--text);
  resize: vertical;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: 2px solid rgba(168, 109, 67, 0.2);
  border-color: rgba(168, 109, 67, 0.35);
}

.form-status {
  min-height: 1.2rem;
  margin: 0;
  color: var(--success);
  font-weight: 700;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.18);
}

.footer-inner {
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-inner p {
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.2rem;
  border: none;
  background: transparent;
}

.nav-toggle span {
  width: 1.7rem;
  height: 2px;
  border-radius: 2px;
  background: var(--header);
}

@media (max-width: 980px) {
  .hero-grid,
  .custom-grid,
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .product-grid,
  .testimonial-grid,
  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .nav-toggle {
    display: flex;
    order: 3;
  }

  .header-cta {
    display: none;
  }

  .site-nav {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 1rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 1rem;
    background: rgba(255, 253, 249, 0.98);
    border: 1px solid var(--line);
    border-radius: 1rem;
    box-shadow: 0 18px 32px rgba(32, 29, 27, 0.08);
  }

  .site-nav.is-open {
    display: flex;
  }

  .hero {
    padding-top: 3rem;
  }

  .hero-visual {
    min-height: 420px;
  }

  .category-grid,
  .product-grid,
  .testimonial-grid,
  .service-grid,
  .gallery-grid,
  .about-points,
  .two-col {
    grid-template-columns: 1fr;
  }

  .split-heading,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .section {
    padding: 4.2rem 0;
  }
}
