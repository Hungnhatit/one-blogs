import Image from "next/image";
import Link from "next/link";
import styles from './homepage.module.css';
import CardList from "@/components/cardList/CardList";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
