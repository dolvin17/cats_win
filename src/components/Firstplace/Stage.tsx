export default function Stage () {
	  return (
<div className="max-w-md mx-auto bg-white hover:scale-125 transition-transform border-black border-[1px] w-[500px] shadow-2xl mt-44 bg-gradient-to-r from-pink-300 to-yellow-200 via-green-200  rounded-xl overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Como funciona</div>
                <p className="mt-2 text-gray-500">
                    Nuestra comunidad recibe recompensas por alimentar gatitos en la calle. Amar es compartir, y sabemos que amas.
                </p>
                <div className="mt-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Cómo Funciona:</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>Alimenta a un gato callejero.</li>
                        <li>Toma una foto del momento con la comida.</li>
                        <li>Sube la foto a nuestra plataforma y gana tokens.</li>
                        <li>Cambia tus tokens por dinero real.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}