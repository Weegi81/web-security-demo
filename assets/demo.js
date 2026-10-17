body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #0f172a;
  color: #e2e8f0;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.hero {
  background: linear-gradient(135deg, #111827, #1d4ed8);
  padding: 4rem 0 3rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  color: #93c5fd;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  margin: 0.2rem 0 1rem;
}

.subtitle {
  max-width: 720px;
  font-size: 1.08rem;
  color: #dbeafe;
}

.cta-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.button {
  display: inline-block;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.button.primary {
  background: #38bdf8;
  color: #082f49;
}

.button.secondary {
  background: transparent;
  border: 1px solid #93c5fd;
  color: #e0f2fe;
}

main {
  padding: 2rem 0 4rem;
}

.panel {
  background: #111827;
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

pre {
  background: #020817;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 1rem;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
}

ul {
  padding-left: 1.2rem;
}

@media (max-width: 640px) {
  .hero {
    padding-top: 3rem;
  }
}
