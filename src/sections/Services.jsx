import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

export default function Services() {
  return (
    <section className="flex justify-center flex-wrap gap-9 max-container">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
}
