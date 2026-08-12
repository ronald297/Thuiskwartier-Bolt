import { useEffect } from 'react';

interface Props {
  title: string;
  description: string;
}

export default function PageMeta({ title, description }: Props) {
  useEffect(() => {
    document.title = `${title} | Thuiskwartier`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    window.scrollTo(0, 0);
  }, [title, description]);
  return null;
}
