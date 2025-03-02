export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} bg-primary px-4 py-2 rounded-full text-white flex items-center gap-2 cursor-pointer hover:opacity-90 duration-300`}
    >
      {children}
    </button>
  );
}
