import { contacts } from "../../data/trainerData"

export default function ContactBlock() {
  return (
    <section className="contact-block">
      <h2 className="contact-title">Контакты</h2>

      <div className="contact-grid">
        <div className="contact-item">
          <span className="contact-label">Телефон</span>
          <span className="contact-value">{contacts.phone}</span>
        </div>

        <div className="contact-item">
          <span className="contact-label">Telegram</span>
          <a
            href={`https://t.me/${contacts.telegram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {contacts.telegram}
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Instagram</span>
          <a
            href={`https://${contacts.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {contacts.instagram}
          </a>
        </div>
      </div>
    </section>
  )
}
