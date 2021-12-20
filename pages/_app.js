import '../styles/globals.css'
import Link from 'next/link'
import logo from '../public/images/fibbo-bl.png';
import IconButton from '@material-ui/core/IconButton';

function MyApp({ Component, pageProps }) {
  return (
    <div>
   
      <nav className="border-b p-6">
      <img 
        className="m-2 w-20 sm:w-40 self-center"                                          
        src="../images/Fibbo-azul.png"
        
      />
        {/* <p src="../images/Fibbo-azul.png" className="text-4xl font-bold" >Fibbo Marketplace</p> */}
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-blue-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-blue-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-blue-500">
              My NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-blue-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp