import CallToAction from "../components/Home/CallToAction";
import Demo from "../components/Home/Demo";
import KeyFeatures from "../components/Home/KeyFeatures";
import Splashscreen from "../components/Home/Splashscreen";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Splashscreen />
      <Demo />
      <KeyFeatures />
      <CallToAction />
      <Testimonials />
    </main>
  );
};

export default Home;
