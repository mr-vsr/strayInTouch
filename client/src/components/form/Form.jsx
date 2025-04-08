import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Form({
    data,
    strayInfo,
    pushData,
}) {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.form
            className='hero-section-form'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className='form-group'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <input
                    type='text'
                    name="informant"
                    onChange={data}
                    className='form-input'
                    placeholder='Your Name'
                    value={strayInfo.informant}
                    required
                />
            </motion.div>

            <motion.div
                className='form-group'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <input
                    type='tel'
                    name="contact"
                    onChange={data}
                    className='form-input'
                    placeholder='Phone Number'
                    value={strayInfo.contact}
                    required
                />
            </motion.div>

            <motion.div
                className='form-group'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <input
                    type='text'
                    name="location"
                    className='form-input'
                    placeholder='Location'
                    onChange={data}
                    value={strayInfo.location}
                    required
                />
            </motion.div>

            <motion.div
                className='form-group'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <textarea
                    name="description"
                    onChange={data}
                    className='form-input textarea'
                    placeholder='Brief Description'
                    value={strayInfo.description}
                    required
                />
            </motion.div>

            <motion.div
                className='form-group image-upload'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <label className='image-upload-label'>
                    {imagePreview ? (
                        <div className='image-preview'>
                            <img src={imagePreview} alt="Preview" />
                            <span>Change Image</span>
                        </div>
                    ) : (
                        <div className='image-placeholder'>
                            <span>Upload Animal Photo</span>
                        </div>
                    )}
                    <input
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange}
                        className='image-input'
                    />
                </label>
            </motion.div>

            <motion.button
                type='submit'
                className='form-button'
                onClick={pushData}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Connect
            </motion.button>
        </motion.form>
    )
}

export default Form