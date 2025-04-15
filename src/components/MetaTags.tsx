
import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const MetaTags = ({
  title = "Sooch Law - Real Estate, Civil Litigation, Personal Injury",
  description = "Professional legal services in the Greater Toronto Area. Expert representation in real estate, civil litigation, and personal injury cases.",
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : '',
}: MetaTagsProps) => {
  const fullTitle = title.includes("Sooch Law") ? title : `${title} | Sooch Law`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/lovable-uploads/06d3ec0c-2aa2-4f53-a861-95daba926881.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default MetaTags;
