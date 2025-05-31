import React from 'react';

const FloatingWhatsAppButton = () => {
  const phoneNumber = '14155238886'; // Tanpa tanda + dan karakter non-angka
  const message = encodeURIComponent('join needle-animal'); // Pastikan URL encoded

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50"
      aria-label="Chat via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20.52 3.478A11.816 11.816 0 0012 0C5.373 0 0 5.373 0 12c0 2.12.554 4.182 1.6 6.02L0 24l6.154-1.593A11.91 11.91 0 0012 24c6.627 0 12-5.373 12-12 0-3.207-1.25-6.22-3.48-8.522zM12 21.7a9.708 9.708 0 01-5.144-1.508l-.369-.225-3.65.946.978-3.564-.24-.372A9.685 9.685 0 012.3 12c0-5.18 4.22-9.4 9.4-9.4 2.51 0 4.87.978 6.64 2.75A9.357 9.357 0 0121.7 12c0 5.18-4.22 9.4-9.4 9.4zm5.27-7.504c-.296-.15-1.75-.866-2.022-.964-.272-.1-.47-.148-.668.15-.196.296-.756.963-.927 1.162-.17.198-.347.222-.643.074-.296-.15-1.25-.46-2.38-1.466-.88-.783-1.47-1.75-1.64-2.045-.17-.296-.018-.455.13-.604.134-.133.296-.347.444-.52.15-.17.198-.296.296-.495.1-.198.05-.37-.025-.52-.074-.148-.668-1.614-.916-2.21-.242-.58-.488-.502-.668-.512l-.57-.01c-.198 0-.52.074-.793.37s-1.04 1.02-1.04 2.483 1.065 2.875 1.213 3.074c.15.198 2.096 3.2 5.08 4.49.71.31 1.263.494 1.695.63.712.228 1.36.196 1.872.119.57-.085 1.75-.715 2-.14.247-.705.247-1.31.174-1.45-.074-.14-.27-.23-.567-.38z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
