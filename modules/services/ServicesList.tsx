import { services } from "../../data/trainerData"

export default function ServicesList() {
  return (
    <section className="services">
      <h2 className="services-title">Услуги</h2>

      <ul className="services-list">
        {services.map(s => (
          <li key={s.id} className="service-item">
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
