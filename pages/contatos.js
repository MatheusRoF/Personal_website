import { Mail, Linkedin, Phone, Send, MessageSquare } from "lucide-react";
import Link from "next/link";
import styles from '../Styles/contatos.module.css';

export default function Contatos() {
  return (
    <div className={styles.container}>
      {/* Botão Voltar no mesmo estilo */}
      <Link href="/" passHref>
        <button
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            zIndex: 1000,
            textDecoration: 'none'
          }}
        >
          ← Voltar
        </button>
      </Link>

      <header className={styles.header}>
        <h1>Meus Contatos</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.contactCard}>
          <div className={styles.contactIntro}>
            <h2>
              <MessageSquare className={styles.contactLinkIcon} />
              Vamos conversar!
            </h2>
            <p>
              Se você está interessado em trabalhar comigo, tem um projeto em mente, ou apenas quer dizer olá, por favor, não hesite em entrar em contato.
            </p>
            
            <div className={styles.contactInfo}>
              <p>
                <Mail className={styles.contactLinkIcon} />
                mmatheus99@hotmail.com
              </p>
              <p>
                <Phone className={styles.contactLinkIcon} />
                +55 61 9 8212-9045
              </p>
            </div>
          </div>

          <div className={styles.contactLinks}>
            <h3>Encontre-me aqui 👇</h3>
            
            <Link
              href="mailto:mmatheus99@hotmail.com"
              className={styles.contactLink}
            >
              <Mail className={`${styles.contactLinkIcon} ${styles.email}`} />
              <span>Outlook</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/matheus-rodrigues-ferreira-06754617a/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Linkedin className={`${styles.contactLinkIcon} ${styles.linkedin}`} />
              <span>LinkedIn</span>
            </Link>

            <Link
              href="https://wa.me/+5561982129045"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Phone className={`${styles.contactLinkIcon} ${styles.whatsapp}`} />
              <span>WhatsApp</span>
            </Link>

            <Link
              href="https://t.me/Matheus_rodi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Send className={`${styles.contactLinkIcon} ${styles.telegram}`} />
              <span>Telegram</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}