import Container from '@/components/Container'
import { stats } from '@/constants/data/homepage'
import React from 'react'

const Stats = () => {
  return (
      <div className="py-24 text-white bg-black">
          <Container>
              <div className="grid grid-cols-4 gap-10">
                  {stats.map((stat, idx) => (
                      <div key={idx}>
                          <h1 className="lg:text-5xl text-3xl font-bold">{stat.number}</h1>
                          <p className="">{ stat.title }</p>
                      </div>
                  ))}
              </div>
          </Container>
    </div>
  )
}

export default Stats