import React from 'react'
import './storyreel.css'
import Reel from './Reel'
import { useStateValue } from '../../provider/stateProvider'

const StoryReel = () => {
  const [{user},dispatch] = useStateValue()
  return (
    <div className='storyreel'>
      <Reel
      img='https://tse3.mm.bing.net/th?id=OIP.OOHe3tTC26-gekSR5wKl6AHaIp&pid=Api&P=0&h=180'
      profSrc={user.photoURL}
      tittle={user.displayName}
    
      />
      <Reel
      img='https://tse3.mm.bing.net/th?id=OIP.BMLbD7Qx3sddOgLLRFDbgAHaEo&pid=Api&P=0&h=180'
      profSrc='https://tse3.mm.bing.net/th?id=OIP.6AT5hRjwmXryGvqah0SpjAHaLA&pid=Api&P=0&h=180'
      tittle='John Viteceria'
      />
      <Reel
      img='https://tse1.mm.bing.net/th?id=OIP.fbenVEXp44KmRgiJsP1magHaEo&pid=Api&P=0&h=180'
      profSrc='https://tse4.mm.bing.net/th?id=OIP.0vuOB8Q0KnNOL4ktFfbcKAHaE8&pid=Api&P=0&h=180'
      tittle='Narendr Modi'
      />
      <Reel
      img='https://tse1.mm.bing.net/th?id=OIP.kG8V9jevNtEXB7LqIDSUKQHaJQ&pid=Api&P=0&h=180'
      profSrc='https://tse1.mm.bing.net/th?id=OIP.0A1AbbHuO51KdTiZzdGNggAAAA&pid=Api&P=0&h=180'
      tittle='Virat Kohli'
      />
      <Reel
      img='https://tse4.mm.bing.net/th?id=OIP.IKZH8_fypkcmxclP9HjlvgHaJP&pid=Api&P=0&h=180'
      profSrc='https://tse4.mm.bing.net/th?id=OIP.5C_g8y0WzCK7AzRxGb26TwHaFj&pid=Api&P=0&h=180'
      tittle='Nitin Jani'
      />
      <Reel
      img='https://tse3.mm.bing.net/th?id=OIP.70sJHoK-5yNm0XEhzIzHfgHaEK&pid=Api&P=0&h=180'
      profSrc='https://tse1.mm.bing.net/th?id=OIP.nt4lzRV5hSSnL-8A5h36ngAAAA&pid=Api&P=0&h=180'
      tittle='Aaj Tak'
      />
      <Reel
      img='https://tse3.mm.bing.net/th?id=OIP.MfkKE5Hxi6UM6ZDPCLkwTgHaEn&pid=Api&P=0&h=180'
      profSrc='https://tse2.mm.bing.net/th?id=OIP.twM75zC-aJeICRrEyQxHSAHaE8&pid=Api&P=0&h=180'
      tittle='Code Guru'
      />
      <Reel
      img='https://tse2.mm.bing.net/th?id=OIP.moG67b5oJ-aOM8DO5ikavQHaEK&pid=Api&P=0&h=180'
      profSrc='https://tse1.mm.bing.net/th?id=OIP.tzKbhv6zuolwJUqQjsVdxAHaFH&pid=Api&P=0&h=180'
      tittle='Dhoni'
      />




    </div>
  )
}
export default StoryReel