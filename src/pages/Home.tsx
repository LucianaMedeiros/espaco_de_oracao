import { Banner } from "../components/Banner/Banner";
import { Content } from "../components/Content/Content";
import { DailyPrayer } from "../components/DailyPrayer/DailyPrayer";
import { Footer } from "../components/Footer/Footer";
import { PrayerRequestForm } from "../components/Forms/PrayerRequestForm";
import { Header } from "../components/Header/Header";
import { LocationSection } from "../components/Location/LocationSection";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";


export function Home() {
  return (
    <div className="app-container">
      <Header />
      <Banner />

      <section id="orar" className="section section-highlight">
        <h2>Reserve agora 3 minutos para orar</h2>
        <p>
          Feche os olhos, respire fundo e ofereça este momento para aquilo que mais
          precisa de paz hoje.
        </p>

        <div className="quote-block">
          <p>
            “Que eu encontre serenidade para aceitar o que não posso mudar,
            coragem para transformar o que posso e sabedoria para perceber a diferença.”
          </p>
        </div>
      </section>

      <DailyPrayer />
      <Content />
      <PrayerRequestForm />
      <LocationSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
