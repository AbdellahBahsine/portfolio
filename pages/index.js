import Hero from './components/hero/hero.component';
import About from './components/about/about.component';
import Work from './components/work/work.component';
import Contact from './components/contact/contact.component';
import Layout from './components/layout/layout.component';

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Work />
        <Contact />
      </Layout>
    </div>
  )
}
