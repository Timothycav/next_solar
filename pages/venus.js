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
    <Image src="/images/planet-venus.svg" alt="venus" className={styles.mainEarth}  width={380} height={380} /> 
    <Image src="/images/planet-venus-internal.svg" alt="venus" className={`${styles.inpix} ${styles.hide}`}  width={380} height={380} /> 
    <Image src="/images/geology-venus.png" alt="venus" className={`${styles.geopix} ${styles.hide}`}  width={380} height={380} />
      <div className={styles.grid_side}>
        <div className={styles.side_text}>
      <h1 className={styles.earth_text}>Venus</h1>
      <ul>
       
        {data.length >= 2 && <li  className={styles.over } >{data[1].overview.content}</li>}
        {data.length >= 2 && <li className={`${styles.inter} ${styles.hide}`}>{data[1].structure.content}</li>}
        {data.length >= 2 && <li  className={`${styles.surface} ${styles.hide}`}>{data[1].geology.content}</li>}


        {data.length >= 2 && <li>{data[1].rotation}</li>}
        {data.length >= 2 && <li>{data[1].revolution}</li>}
        {data.length >= 2 && <li>{data[1].radius}</li>}
        {data.length >= 2 && <li>{data[1].temperature}</li>}
        

      </ul>
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
    
 

     

   

    </>
  
  );
  };



export default Items;
