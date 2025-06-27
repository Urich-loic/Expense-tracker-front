export default function Balance() {
  return (
    <>
      <div className="rounded-2xl flex flex-col justify-between w-full border-gray-400 border overflow-hidden">
        <div className="p-4">
          <div className="border-b-1 border-gray-400 py-3">
            <small>Balance</small>
            <p className="font-medium text-xl">150,000 FCFA</p>
            <small>Votre budget pour ce mois de Juin 2025</small>
          </div>
          <div className="p-3">My chart goes here</div>
        </div>
        <div className="bg-gray-200 p-3 border-t-1 border-gray-300">
          <button
            type="button"
            className="bg-blue-600 px-5 rounded text-white py-2 text-xs"
          >
            Edite my budget
          </button>
        </div>
      </div>
    </>
  );
}
