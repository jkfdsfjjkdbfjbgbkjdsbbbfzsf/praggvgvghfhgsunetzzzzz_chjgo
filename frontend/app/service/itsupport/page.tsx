import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["itsupport"];

export default function ItsupportPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
