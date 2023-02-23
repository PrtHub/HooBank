
import styles, {layout} from '../style'
import images from '../assets/images'

const Billing = () => {
  return (
    <div className={layout.sectionReverse} id='product'>
        <div className={layout.sectionImgReverse}>
          <img src={images.bill} alt="Billing" className='w-[100%] h-[100%] relative z-[5]' />
           <div className='absolute z-[0] -left-1/2 bottom-19 top-0 w-[100%] h-[60%] blue__gradient '/> 
        </div>
        <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={images.apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={images.google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </div>
   
  )
}

export default Billing
