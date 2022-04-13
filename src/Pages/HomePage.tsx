import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import About_Image from "../assets/about_img.svg"

import classes from "../Pages/Main.module.scss"

import { Route, BrowserRouter } from "react-router-dom";


function HomePage() {

  return (
    <>  
      <Header/>    
        <main>
            <div className={classes.about} id='about'>
                <img className={classes.about_image} src={About_Image} alt="About Image" />
                <p className={classes.about_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className={classes.promotion}>
              <h2>Promoção Fale Mais!</h2>
                <div className={classes.promotion_about}>

                </div>
            </div>
        </main>     
      <Footer/>
      
    </>
  )
}

export default HomePage

