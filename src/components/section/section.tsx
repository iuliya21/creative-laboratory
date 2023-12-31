import styles from './section.module.css';

type SectionProps = {
  title: string,
  children: React.ReactElement[],
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.elements}>
        {children}
      </div>
    </section>
  )
}

export default Section;