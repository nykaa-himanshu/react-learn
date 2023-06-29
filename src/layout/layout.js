import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    return (
      <div className="Layout">
        <Header/>
        <div style={{minHeight: '100vh'}}>
          {props.children}
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Layout;