import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Leave a Request</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Handle the form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>React Modal Form Example</h1>
      <a href="#" onClick={openModal}>
        Leave a Request
      </a>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;