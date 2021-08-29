import './Footer.css'
import lazy from '../../img/lazy.png'

export default function Footer(){
    return(
        <section className="section-footer">
            <img src={lazy} alt="lazy" className="lazy-img"/>
            <figcaption className="caption">Se houver suspeita de coronavirús, a orientação é se isolar. O hospital deve ser procurado se os demais sintomas se agravarem. Ilustração: Daniel Almeida/ SAÚDE é vital</figcaption>
        </section>
    )
}