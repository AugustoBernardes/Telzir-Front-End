import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import About_Image from "../assets/about_img.svg"

import classes from "../Pages/Main.module.scss"



function HomePage(this: any) {

  return (
    <>  
      <Header/>    
        <main>
            <div className={classes.about} id='about'>
                <img className={classes.about_image} src={About_Image} alt="About Image" />
                <p className={classes.about_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className={classes.promotion}>
              <h2 className={classes.promotion_title}>Promoção Fale Mais!</h2>
              <div className={classes.promotion_about}>
                  <h3>Com a telzir você pode fazer ligações dos destinos abaixo!</h3>
                  <table>
                    <tr>
                      <th>Origem</th>
                      <th>Destino</th>
                      <th>$/Minuto </th>
                    </tr>
                    <tr>
                      <td>011</td>
                      <td>016</td>
                      <td>R$ 1,90</td>
                    </tr>
                    <tr>
                      <td>016</td>
                      <td>011</td>
                      <td>R$ 2,90</td>
                    </tr>
                    <tr>
                      <td>011</td>
                      <td>017</td>
                      <td>R$ 1,70</td>
                    </tr>
                    <tr>
                      <td>017</td>
                      <td>011</td>
                      <td>R$ 2,70</td>
                    </tr>
                    <tr>
                      <td>011</td>
                      <td>018</td>
                      <td>R$ 0,90</td>
                    </tr>
                    <tr>
                      <td>018</td>
                      <td>011</td>
                      <td>R$ 1,90</td>
                    </tr>
                  </table>
                  <h3>Com os novos planos você paga apenas o exedente, atualmente temos os planos Fale 30, Fale 60 e Fale 120!</h3>
              </div>
              <div className={classes.calculator}>
                <h2 className={classes.calculator_title}>Calcule agora o valor antigo e com o plano!</h2>
                <form >
                  <div className={classes.form_data}>
                    <label>
                      Origem:
                      <select >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                      </select>
                    </label>
                    <label>
                      Destino:
                      <select >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                      </select>
                    </label>
                  </div>
                  <input type="submit" value="Calcular" />
                </form>
              </div>
            </div>
        </main>     
      <Footer/>
      
    </>
  )
}

export default HomePage

