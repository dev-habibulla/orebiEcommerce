import React from 'react'
import BreadCrumb from './../components/layout/BreadCrumb';
import Container from '../components/layout/Container';
import InputBox from '../components/layout/InputBox';
import Button from '../components/layout/Button';

const Contacts = () => {
  return (
    <Container>
      <BreadCrumb />
      <div className="w-2/4">
        <h2 className="mb-10 font-dm font-bold text-4xl">Fill up a Form</h2>
        <InputBox as="input" placeholder="Your name here" title="Name" />
        <InputBox as="input" placeholder="Your email here" title="Email" />
        <InputBox as="textarea" placeholder="Your message here" title="Message" />
      </div>
      <Button title="Post" />
    </Container>
  )
}

export default Contacts
