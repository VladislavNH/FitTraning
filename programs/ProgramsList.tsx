import { programs } from "../../data/trainerData"

export default function ProgramsList() {
  return (
    <section className="programs">
      <h2 className="programs-title">Программы</h2>

      <ul className="programs-list">
        {programs.map(p => (
          <li key={p.id} className="program-item">
            <h3 className="program-title">{p.title}</h3>
            <p className="program-desc">{p.desc}</p>
            <span className="program-duration">{p.duration}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
