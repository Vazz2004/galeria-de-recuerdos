import React, { useState } from 'react';

const images = [
  { id: 1, src: '/images/3.jpg', alt: 'Recuerdo 1', frase: 'Siempre junto a ti  ❤️' },
  { id: 2, src: '/images/4.jpg', alt: 'Recuerdo 2', frase: 'Por muchas mas aventuras 🌹' },
  { id: 3, src: '/images/7.jpg', alt: 'Recuerdo 3', frase: 'Esa sonrisa que me robó el corazón 😊' },
  { id: 4, src: '/images/2.jpg', alt: 'Recuerdo 4', frase: 'Nuestro viaje juntos ✈️' },
  { id: 5, src: '/images/6.jpg', alt: 'Recuerdo 5', frase: 'El amor de mi vida ' },
  { id: 6, src: '/images/8.jpg', alt: 'Recuerdo 6', frase: 'Nuestros momentos de risas 😂' },
  { id: 7, src: '/images/1.jpg', alt: 'Recuerdo 7', frase: 'Esa mirada que lo dice todo 😍' },
  { id: 8, src: '/images/9.jpg', alt: 'Recuerdo 8', frase: 'Nuestras noches bajo las estrellas 🌌' },
  { id: 9, src: '/images/10.jpg', alt: 'Recuerdo 9', frase: 'Hasta ahora todo estaba comenzando  💖' },
  { id: 10, src: '/images/11.jpg', alt: 'Recuerdo 10', frase: 'Nuestro amor en cada detalle 🥰' },
  { id: 11, src: '/images/12.jpg', alt: 'Recuerdo 11', frase: 'Esa complicidad que nos une 🤗' },
  { id: 12, src: '/images/13.jpg', alt: 'Recuerdo 12', frase: 'Nuestros sueños juntos 🌠' },
  { id: 13, src: '/images/14.jpg', alt: 'Recuerdo 13', frase: 'El día que todo cambió 💫' },
  { id: 14, src: '/images/15.jpg', alt: 'Recuerdo 14', frase: 'Para siempre juntos 💑' }
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showHearts, setShowHearts] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleUnlockClick = () => {
    setShowModal(true);
  };

  const handleAccept = () => {
    setIsAccepted(true);
    setShowModal(false);
    setShowHearts(true);
    setShowThankYou(true);
    setTimeout(() => {
      setShowHearts(false);
    }, 5000);
  };

  const handleDeclineAttempt = () => {
    const modalWidth = 320;
    const modalHeight = 200;
    const buttonWidth = 80;
    const buttonHeight = 40;

    const newX = Math.random() * (modalWidth - buttonWidth);
    const newY = Math.random() * (modalHeight - buttonHeight);

    setNoButtonPosition({ x: newX, y: newY });
  };

  const closeThankYouMessage = () => {
    setShowThankYou(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 relative overflow-hidden">

      {showHearts && (
        <div className="fixed inset-0 w-full h-full z-50 pointer-events-none">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="absolute text-red-500 text-4xl animate-heart"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * -100}vh`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-20">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Nuestra Galería de Recuerdos ❤️
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-lg" style={{ width: '100%', height: '256px' }}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold text-center p-4">{image.frase}</p>
            </div>
          </div>
          ))}
        </div>

        {/* Botón para desbloquear */}
        <div className="mt-12 text-center">
          <button
            onClick={handleUnlockClick}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
          >
            Desbloquear más recuerdos
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-30">
            <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center relative">
              <h2 className="text-xl font-bold mb-4">Para desbloquear más recuerdos...</h2>
              <p className="mb-6">Tienes que seguir siendo mi amor. ¿Aceptas?</p>
              <div className="flex justify-around">
                <button
                  onClick={handleAccept}
                  className={`py-2 px-4 rounded-lg font-bold text-white ${isAccepted ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-700'
                    } transition-all duration-300`}
                >
                  Sí
                </button>
                <button
                  onMouseEnter={handleDeclineAttempt}
                  onClick={handleDeclineAttempt}
                  style={{
                    position: 'absolute',
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                  }}
                  className="py-2 px-4 rounded-lg font-bold text-white bg-red-500 hover:bg-red-700 transition-all duration-300"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mensaje de agradecimiento */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center relative">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">¡Gracias por aceptar! 💖</h2>
              <p className="text-xl text-gray-800">
                Eres la persona más especial en mi vida. Prometo hacerte feliz siempre. Te amo. 🥰
              </p>
              <button
                onClick={closeThankYouMessage}
                className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 bg-black text-white py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Nuestra Canción 🎶</h2>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-g-3ptRfFP4?si=eR1SO0mwxziiRg5a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        {/* Créditos estilo cine */}
        <div className="mt-16 bg-black text-white py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Gracias por ser mi novia ❤️</h2>
          <div className="text-center text-lg space-y-4 animate-scroll">
            <p>Por cada sonrisa que me regalas 😊</p>
            <p>Por cada momento que compartimos 🌟</p>
            <p>Por cada abrazo que ilumina mi día 🤗</p>
            <p>Por ser mi mayor apoyo y mi felicidad 💕</p>
            <p>Te amo más de lo que las palabras pueden expresar 💖</p>
            <p>Gracias por ser parte de mi vida 🥰</p>
          </div>
        </div>
      </div>

      {/* Animación de corazones */}
      <style>
        {`
          @keyframes heart {
            0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
          .animate-heart {
            animation: heart linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;