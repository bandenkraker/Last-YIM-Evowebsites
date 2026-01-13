import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-20">
        <div className="container px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacybeleid</h1>
          <div className="prose prose-lg">
            <p>Uw privacy is belangrijk voor ons. Dit beleid legt uit hoe we omgaan met uw gegevens.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
