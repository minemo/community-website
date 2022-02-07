import Link from 'next/Link'
import { NextPage } from 'next/types'

const NotFound: NextPage = () => {
    return (
        <div>
          <h1>Nothing here, but us Chickens!</h1>
          <Link href="/">
            <a>
              Bacc
            </a>
          </Link>
        </div>
      )
}

export default NotFound