import { CrossIcon } from '@/components/assets';
import Image from 'next/image';
import React, { useState } from 'react';

interface BellowProps {
  title: string;
  content: string;
}

export function Bellow({ title, content }: BellowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 border-b-2 border-b-[#C3FFD0] grid gap-4">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>{title}</div>
        <button
          type="button"
          className={`${isOpen ? 'rotate-45' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={CrossIcon} alt="" />
        </button>
      </div>

      {/* Content */}
      <div className={`${isOpen ? 'block' : 'hidden'}`}>{content}</div>
    </div>
  );
}

interface AccordionProps {
  content: {
    id: number;
    title: string;
    content: string;
  }[];
}

export default function Accordion({ content }: AccordionProps) {
  return (
    <div>
      {content?.map((d) => (
        <Bellow key={d.id} title={d.title} content={d.content} />
      ))}
    </div>
  );
}
