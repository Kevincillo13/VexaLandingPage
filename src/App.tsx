import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Manifesto from './components/Manifesto';
import Testimonials from './components/Testimonials';
import Founder from './components/Founder';
import LaunchForm from './components/LaunchForm';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <main className="w-full bg-brand-white text-brand-black selection:bg-brand-violet selection:text-white">
      <Hero />
      <Problem />
      <Solution />
      <Manifesto />
      <Testimonials />
      <Founder />
      <LaunchForm />
      <BottomNav />
    </main>
  );
}

export default App;
