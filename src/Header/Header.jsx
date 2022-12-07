import { Layout } from "./Layout";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <Layout />
    </div>
  );
}
