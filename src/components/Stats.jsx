import Container from '@/components/Container'
import { cn } from '@/lib/utils';
import React from 'react'

const Stats = ({stats, className}) => {
  return (
    <div  className={cn('py-24', className)}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h1 className="lg:text-5xl text-3xl font-bold">{stat.number}</h1>
              <p className="">{stat.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Stats