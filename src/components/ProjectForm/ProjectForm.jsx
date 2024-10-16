import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";

const ProjectForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data = {}) => {
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
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
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
                                    message: "invalid email address",
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
                        <button type="submit" className="btn btn-primary btn-hover-secondary">Get a free consultation</button>
                    </div>
                </div>
            </form>
            <p className="form-messege"></p>
        </Fragment>
    )
}

export default ProjectForm;
