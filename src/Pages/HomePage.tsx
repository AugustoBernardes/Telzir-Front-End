import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import About_Image from "../assets/about_img.svg"

import { useState } from "react"

import classes from "../Pages/Main.module.scss"



function HomePage(this: any) {
  const [ destiny,setDestiny ] = useState('')
  const [ origin,setOrigin ] = useState('')
  const [ plan,setPlan ] = useState('')
  const [ minutes,setMinutes ] = useState('')
  const [ pricePlan,setpricePlan ] = useState('')
  const [ priceNoPlan,setPriceNoPlan ] = useState('')
  const [ error,setError ] = useState(false)

  const calculate = (event:any) => {
    event.preventDefault();
    setError(false)

    // Receiving variables
    let origin = event.target.origin.value
    let destiny = event.target.destiny.value
    let plan = event.target.plan.value
    let minutes = event.target.minutes.value

    setOrigin(origin)
    setDestiny(destiny)
    setMinutes(minutes)
    setPlan(`Fale ${plan}`)

    if(origin == '011' && destiny == '016'){

      if((minutes - plan) > 0){
        let price = (minutes - plan ) * 1.90
        let tax = price * 0.10
        let price_with_plan = (price + tax).toFixed(2)

        setpricePlan(price_with_plan)
      }else{
        setpricePlan('0')
      }
      setPriceNoPlan((minutes * 1.90).toFixed(2))

    }else if(origin == '016' && destiny == '011'){

      if((minutes - plan) > 0){
        let price = (minutes - plan ) * 2.90
        let tax = price * 0.10
        let price_with_plan = (price + tax).toFixed(2)

        setpricePlan(price_with_plan)
      }else{
        setpricePlan('0')
      }
      setPriceNoPlan((minutes * 2.90).toFixed(2))
      
    }else if(origin == '011' && destiny == '017'){

      if((minutes - plan) > 0){
        let price = (minutes - plan ) * 1.70
        let tax = price * 0.10
        let price_with_plan = (price + tax).toFixed(2)

        setpricePlan(price_with_plan)
      }else{
        setpricePlan('0')
      }
      setPriceNoPlan((minutes * 1.70).toFixed(2))
      
    }else if(origin == '017' && destiny == '011'){

      if((minutes - plan) > 0){
        let price = (minutes - plan ) * 2.70
        let tax = price * 0.10
        let price_with_plan = (price + tax).toFixed(2)

        setpricePlan(price_with_plan)
      }else{
        setpricePlan('0')
      }
      setPriceNoPlan((minutes * 2.90).toFixed(2))
      
    }else if(origin == '011' && destiny == '018'){

      if((minutes - plan) > 0){
        let price = (minutes - plan ) * 0.90
        let tax = price * 0.10
        let price_with_plan = (price + tax).toFixed(2)

        setpricePlan(price_with_plan)
      }else{
        setpricePlan('0')
      }
      setPriceNoPlan((minutes * 2.90).toFixed(2))
      
    }else if(origin == '018' && destiny == '011'){

      if((minutes - plan) > 0){
        let price = (minutes - plan ) * 1.90
        let tax = price * 0.10
        let price_with_plan = (price + tax).toFixed(2)

        setpricePlan(price_with_plan)
      }else{
        setpricePlan('0')
      }
      setPriceNoPlan((minutes * 1.90).toFixed(2))
      
    }else{
      setError(true)
    }
    
  }


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
                <form  onSubmit={calculate} >
                  <div className={classes.form_data}>
                    <label>
                      Origem
                      <select name="origin">
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                      </select>
                    </label>
                    <label>
                      Destino
                      <select name="destiny">
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                      </select>
                    </label>
                    <label>
                      Pacote
                      <select name="plan">
                        <option value={30}>Fale 30</option>
                        <option value={60}>Fale 60</option>
                        <option value={120}>Fale 120</option>
                      </select>
                    </label>
                    <label>
                      Minutos
                      <input type="number" placeholder='Minutos' name="minutes" id="minutes" />
                    </label>
                  </div>
                  <input type="submit" value="Calcular" />
                </form>
                { error ? <p>Faça uma simulação valida!</p> : 
                  <div className={classes.calculated_values}>
                    <div className={classes.calculated_values_card}>
                        <h2>Origem</h2>
                        <p>1233</p>
                    </div>
                    
                </div>
                }
              </div>
            </div>
        </main>     
      <Footer/>
      
    </>
  )
}

export default HomePage

