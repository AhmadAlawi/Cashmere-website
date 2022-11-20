import dynamic from 'next/dynamic';
import HomeMain from '../components/HomeTwo/index';
import SEO from '../components/seo';

const index = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <HomeMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});