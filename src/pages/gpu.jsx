import dynamic from 'next/dynamic';
import SEO from '../components/seo';
import ServicesMain from '../components/Gpu server';

const Services = () => {
  return (
    <>
      <SEO pageTitle="GPU Rendering" />
      <ServicesMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(Services), {ssr: false});