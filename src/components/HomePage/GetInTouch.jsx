import styled from 'styled-components'
import { useState } from 'react'

function GetInTouch() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        notes: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT;
        if (!endpoint) {
            setStatus({ type: 'error', message: 'Missing contact endpoint. Set REACT_APP_CONTACT_ENDPOINT (Formspree URL).' });
            return;
        }
        setStatus({ type: 'pending', message: 'Sending...' });
        try {
            const payload = {
                name: formData.fullName,
                email: formData.email,
                message: formData.notes,
                _subject: '[Product Space] Contact Us Form Response',
                source: 'home'
            };
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data?.error || 'Request failed');
            setStatus({ type: 'success', message: 'Thanks! We received your message.' });
            setFormData({ fullName: '', email: '', notes: '' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        }
    };

    return (
        <Container>
            <Title>CONTACT US</Title>
            <Description>
                Get in touch to discover how Product Space brings companies and students together to work on real-world product challenges. We’d love to discuss partnerships, projects, and upcoming opportunities to collaborate.
            </Description>
            <Form method="POST" onSubmit={handleSubmit}>
                <InputGroup>
                    <Label>FULL NAME</Label>
                    <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Label>EMAIL ADDRESS</Label>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Label>MESSAGE</Label>
                    <TextArea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={5}
                    />
                </InputGroup>
                <SubmitButton type="submit">Submit</SubmitButton>
                {status && <Status data-type={status.type}>{status.message}</Status>}
            </Form>
        </Container>
    )
}

export default GetInTouch;

const Container = styled.div`
    width: 100%;
    padding: 60px 40px;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 50px 30px;
    }

    @media only screen and (max-width: 600px) {
        padding: 40px 20px;
    }
`

const Title = styled.h2`
    font-size: 60px;
    font-weight: 500;
    color: white;
    text-align: center;
    margin: 0 0 20px 0;

    @media only screen and (max-width: 968px) {
        font-size: 48px;
    }

    @media only screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 32px;
    }
`

const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #B8B8B8;
    text-align: center;
    max-width: 650px;
    margin: 0 0 50px 0;
    line-height: 1.7;

    @media only screen and (max-width: 768px) {
        max-width: 550px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin-bottom: 50px;
        max-width: 100%;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    max-width: 550px;

    @media only screen and (max-width: 600px) {
        max-width: 100%;
    }
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Label = styled.label`
    font-size: 11px;
    font-weight: 500;
    color: #B8B8B8;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`

const Input = styled.input`
    padding: 16px 20px;
    background: transparent;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    color: white;
    font-size: 15px;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
        border-color: rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.02);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }

    @media only screen and (max-width: 600px) {
        padding: 14px 18px;
        font-size: 14px;
    }
`

const TextArea = styled.textarea`
    padding: 16px 20px;
    background: transparent;
    border: 1.5px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    color: white;
    font-size: 15px;
    outline: none;
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
        border-color: rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.02);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }

    @media only screen and (max-width: 600px) {
        padding: 14px 18px;
        font-size: 14px;
        min-height: 100px;
    }
`

const SubmitButton = styled.button`
    padding: 15px 45px;
    background: white;
    color: #2D1B4E;
    border: none;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: center;
    margin-top: 15px;

    &:hover {
        background: #f0f0f0;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        max-width: 300px;
        padding: 14px 40px;
    }
`

const Status = styled.p`
    margin: 5px 0 0 0;
    font-size: 14px;
    color: ${props => (props['data-type'] === 'success' ? '#B6F2C2' : props['data-type'] === 'pending' ? '#C7D4FF' : '#FFB8B8')};
`
