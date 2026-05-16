import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["bigdata"];

export default function BigdataPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
