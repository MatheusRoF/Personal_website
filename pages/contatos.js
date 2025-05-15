import { Mail, Linkedin, Phone, Send, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Contatos() {
  return (
    <div className="flex justify-center min-h-screen px-4 py-10 bg-black text-white">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-10">
        {/* Seção esquerda: Mensagem */}
        <div className="flex flex-col items-start space-y-4">
          <div className="text-3xl font-bold flex items-center gap-2">
            <MessageSquare className="text-pink-500" size={30} />
            Vamos conversar!
          </div>
          <p className="text-gray-400">
            Se você está interessado em trabalhar comigo, tem um projeto em mente, ou apenas quer dizer olá, por favor, não hesite em entrar em contato.
          </p>
          <div>
            <p className="text-sm text-gray-300">✉️ matheus989@outlook.com</p>
            <p className="text-sm text-gray-300">📞 +55 61 9 9212-8045</p>
          </div>
        </div>

        {/* Seção direita: Botões de contato */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Encontre-me aqui 👇</h2>
          <div className="space-y-3">
            <Link
              href="mailto:matheus989@outlook.com"
              className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-lg transition"
            >
              <Mail className="text-blue-400" size={20} />
              Outlook
            </Link>

            <Link
              href="https://www.linkedin.com/in/seu-perfil"
              target="_blank"
              className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-lg transition"
            >
              <Linkedin className="text-blue-500" size={20} />
              LinkedIn
            </Link>

            <Link
              href="https://wa.me/5561992128045"
              target="_blank"
              className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-lg transition"
            >
              <Phone className="text-green-500" size={20} />
              WhatsApp
            </Link>

            <Link
              href="https://t.me/seu_usuario"
              target="_blank"
              className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-lg transition"
            >
              <Send className="text-cyan-400" size={20} />
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
