import styles from './LoadingBubble.module.scss';

const LoadingBubble = () => (
  <div className={styles.loader}>
    <span className={styles.circle} />
    <span className={styles.circle} />
    <span className={styles.circle} />
  </div>
);

export default LoadingBubble;
