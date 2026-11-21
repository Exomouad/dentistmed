import Image from "next/image";
import ServiceTabs from "@/components/ServiceTabs";

// TODO: remplacer par les vraies coordonnées du cabinet
const PHONE = "+212 6 00 00 00 00";
const ADDRESS = "Mohammedia, Maroc";
const HOURS = "Lun – Sam : 9h – 19h";
const BOOK = `https://wa.me/212600000000`;

const FEATURES = ["Soins sans douleur", "Technologie moderne", "Équipe expérimentée", "Tarifs accessibles"];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">Zola Smile</a>
        <nav aria-label="Navigation principale">
          <a href="#soins">Soins</a>
          <a href="#cabinet">Le cabinet</a>
          <a href="#technologie">Technologie</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn small" href={BOOK}>Prendre rendez-vous</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <h1>Soins dentaires pour toute la famille</h1>
            <p>Des soins en douceur et une technologie moderne, au cœur de Mohammedia.</p>
            <a className="btn" href={BOOK}>Prendre rendez-vous</a>
          </div>
          <Image className="hero-img" src="/images/cabinet-2.png" alt="Salle de soins du Centre Dentaire Zola Smile" width={1360} height={1020} priority />
          <ul className="features">
            {FEATURES.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </section>

        <section id="soins" className="section">
          <ServiceTabs />
        </section>

        <section id="cabinet" className="section about">
          <div>
            <h2>Des soins personnalisés, dans un cadre apaisant</h2>
            <p>
              Le Centre Dentaire Zola Smile (ZSDC) vous accueille dans un cabinet lumineux et moderne.
              Chaque traitement est expliqué avant d’être réalisé, pour que vous soyez à l’aise à chaque étape.
            </p>
          </div>
          <Image className="rounded" src="/images/accueil.png" alt="Accueil du cabinet Zola Smile" width={765} height={1020} />
        </section>

        <section className="section gallery">
          <Image className="rounded" src="/images/salle-attente.png" alt="Salle d’attente" width={765} height={1020} />
          <Image className="rounded" src="/images/cabinet-1.png" alt="Fauteuil et écran d’empreinte numérique" width={1360} height={1020} />
        </section>

        <section id="technologie" className="section about reverse">
          <Image className="rounded" src="/images/radio-3d.png" alt="Appareil de radiographie panoramique et 3D Acteon" width={765} height={1020} />
          <div>
            <h2>Une imagerie précise pour des diagnostics fiables</h2>
            <p>
              Notre appareil de radiographie Acteon permet un diagnostic détaillé et un plan de traitement
              adapté, notamment pour les implants. Les empreintes numériques s’affichent à l’écran pendant la consultation.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <h2>Nous trouver</h2>
            <p>{ADDRESS}</p>
            <p>{HOURS}</p>
            <p><a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a></p>
            <a className="btn" href={BOOK}>Prendre rendez-vous</a>
          </div>
          <Image className="rounded" src="/images/facade.png" alt="Façade de l’immeuble du cabinet" width={650} height={1020} />
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Centre Dentaire Zola Smile, Mohammedia</footer>
    </>
  );
}
