import TrainerCard from "../../modules/trainer/TrainerCard"
import ServicesList from "../../modules/services/ServicesList"
import ProgramsList from "../../modules/programs/ProgramsList"
import ContactBlock from "../../modules/contacts/ContactBlock"

export default function HomePage() {
  return (
    <>
      <TrainerCard />
      <ServicesList />
      <ProgramsList />
      <ContactBlock />
    </>
  )
}
