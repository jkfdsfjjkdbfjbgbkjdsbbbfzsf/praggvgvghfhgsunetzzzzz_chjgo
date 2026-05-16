import ServiceDetailTemplate from "@/components/service/ServiceDetailTemplate";
import { serviceDetails } from "@/lib/serviceDetails";

const service = serviceDetails["uiux"];

export default function UIUXPage() {
  return service ? <ServiceDetailTemplate service={service} /> : null;
}
