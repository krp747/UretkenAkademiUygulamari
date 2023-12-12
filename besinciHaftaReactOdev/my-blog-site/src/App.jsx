import Header from './Header';
import Footer from './Footer';
import PostPreview from './PostPreview';
import About from './About';
import Contact from './Contact'
import './App.css';

function App() {
  const programcilikProps = {
    title: 'Programcılık',
    subtitle: 'Programcılık nedir ve geleceğin yazılım odağı.',
    author: 'Mehmet Enes Turhan',
    date: '7, Ağustos, 2023',
    link: "https://medium.com/@baykapoos0/programc%C4%B1l%C4%B1k-be2ef8e4ad58",
  };
  const lorawanPros = {
    title: 'LoRaWan',
    subtitle: 'LoRaWan nedir ve nasıl çalışır',
    author: 'Mehmet Enes Turhan',
    date: '3, Ağustos, 2023',
    link: "https://medium.com/@baykapoos0/lorawan-nedir-ve-nas%C4%B1l-%C3%A7al%C4%B1%C5%9F%C4%B1r-8c0822652ff0",
  };
  const verininYolculuguProps = {
    title: 'Verinin Yolculuğu',
    subtitle: 'Veri nasıl dönüşür nasıl yol alır',
    author: 'Mehmet Enes Turhan',
    date: '13, Ağustos, 2023',
    link: "https://medium.com/@baykapoos0/verinin-yolculu%C4%9Fu-dfbfd367bddf",
  }
  const kendiSitemProps = {
    title: 'My Todo App Site',
    subtitle: 'Bir todo app sayfası aynı zamanda chat gpt apisini kullanmakta bu saye de chatgpt ile sohbet edilebilmekte. Siteye kayıt olabilmek için admin parolası: butunlokumlariyerim, sonrasında e-posta ve şifre ile kayıt olabilirsiniz',
    author: 'Mehmet Enes Turhan',
    date: '08, Ağustos, 2023',
    link: "https://todosapp-site.netlify.app/",
  }
  return (
    <>
    <Header/>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="col">
            <h1 className="display-1">Postlar</h1>
            <PostPreview {...kendiSitemProps}/>
            <PostPreview {...programcilikProps}/>
            <PostPreview {...lorawanPros}/>
            <PostPreview {...verininYolculuguProps}/>
          </div>
          <About />
        </div>
        <Contact />
      </div>
      <Footer/>
    </>
  );
}

export default App;