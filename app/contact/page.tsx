export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <p>E-mail: contato@adult-aigen.com</p>
      <p>Telefone: (11) 99999-9999</p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Seu e-mail"
          className="bg-gray-800 p-2 w-full mb-2"
        />
        <textarea
          placeholder="Mensagem"
          className="bg-gray-800 p-2 w-full mb-2"
        />
        <button type="submit" className="bg-purple-600 p-2">
          Enviar
        </button>
      </form>
    </div>
  );
}
