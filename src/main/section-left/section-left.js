import './section-left.css';
import photo1 from '../../assets/photo1.jpg';

function SectionLeft() {
  return(
   <div className="section-left">
   <div className='text'> 
   <h2 className='titel'>A Blue Shelter</h2>
   <p className='content'>
   Het huis wordt stuk voor stuk afgebroken. Twijfel zaait angst en oogst hoop. En op de ruïnes van het verleden wordt plots het heden gebouwd.
   <br/><br/>
Iemand flaneert door de nieuwbouw van zijn bestaan, opent de ogen, sluit zijn gedachten. Langzaam sijpelt moed door de kieren van de hoop en wemelt zich rond iemand die in het niets verdwijnt, zoals … iemand die uit het niets kwam. En ten lange leste zijn schuilplaats gevonden heeft en eeuwig verder leeft in A Blue Shelter …
<br/>   
<br/>
U kan de dansers aan het werk zien op vrijdag 13, zaterdag 14 maart om 20.15 u. en op zondag 15 maart om 15.00 u.
<br/>
<br/>
Er kunnen wel nog steeds tickets besteld worden via de balie van het Dommelhof of op 011/80.50.02.
   </p>
   </div>
<img src={photo1}></img>
   </div>
  )
}

export default SectionLeft