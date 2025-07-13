export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded shadow p-4 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

