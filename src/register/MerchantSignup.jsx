import MerchantForm from "./MerchantForm";
import MerchantFeatures from "./MerchantFeatures";

function MerchantSignup() {
  return (
    <div className="flex flex-col-reverse gap-0 xl:flex-row">
      <MerchantForm />
      <MerchantFeatures />
    </div>
  );
}

export default MerchantSignup;
