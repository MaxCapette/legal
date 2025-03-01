"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../ui/button';

const FormContact: React.FC = () => {
  const [state, handleSubmit] = useForm("xgvoglyj");

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="email" className="text-accent-foreground "> Adresse Email</label>
      <input id="email" type="email" name="email" className='inputColor' />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="text-accent-foreground ">Message</label>
      <textarea id="message" name="message" className='inputColor'/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button className='bg-[var(--orange)] hover:bg-orange-600 text-primary-foreground ' type="submit" disabled={state.submitting}>
        Envoyer
      </Button>

      {state.succeeded && <p className="text-[#388e3c]">Merci!</p>}
    </form>
  );
};

export default FormContact;