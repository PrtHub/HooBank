import React from 'react'
import { clients } from '../constants'
import styles from '../style'


const Clients = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[1220px] feature-card cursor-pointer`}>
            <img src={client.logo} alt="Logos" className='w-[100px] sm:w-[192px] object-contain' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
