import { styled } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Items = () => {
  const [data, setData] = useState([]);
 
 const myMouseOver = () => {
  const over = document.querySelector(`.${styles.over}`);
  const inter = document.querySelector(`.${styles.inter}`);
  const surface = document.querySelector(`.${styles.surface}`);
  
  const inpix = document.querySelector(`.${styles.inpix}`);
  const mainEarth = document.querySelector(`.${styles.mainEarth}`);
  const geopix = document.querySelector(`.${styles.geopix}`);
  

  over.classList.remove(`${styles.hide}`);
  inter.classList.add(`${styles.hide}`);
  surface.classList.add(`${styles.hide}`);

  inpix.classList.add(`${styles.hide}`);
  mainEarth.classList.remove(`${styles.hide}`);
  geopix.classList.add(`${styles.hide}`);

  }

  const myMouseOver2 = () => {
    const over = document.querySelector(`.${styles.over}`);
    const inter = document.querySelector(`.${styles.inter}`);
    const surface = document.querySelector(`.${styles.surface}`);
    
    const inpix = document.querySelector(`.${styles.inpix}`);
    const mainEarth = document.querySelector(`.${styles.mainEarth}`);
    const geopix = document.querySelector(`.${styles.geopix}`);
    
  
    over.classList.add(`${styles.hide}`);
    inter.classList.remove(`${styles.hide}`);
    surface.classList.add(`${styles.hide}`);
  
    inpix.classList.remove(`${styles.hide}`);
    mainEarth.classList.add(`${styles.hide}`);
    geopix.classList.add(`${styles.hide}`);
  
    }

    const myMouseOver3 = () => {
      const over = document.querySelector(`.${styles.over}`);
      const inter = document.querySelector(`.${styles.inter}`);
      const surface = document.querySelector(`.${styles.surface}`);
      
      const inpix = document.querySelector(`.${styles.inpix}`);
      const mainEarth = document.querySelector(`.${styles.mainEarth}`);
      const geopix = document.querySelector(`.${styles.geopix}`);
      
    
      over.classList.add(`${styles.hide}`);
      inter.classList.add(`${styles.hide}`);
      surface.classList.remove(`${styles.hide}`);
    
      inpix.classList.add(`${styles.hide}`);
      mainEarth.classList.remove(`${styles.hide}`);
      geopix.classList.remove(`${styles.hide}`);
    
      }

  useEffect(() => {
    // Fetch the JSON data (Assuming it's in the public folder)
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


 
  return (
    <>
    <Navbar />
    <div className= {styles.grid_container }>
    <Image src="/images/planet-mars.svg" alt="venus" className={styles.mainEarth}  width={380} height={380} /> 
    <Image src="/images/planet-mars-internal.svg" alt="venus" className={`${styles.inpix} ${styles.hide}`}  width={380} height={380} /> 
    <Image src="/images/geology-mars.png" alt="venus" className={`${styles.geopix} ${styles.hide}`}  width={380} height={380} />
      <div className={styles.grid_side}>
        <div className={styles.side_text}>
       <h1 className={styles.earth_text}>Mars</h1>
       
       
        {data.length >= 2 && <p  className={styles.over } >{data[3].overview.content}</p>}
        {data.length >= 2 && <p className={`${styles.inter} ${styles.hide}`}>{data[3].structure.content}</p>}
        {data.length >= 2 && <p  className={`${styles.surface} ${styles.hide}`}>{data[3].geology.content}</p>}
       
       </div>
     
       <div className={styles.panels}>
     
       <div className={styles.one}  onMouseOver={myMouseOver} >
       <span className={styles.num}>01 </span> 
      Overview
       </div>
       <div className={styles.two}  onMouseOver={myMouseOver2}  >
    
      <span className={styles.num}>02 </span> 
      Internal Structure
        </div>
       <div className={styles.three} onMouseOver={myMouseOver3} >
      <span className={styles.num}>03 </span>
      Surface Geology
      </div>
     </div>
      </div>
      </div>
  
        
  
    
   <div className={styles.end}> 
  <div className={styles.box_one}>
    <div className={styles.box_one_content}>
      <div className={styles.box_one_content_title}>
        Rotation Time
      </div>
      <div className={styles.box_one_content_text}>
      {data.length >= 2 && data[3].rotation}
      </div>
    </div>
  </div>
  <div className={styles.box_two}>
    <div className={styles.box_two__content}>
      <div className={styles.box_two__content__title}>
        Revolution Time
      </div>
      <div className={styles.box_two__content__text}>
      {data.length >= 2 && data[3].revolution}
      </div>
    </div>
  </div>
  <div className={styles.box_three}>
    <div className={styles.box_three__content}>
      <div className={styles.box_three__content__title}>
        Radius
      </div>
      <div className={styles.box_three__content__text}>
      {data.length >= 2 && data[3].radius}
      </div>
    </div>
  </div>
  <div className={styles.box_four}>
    <div className={styles.box_four__content}>
      <div className={styles.box_four__content__title}>
        Average Temp.
      </div>
      <div className={styles.box_four__content__text}>
      {data.length >= 2 && data[3].temperature}
      </div>
    </div>
  
</div>
</div>


    
  </>
  );
  };



export default Items;