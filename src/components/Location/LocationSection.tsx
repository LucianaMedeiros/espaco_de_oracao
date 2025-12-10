import "./LocationSection.css";

export function LocationSection() {
  return (
    <section id="localizacao" className="section location-section">
      <div className="location-content">
        <div className="location-text">
          <h2>Onde estamos</h2>
          <p>
            Nosso espaço físico está em Penedo, região de Itatiaia, RJ. 
            Um lugar tranquilo, cercado de natureza, ideal para momentos de oração e recolhimento.
          </p>
          <p className="location-address">
            Avenida Casas das Pedras, número XXX<br />
            Penedo, Itatiaia, RJ — CEP 27580-000
          </p>
        </div>

        <div className="location-map-card">
          <div className="location-map-wrapper">
            <iframe
              title="Mapa do Espaço de Oração"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.880766493843!2d-44.542!3d-22.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3APenedo!2sPenedo%2C%20Itatiaia%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v0000000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="location-map-note">
            Use o mapa para traçar sua rota até o nosso espaço em Penedo.
          </p>
        </div>
      </div>
    </section>
  );
}
