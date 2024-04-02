import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import blackSand from '../public/black-sand-common-size.jpg';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={blackSand} fill alt="background" />
      <div className={styles.linkBox}>
        <Link href="/lotto" className={styles.link}>
          로또 번호<br></br>생성기로 이동
        </Link>
      </div>
    </main>
  );
}
