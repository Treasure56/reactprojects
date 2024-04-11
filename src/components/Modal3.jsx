"use client"

import React, { useState } from 'react';
import Modal from './Modal';

const Mod = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Your Modal Content Goes Here</h2>
        <p>Additional content...</p>
      </Modal>
    </div>
  );
};

export default Mod;
