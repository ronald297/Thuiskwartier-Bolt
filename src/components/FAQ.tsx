import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = 'Veelgestelde vragen' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      {title && (
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-8">
          {title}
        </h2>
      )}
      <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-softgray-200 overflow-hidden"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 lg:px-6 lg:py-5 text-left hover:bg-softgray-50 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-purple-800 pr-4" itemProp="name">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-softgray-400 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === i && (
              <div
                className="px-5 pb-5 lg:px-6 lg:pb-6"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-softgray-600 leading-relaxed" itemProp="text">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
