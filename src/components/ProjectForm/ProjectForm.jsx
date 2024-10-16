import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";

const ProjectForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur"
    });


    const onSubmit = (data = {}) => {
        setLoading(true);
        setSuccess(null);
        setError(null);

        fetch('https://frolicking-profiterole-4dc7fd.netlify.app/.netlify/functions/sender', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from_name: data.name ?? '',
                from_email: data.email ?? '',
                message: data.message ?? ''
            }),
        })
            .then(response => response.json())
            .then(() => {
                setLoading(false);
                setSuccess("Your message has been sent! We'll get back to you shortly.");
                reset();

                setTimeout(() => {
                    setSuccess(null);
                }, 7000);
            })
            .catch(() => {
                setLoading(false);
                setError("Failed to send the message. Please try again.");
            });
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-n4">
                    <div className="col-md-12 col-12 mb-4">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            name="name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors?.name && <p>{errors.name?.message}</p>}
                    </div>
                    <div className="col-md-12 col-12 mb-4">
                        <input
                            type="email"
                            placeholder="Email *"
                            name="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors?.email && <p>{errors.email?.message}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea
                            name="message"
                            placeholder="Message"
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors?.message && <p>{errors.message?.message}</p>}
                    </div>
                    <div className="col-12 text-center mb-4">
                        <button
                            type="submit"
                            className="btn btn-primary btn-hover-secondary"
                            disabled={loading}
                        >
                            {loading ? (
                                <span>Sending your message...</span>
                            ) : (
                                <span>Get a free consultation</span>
                            )}
                        </button>
                    </div>
                </div>
            </form>

            {success && (
                <p className="form-message" style={{ color: '#4caf50', marginTop: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                    {success}
                </p>
            )}
            {error && (
                <p className="form-message" style={{ color: '#f44336', marginTop: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                    {error}
                </p>
            )}
        </Fragment>
    );
}

export default ProjectForm;
