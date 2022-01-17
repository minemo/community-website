import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/Link'
import Image from 'next/Image'
import styles from '../styles/Home.module.css'
import { choices } from '@thi.ng/transducers'

interface Member {
  name: string;
  description: string;
  bgcol?: string;
  bgimg?: string;

}

let members: Member[] = [
  {name:'Mo',description:'Programmierer, Künstler,...', bgcol: choices(["red", "blue", "green"]).next().value},
  {name:'Ryan',description:'Etwas längerer Platzhalter', bgcol: choices(["red", "blue", "green"]).next().value},
  {name:'Marlon',description:'Content-Creator, Youtuber,...', bgcol: choices(["red", "blue", "green"]).next().value}]



const Home: NextPage = () => {
  const rcol = choices(["red", "blue", "green"]).next().value;
  const namechoice = choices(["Wanderer", "Besucher", "Freund"]).next().value;
  return (
    <div className={styles.container}>
      <Head>
        <title>Community WeeW</title>
        <meta name="description" content="Mo, Ryan und Marlon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 className={styles.title}>
          Willkommen {' '}
          <a style={{color: rcol}}>{namechoice}</a>
        </h1>

        <div className={styles.grid}>
          {members.map((member) =>(
              <div className={styles.membertab} style={{background:member.bgcol}} key={member.name.toLowerCase()}>
                  <Link href={'/i/' + member.name.toLowerCase()}>
                  <div>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.description}>{member.description}</p>
                  </div>
                  </Link>
              </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
