import React from 'react';
import Event from '../Event/Event';
import halloween from '../images/halloween.jpeg';
import lunarNewYear from '../images/lunarNewYear.jpeg';
import durgapuja from '../images/durgapuja.jpeg';
import fourthOfJuly from '../images/4thofJuly.jpeg';
import Thanksgiving from '../images/thanksgiving.jpeg';
import boimela from '../images/boimela.jpeg';
import eid from '../images/eid.jpeg';
import jamaica from '../images/jamaica.jpeg';
import holi from '../images/holi.jpeg';
import bastille from '../images/bastille.jpeg';
import maslenitsa from '../images/maslenitsa.jpeg';
import balloonFestive from '../images/balloonFestive.jpeg';
import pohelaBoishakh from '../images/pohelaBoishakh.jpeg';
import venice from '../images/venice.jpeg';
import thimphu from '../images/thimpu.jpeg';
const Celebration = () => {
    return (
        <>
        <div className='Celebration'>
           <Event img={halloween} name='Halloween' country='USA'link='https://www.britannica.com/topic/Halloween'/>
           <Event img={lunarNewYear}name='Lunar new Year' country='China'link='https://www.britannica.com/topic/Lunar-New-Year'/>
           <Event img={durgapuja}name='Durga Puja' country='India'link='https://www.britannica.com/topic/Durga-Puja'/>
           <Event img={fourthOfJuly}name='4th of July' country='USA'link='https://www.history.com/topics/holidays/july-4th'/>  
           <Event img={Thanksgiving}name='Thanksgiving' country='USA'link='https://www.britannica.com/topic/Thanksgiving-Day'/>  
           <Event img={boimela}name='Ekushe Boi Mela' country='Bangladesh'link='https://www.thedailystar.net/daily-star-books/news/amar-ekushey-boi-mela-essence-bengali-excellence-3236436'/>  
           <Event img={eid}name='Eid-ul-fitar' country='Saudi Arabia' link='https://www.britannica.com/topic/Eid-al-Fitr'/>    
           <Event img={jamaica}name='Carnival in Jamaica' country='Jamaica'link='https://www.sandals.com/blog/jamaica-carnival/'/>  
           <Event img={holi}name='Holi' country='India' link='https://www.britannica.com/topic/Holi'/>  
           <Event img={bastille}name='Bastille Day' country='France' link='https://www.britannica.com/topic/Bastille-Day'/>  
           <Event img={maslenitsa}name='Maslenitsa' country='Russia'link='https://www.56thparallel.com/maslenitsa-festival/'/> 
           <Event img={balloonFestive}name='Cappadocia Balloon Festival' country='Turkey'link='https://www.hotairballoons-cappadocia.com/festival/'/> 
           <Event img={pohelaBoishakh}name='Pohela Boishakh' country='Bangladesh'link='https://en.ittefaq.com.bd/4996/Pohela-Boishakh-Festival-of-Tradition-and'/> 
           <Event img={venice}name='Carnevale in Venice' country='Italy'link='https://www.walksofitaly.com/blog/things-to-do/all-about-carnival-in-venice-venetian-masks-and-more'/> 
           <Event img={thimphu}name='Thimphu Tshechu' country='Bhutan'link='https://himalayanwindows.com/trip/thimphu-tshechu-festival-tour-7-nights-8-days/#:~:text=The%20Thimphu%20Tshechu%20(Festival)%20is,Dorji%20Wangchuck%2C%20in%20the%201950s.'/>  
        </div> 
        </>
    );
};

export default Celebration;