import "./payment.scss";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";

const Payment = ({data}) => {
  const config = {
    referenceDate: new Date().getTime().toString(),
    email: data?.email,
    amount: data?.amount * 100,
    publicKey: "pk_test_51eac684286c77364fd33c2db939cc66dccdcb70",
    // publicKey: "pk_test_55383050203f3c68405b6cdd9d5a8c8629e8c93f",
  };

  

  const onSuccess = async (reference) => {
    console.log("transaction successful", reference);

  };

  const onClose = () => {
    toast.error("transaction not completed", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const componentProps = {
    ...config,
    text: "DONATE",
    className: "button",
    onSuccess: (reference) => onSuccess(reference),
    onClose: onClose,
  };

  return (
    <div className="payment">
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default Payment;