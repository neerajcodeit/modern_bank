import Button from "./Button"
import styles from "../style"

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row  flex-col bg-black-gradient-2 rounded-[20px] box-shadow ` }>
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}  `}>Lets try our services now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque molestiae nemo sint doloribus similique.</p>
      </div>
      <div className={`${styles.flexCenter}sm:ml-10 ml-0 sm:mt-0 mt-0 `}>
        <Button/>
      </div>
    </section>
  ) 
}

export default CTA