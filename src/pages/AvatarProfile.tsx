import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AvatarProfileLayout from '@/components/AvatarProfileLayout';
import { getAvatarBySlug } from '@/lib/slug';

const AvatarProfile: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!slug) {
    navigate('/');
    return null;
  }

  const avatar = getAvatarBySlug(slug);

  if (!avatar) {
    navigate('/404');
    return null;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": avatar.name,
    "jobTitle": avatar.subtitle,
    "alternateName": avatar.subtitle,
    "description": avatar.bio.join(' '),
    "url": `https://orchestra.ai/avatares/${avatar.slug}`,
    "image": avatar.heroImages[0],
    "height": avatar.facts.find(f => f.label === "Altura")?.value || "[placeholder]",
    "hairColor": avatar.facts.find(f => f.label === "Cabelo")?.value || "[placeholder]",
    "eyeColor": avatar.facts.find(f => f.label === "Olhos")?.value || "[placeholder]",
    "addressLocality": avatar.facts.find(f => f.label === "Origem")?.value || "[placeholder]",
    "worksFor": {
      "@type": "Organization",
      "name": "Orchestra",
      "url": "https://orchestra.ai"
    },
    "knowsAbout": ["Digital Modeling", "Brand Ambassador", "Virtual Influencer"]
  };

  return (
    <>
      <Helmet>
        <title>{avatar.name} — Avatar</title>
        <meta
          name="description"
          content={`Conheça ${avatar.name}, ${avatar.subtitle}. ${avatar.bio[0]}`}
        />
        <meta name="keywords" content={`${avatar.name}, avatar digital, modelo virtual, IA generativa, Orchestra`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${avatar.name} | Avatar Digital Orchestra`} />
        <meta property="og:description" content={`Conheça ${avatar.name}, ${avatar.subtitle}.`} />
        <meta property="og:image" content={avatar.heroImages[0]} />
        <meta property="og:url" content={`https://orchestra.ai/avatares/${avatar.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${avatar.name} | Avatar Digital Orchestra`} />
        <meta name="twitter:description" content={`Conheça ${avatar.name}, ${avatar.subtitle}.`} />
        <meta name="twitter:image" content={avatar.heroImages[0]} />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <AvatarProfileLayout avatar={avatar} />
        <Footer />
      </div>
    </>
  );
};

export default AvatarProfile;
