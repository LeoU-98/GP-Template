import CustomerFeatures from "./CustomerFeatures";
import CustomerForm from "./CustomerForm";

function CustomerSignup() {
  return (
    <div className="flex flex-col-reverse gap-0 xl:flex-row">
      <CustomerForm />
      <CustomerFeatures />
    </div>
  );
}

export default CustomerSignup;
