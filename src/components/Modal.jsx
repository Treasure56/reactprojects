export default function Modal({ open, onClose, children }) {
  const darkBgClick = (e) => {
    if (typeof onClose === "function" && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={darkBgClick}
      className={`fixed inset-0 flex justify-center items-center  transition-opacity duration-700 ease-out delay-300 ${
        open ? "opacity-100 transition-opacity duration-700 ease-in bg-black/60" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-md">
        <span className="block mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea
          laborum in a accusantium quia, eos obcaecati. Hic magnam praesentium,
          iusto magni ad veritatis explicabo ducimus maiores maxime ipsam saepe?
        </span>
        {children}
      </div>
    </div>
  );
}
