import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import Main from '@/components/main/main';
import Demo from '@/components/demo/demo';
import './page.scss';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <Demo />
      <Footer />
    </main>
  );
}
