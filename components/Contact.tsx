"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xwpebknk");
    if (state.succeeded) {
        return <p className="flex justify-center p-10 text-2xl bg-white  rounded-b-md">Thank you!</p>;
    }
    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="form-error"
                />
                <label htmlFor="email" className="form-label">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="form-error"
                />
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="form-error"
                />
                <button type="submit" disabled={state.submitting} className="form-button">
                    Submit
                </button>
            </form>
        </div>
    );
}

function Contact() {
    return (
        <ContactForm />
    );
}

export default Contact;
