"use client";

import React from "react";

const Whatsapp = () => {
    return (
        <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-25 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300"
        >
            💬
        </a>
    );
};

export default Whatsapp;
