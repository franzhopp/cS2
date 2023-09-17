import Modal from "react-modal";

// Configuration du modal
Modal.setAppElement("#root"); // Assurez-vous de définir l'élément racine de votre application

const CookieModal = ({ isOpen, onRequestClose, onAccept }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cookie Modal"
      className="fixed bottom-0 left-0 right-0 bg-white p-4 outline-none border-none shadow-none"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-75"
    >
      <div className="text-left">
        <h2 className="text-xl font-sans-serif font-extrabold mb-2">Politique de cookies</h2>
        <p className="text-gray-600 mb-4 font-sans-serif">
          Ce site utilise des cookies pour améliorer votre expérience.
        </p>
        <button
          onClick={onAccept}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Accepter
        </button>
      </div>
    </Modal>
  );
};

export default CookieModal;
