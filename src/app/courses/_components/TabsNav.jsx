import Container from '@/components/Container';
import React from 'react'
import data from '@/constants/data.json'
const TabsNav = ({ active }) => {
  const { sectionIds } = data.coursespage;
  return (
    <Container>
      <div className="w-full h-14 flex items-center justify-between border py-2 rounded-lg">
        {sectionIds.map((id, idx) => (
          <a key={idx} href={`#${id.id}`} className={`h-14 w-full flex justify-center items-center border ${id.id === active ? "bg-black text-white" : ""}`}>
            {id.name}
          </a>
        ))}
      </div>
    </Container>
  );
}

export default TabsNav