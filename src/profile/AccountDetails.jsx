import AboutMeForm from "./AccountDetails/AboutMeForm";
import BasicInfoForm from "./AccountDetails/BasicInfoForm";
import ContactInfoForm from "./AccountDetails/ContactInfoForm";
import ExternalLinksForm from "./AccountDetails/ExternalLinksForm";

export default function AccountDetails() {
  return (
    <section className="p-5">
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-14">
        <BasicInfoForm />
        <ContactInfoForm />
        <AboutMeForm />
        <ExternalLinksForm />
      </div>
    </section>
  );
}
