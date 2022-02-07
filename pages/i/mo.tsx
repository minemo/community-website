import styles from '../../styles/mo.module.css'
import Link from 'next/Link'
import { NextPage } from 'next/types'

const Mo: NextPage = () => {
    return (
        <div>
          <h1 className={styles.title}>Nothing here, but us Chickens!</h1>
          <Link href="/">
            <a className={styles.back}>
              Bacc
            </a>
          </Link>
        </div>
      )
}

export default Mo