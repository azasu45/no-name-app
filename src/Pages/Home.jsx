import Navbar from '../Components/Navbar'
import Hover from '../Components/Hover'
import Conceptos from '../Components/Conceptos'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>    
    <Navbar/>
      <div className='bg-black'>
        
            <Hover/>
            <Conceptos/>
          <Footer/>
      </div>
    </>

  );
}

export default Home;