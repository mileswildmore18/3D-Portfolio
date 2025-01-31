import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    // Add form
    const formRef = useRef();

    // Add loading status to the form
    const [loading, setLoading] = useState(false)
    // Add information in the form
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    // Add reusable function for the contact form
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }
    // Add form submission
    const handleSubmit = async (e) => {
        // prevent page reload
        e.preventDefault();
        // set loading
        setLoading(true);

        try {
            // send email through emailjs
            await emailjs.send('service_1e4bdry', 'template_s617b5f', {
                    from_name: form.name,
                    to_name: 'Miles Wildmore',
                    from_email: form.email,
                    to_email: 'mileswildmore18@gmail.com',
                    message: form.message
                },
                '9ulb7UmTP61WpoT8o'
            )
            // reset form
            setLoading(false);
            //  alert the user
            alert('Your message has been sent')
            // reset and clear form
            setForm({
                name: '',
                email: '',
                message: ''
            })
            // reset form and check if error occured
        } catch (error) {
            setLoading(false);

            console.log(error);
            alert('Something went wrong!')
        }
    }
    return (
        // contact section
        <section className="c-space my-20" id="contact">
            {/* Add terminal background */}
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Let us talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        If you are looking for help to build a website or help improve your existing platform, I am here
                        to help. I am always open to learning new things and working on new projects.
                    </p>
                    {/* Add form*/}
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        {/* Add name label*/}
                        <label className='space-y-3'>
                            <span className="field-label">
                            Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"/>
                        </label>
                        {/* Add email label*/}
                        <label className='space-y-3'>
                            <span className="field-label">
                            Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"/>
                        </label>
                        {/* Add message label*/}
                        <label className='space-y-3'>
                            <span className="field-label">
                            Your message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I want to give you a job..."/>
                        </label>
                        {/* Add submit button*/}
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
            <h3 className="head-text">Contact Me</h3>
        </section>
    )
}
export default Contact
