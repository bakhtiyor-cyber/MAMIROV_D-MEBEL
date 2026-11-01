:root {
  --bg: #f7f1e7;
  --surface: #fffdf9;
  --card: #f0e7dc;
  --card-strong: #e8dcc7;
  --header: #1f1d1b;
  --muted: #72675d;
  --text: #1d1a18;
  --line: rgba(31, 29, 27, 0.08);
  --accent: #a76f42;
  --accent-dark: #7c4b2a;
  --forest: #5b6a53;
  --shadow: 0 24px 70px rgba(36, 25, 17, 0.12);
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
  background: linear-gradient(180deg, #f9f5f0 0%, #f3eee7 100%);
  color: var(--text);
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
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5.5rem 0;
}

.section-muted {
  background: rgba(203, 177, 146, 0.12);
}

.eyebrow {
  color: var(--accent-dark);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 0.8rem;
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
  margin-bottom: 1.2rem;
}

h2 {
  font-size: clamp(2.1rem, 3.2vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.045em;
  margin-bottom: 0.75rem;
}

h3 {
  font-size: 1.35rem;
  line-height: 1.3;
  margin-bottom: 0.4rem;
}

p {
  color: var(--muted);
  font-size: 1.02rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(10px);
  background: rgba(247, 241, 231, 0.82);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  font-weight: 800;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 0.8rem;
  background: linear-gradient(135deg, var(--accent) 0%, #c38d5d 100%);
  color: #fff;
  font-size: 1.1rem;
  box-shadow: 0 12px 25px rgba(167, 111, 66, 0.28);
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
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-weight: 600;
  color: var(--header);
}

.site-nav a {
  position: relative;
  transition: color 0.2s ease;
}

.site-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.38rem;
  width: 100%;
  height: 2px;
  background: var(--accent);
  opacity: 0;
  transform: scaleX(0.6);
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
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.95rem 1.65rem;
  font-weight: 700;
  line-height: 1;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--accent) 0%, #bf9069 100%);
  color: #fff;
  box-shadow: 0 18px 30px rgba(142, 91, 56, 0.2);
}

.button-secondary {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(31, 29, 27, 0.18);
  color: var(--text);
}

.button-ghost {
  width: 100%;
  background: transparent;
  border-color: rgba(31, 29, 27, 0.15);
  color: var(--text);
}

.hero {
  padding: 4.5rem 0 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 3rem;
}

.lede {
  max-width: 38rem;
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
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.hero-stats li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 7.5rem;
}

.hero-stats strong {
  font-size: 1.15rem;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  position: relative;
  min-height: 530px;
}

.image-card {
  position: absolute;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: var(--shadow);
}

.card-large {
  inset: 0 5rem 0 0;
}

.card-small {
  right: 0;
  bottom: 1.5rem;
  width: 42%;
  border: 8px solid rgba(255, 255, 255, 0.6);
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
  font-weight: 700;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.25rem;
}

.category-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 16px 30px rgba(35, 29, 24, 0.05);
}

.category-card img {
  height: 240px;
  object-fit: cover;
}

.category-body {
  padding: 1.2rem 1rem 1.5rem;
}

.category-body h3 {
  margin-bottom: 0.45rem;
}

.category-body p {
  margin: 0;
  font-size: 0.96rem;
}

.category-card.featured {
  background: linear-gradient(180deg, #f4eadc 0%, #f9f3ed 100%);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.75rem;
  overflow: hidden;
  box-shadow: 0 18px 28px rgba(26, 20, 17, 0.05);
}

.product-card img {
  height: 250px;
  object-fit: cover;
}

.product-info {
  padding: 1.35rem 1.35rem 1.5rem;
}

.product-topline {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
}

.product-topline h3 {
  margin-bottom: 0;
}

.product-topline span {
  color: var(--accent-dark);
  font-size: 0.87rem;
  font-weight: 700;
}

.product-card p {
  margin-bottom: 1.1rem;
}

.custom-section {
  background: linear-gradient(180deg, rgba(150, 114, 80, 0.06), rgba(59, 58, 49, 0.03));
}

.custom-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 2rem;
}

.custom-copy {
  max-width: 36rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1.4rem 0 2rem;
  display: grid;
  gap: 0.8rem;
  color: var(--text);
  font-weight: 600;
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
  box-shadow: 0 18px 28px rgba(31, 29, 27, 0.04);
}

.material-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.material-tags span {
  background: rgba(167, 111, 66, 0.09);
  color: var(--header);
  border-radius: 999px;
  padding: 0.55rem 0.9rem;
  font-weight: 700;
  font-size: 0.85rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2.25rem;
  align-items: center;
}

.about-image img {
  border-radius: 2rem;
  min-height: 500px;
  object-fit: cover;
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
  background: rgba(167, 111, 66, 0.06);
  border: 1px solid rgba(124, 75, 42, 0.08);
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
  padding: 1.6rem;
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  box-shadow: 0 18px 28px rgba(26, 20, 17, 0.04);
}

.testimonial-card p {
  margin-bottom: 1.1rem;
  font-size: 1.02rem;
  color: var(--header);
}

.testimonial-card footer {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
}

.testimonial-card footer span {
  color: var(--muted);
  font-size: 0.85rem;
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
  box-shadow: 0 16px 28px rgba(35, 29, 24, 0.05);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.contact-info h2 {
  margin-bottom: 1.6rem;
}

.contact-list {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.4rem;
}

.contact-list div {
  display: grid;
  gap: 0.2rem;
}

.label {
  color: var(--accent-dark);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
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
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.8rem;
  padding: 0.7rem 1rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.4);
}

.map-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.75rem;
  box-shadow: var(--shadow);
  padding: 1rem;
}

.map-placeholder {
  display: grid;
  place-items: center;
  min-height: 420px;
  border-radius: 1.2rem;
  background: linear-gradient(135deg, rgba(183, 164, 138, 0.18), rgba(91, 106, 83, 0.12));
  border: 1px dashed rgba(31, 29, 27, 0.2);
  color: var(--header);
  text-align: center;
  font-weight: 800;
}

.map-placeholder span {
  display: block;
  font-size: 1.6rem;
  margin-bottom: 0.35rem;
}

.map-placeholder small {
  color: var(--muted);
  font-weight: 600;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.25);
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
  color: var(--header);
  font-weight: 600;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 0.28rem;
  border: 0;
  background: transparent;
  padding: 0.25rem;
}

.nav-toggle span {
  width: 1.7rem;
  height: 2px;
  background: var(--header);
  border-radius: 2px;
}

@media (max-width: 980px) {
  .hero-grid,
  .custom-grid,
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .product-grid,
  .testimonial-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .site-header {
    position: sticky;
  }

  .nav-toggle {
    display: flex;
    order: 3;
  }

  .header-cta {
    display: none;
  }

  .site-nav {
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: calc(100% + 0.5rem);
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(255, 253, 249, 0.96);
    border: 1px solid var(--line);
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 18px 32px rgba(26, 20, 17, 0.08);
  }

  .site-nav.is-open {
    display: flex;
  }

  .section {
    padding: 4.25rem 0;
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
  .gallery-grid,
  .about-points {
    grid-template-columns: 1fr;
  }

  .split-heading,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
