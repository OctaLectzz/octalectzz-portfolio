import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Animation = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-out-cubic'
  });
  }, [])
}
