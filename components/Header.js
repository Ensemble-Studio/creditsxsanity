import {
     headerWrapper,
     headerLogo
} from '../styles/Header.module.css';
import logo from '../public/logo.svg';

import Image from 'next/image'



export default function Header() {

     return (
          <div>
               <div className={headerWrapper}>
                    <div className={headerLogo}>
                         <Image src={logo}></Image>
                    </div>
               </div>
          </div>



     )
}