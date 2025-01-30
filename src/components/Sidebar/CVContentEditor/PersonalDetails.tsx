import Card from "../../Card";
import Input from "../../Input";
import { useCVContext } from "~/context/CVContextProvider";

export default function PersonalDetailsCard() {
  const {
    handleCVChange,
    cvData: { fullName, email, phone, location },
  } = useCVContext();

  return (
    <Card title="Personal Details">
      <div className="space-y-2 p-6 pt-0">
        <Input
          labelText="Full name"
          type="text"
          placeholder="John Darksouls"
          value={fullName}
          onChange={(e) => handleCVChange("fullName", e.target.value)}
        />
        <Input
          labelText="Email"
          type="email"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => handleCVChange("email", e.target.value)}
        />
        <Input
          labelText="Phone number"
          type="tel"
          placeholder="1234567890"
          value={phone}
          onChange={(e) => handleCVChange("phone", e.target.value)}
        />
        <Input
          labelText="Address"
          type="text"
          placeholder="Paris, France"
          value={location}
          onChange={(e) => handleCVChange("location", e.target.value)}
        />
      </div>
    </Card>
  );
}
