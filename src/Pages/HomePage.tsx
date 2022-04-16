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
          <div className={classes.body}>
            <h1 className={classes.body_title}>A telzir é uma compania telefonica reconhecida nacionalmente e internacionalmete com planos incriveis!</h1>
            <button className={classes.body_button}>Contato</button>
          </div>
            <div className={classes.promotion}>
              <h2 className={classes.promotion_title}>Promoção Fale Mais!</h2>
              <div className={classes.promotion_about}>
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
              </div>
              <div className={classes.calculator}>
                <h2 className={classes.calculator_title}>Calcule agora o valor antigo e com os plano Fale 30, 60 e 120!</h2>
                <form  onSubmit={calculate} >
                  <div className={classes.form_data}>
                    <div className={classes.form_data_camps}>
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
                    </div>
                    <div className={classes.form_data_camps}>
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
                  </div>
                  <input type="submit" value="Calcular" />
                </form>
                { error ? <h3 className={classes.calculated_values}>Faça uma simulação valida!</h3> : 
                  <div className={classes.calculated_values}>
                    <h3>Falando por {minutes} minutos do DDD:{origin} para {destiny}, sem o plano ficaria R${priceNoPlan}, mas com o plano {plan} vai para R${pricePlan}!</h3>
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

