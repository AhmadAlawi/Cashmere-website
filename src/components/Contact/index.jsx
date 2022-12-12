import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../HomeTwo/HomeTwoFooter';
import Header from '../common/Header';
import ContactArea from './ContactArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="CONTACT US" subtitle="Contact Us" />
      <ContactArea/>
      <FooterTwo/>
    </>
  );
}; 

export default index;