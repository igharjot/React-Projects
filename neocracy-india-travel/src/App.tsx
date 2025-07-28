import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LambdaFetcher from './components/LambdaFetcher';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Lambda response shown here */}
      <div className="bg-gray-100 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Server Response</h2>
        <LambdaFetcher />
      </div>

      <Destinations />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
