export default function Stage () {
	  return (
<div className="max-w-md mx-auto bg-white mt-32 bg-gradient-to-r from-pink-300 to-yellow-200 via-green-200  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Feed a Cat</div>
                <p className="mt-2 text-gray-500">
                    Únete a nuestra comunidad y recibe recompensas por alimentar gatos en la calle. ¡Haz la diferencia y gana tokens que puedes convertir en dinero!
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