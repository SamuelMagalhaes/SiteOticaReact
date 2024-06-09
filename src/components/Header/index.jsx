import styles from './Header.module.css'
import Image from 'next/image'
import Logo from '../../../public/Logo.png'
import Link from 'next/link'
import Produtos from '../Produtos'
import Sobre from '../Sobre'
import Contato from '../Contato'

export default function Header(){
  return(
    <header className={styles.header_container}>
      <div className={styles.container}>
        <Image className={styles.logo} src={Logo} alt='Logotipo'/>
        <div className={styles.menu}>
          <Link className={styles.link} href={<Produtos/>}>Produtos</Link>
          <Link className={styles.link}  href={<Sobre/>}>Sobre</Link>
          <Link className={styles.link}  href={<Contato/>}>Contato</Link>
        </div>      
      </div>
    </header>
  )
}