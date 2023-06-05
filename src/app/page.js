'use client';

// config and data
import { useState } from 'react';
import styles from './page.module.scss';
import en from '../data/en.json';
import pt from '../data/pt.json';

// components
import NavBar from '@/components/NavBar/NavBar';
import SimpleParagraph from '@/components/SimpleParagraph/SimpleParagraph';

export default function Home() {
  const [lang, setLang] = useState("en"); //declares lang default state
  const langHandler = () => {
    // this function defines whether the page lang is English or Portuguese
    if (lang === "pt") {
      return pt;
    } else {
      return en;
    }
  }
  const content = langHandler();
  const paragraph = content.text;
  return (
    <>
      <div className='nav-wrapper'>
        <NavBar content={content} langSelector={setLang} />
      </div>
      <main className={styles.main}>
        <div className='content-wrapper'>
          {paragraph.map(item => {
            return <SimpleParagraph text={item} />
          })}
        </div>
      </main>
    </>
  )
}
