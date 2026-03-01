"use client";

import { Scene } from "@/components";

export default function Page() {
  return (
    <div className="page relative">
      <header className="header">
        <nav className="nav">
          <a className="brand" href="#">
            Apple
          </a>

          <div className="navLinks">
            <a href="#">Shop</a>
            <a href="#">Support</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>

      {/* SCENE FIXA E CENTRALIZADA */}
      

      <main className="main relative z-10">
        <div className="sceneWrapper">
          <Scene />
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="heroInner">
            <h1 className="heroTitle">Meet the MacBook Pro M4</h1>
            <p className="heroSubtitle">Power re-imagined.</p>

            <a className="heroCta" href="#">
              Starter Project <span aria-hidden="true">›</span>
            </a>
          </div>
        </section>

        <section className="feature featureLeft">
          <div className="featureInner">
            <h2 className="featureTitle">Retina Display</h2>
            <p className="featureDesc">
              Razor-sharp text, breathtaking colors, and lifelike tones for an
              immersive visual experience.
            </p>
          </div>
        </section>

        <section className="feature featureRight">
          <div className="featureInner">
            <h2 className="featureTitle">Pro Performance</h2>
            <p className="featureDesc">
              Built for demanding workflows—fast, efficient, and ready for
              anything you throw at it.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}