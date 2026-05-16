import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["managedit"];

export default function ManageditPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
