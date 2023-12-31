import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import { RiWhatsappLine } from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qb1naro', 'template_difbjew', form.current, 'wfXksa95nYtuUcbwl')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Entre em contato</h5>
      <h2>Contate-me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dev.kaikerocha@gmail.com</h5>
            <a href="mailto:dev.kaikerocha@gmail.com" target="_blank" rel="noreferrer">
              Enviar mensagem
            </a>
          </article>
          <article className="contact__option">
            <FaInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>kaikerochadev</h5>
            <a href="https://www.instagram.com/kaikerochadev/" target="_blank" rel="noreferrer">
              Enviar mensagem
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 21 97159-0535</h5>
            <a href="https://api.whatsapp.com/send?phone=5521971590535" target="_blank" rel="noreferrer">
              Enviar mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            required
          />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;