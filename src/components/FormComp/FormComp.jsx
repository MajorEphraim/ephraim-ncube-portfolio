import './FormComp.css';
import BlueButton from '../BlueButton/BlueButton';
import { useState } from 'react';

export default function FormComp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = () => {
        setError('');
        setSuccess('');

        if (!nameRegex.test(name.trim())) {
            setError('Please enter a valid name.');
            return;
        }

        if (!emailRegex.test(email.trim())) {
            setError('Please enter a valid email address.');
            return;
        }

        if (message.trim().length < 10) {
            setError('Message must be at least 10 characters long.');
            return;
        }

        if (message.trim().length > 1000) {
            setError('Message cannot exceed 1000 characters.');
            return;
        }

        const messageSubject = subject.trim()
            ? encodeURIComponent(subject.trim())
            : encodeURIComponent(`Portfolio Contact - ${name.trim()}`);

        const body = encodeURIComponent(
`Name: ${name.trim()}

Email: ${email.trim()}

Message:
${message.trim()}`
        );

        setSuccess('Opening your email client...');

        window.location.href = `mailto:ephraim.apply@gmail.com?subject=${messageSubject}&body=${body}`;
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className='dual-inputs'>
                <input
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <input
                placeholder='Subject (Optional)'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            {error && (
                <p className='form-error'>
                    {error}
                </p>
            )}

            {success && (
                <p className='form-success'>
                    {success}
                </p>
            )}

            <BlueButton
                handleClick={handleSubmit}
                name="Send Message"
            />
        </form>
    );
}