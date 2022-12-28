import { signIn, signOut, useSession } from "next-auth/client";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, loadingSession] = useSession();
  console.log("session = ", session);
  if (loadingSession) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextAuth Google Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Google Authentication with NextAuth </h1>

      {!session && (
        <>
          <button className={styles.primaryButton} onClick={() => signIn()}>
            Sign In
          </button>
        </>
      )}

      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div className={styles.boxCenter}>
            <h4>Email: {session.user.email}</h4>
            <br />
            {session.user.image && (
              <span>
                <img src={session.user.image} alt={session.user.name} />
              </span>
            )}
          </div>
          <br />
          <br />
          <button className={styles.primaryButton} onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}
