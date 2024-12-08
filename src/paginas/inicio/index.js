import Banner from "componentes/Banner";
import styles from "./Inicio.module.css";
import posts from 'json/posts.json';
import Post from "componentes/Post";

export default function Inicio() {
    return (
        <main>
            <Banner />

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id} className={styles.post}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>

        </main>
    )
}