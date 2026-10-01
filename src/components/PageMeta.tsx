import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://www.thuiskwartier.nl';

interface Props {
  title: string;
  description: string;
}

export default function PageMeta({ title, description }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${title} | Thuiskwartier`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const canonicalUrl = pathname === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${pathname.replace(/\/+$/, '')}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    window.scrollTo(0, 0);
  }, [title, description, pathname]);

  return null;
}
