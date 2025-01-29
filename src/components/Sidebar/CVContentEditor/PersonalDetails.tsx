import Card from "../../Card";
import Input from "../../Input";

type Props = {};
export default function PersonalDetailsCard({}: Props) {
  return (
    <Card title="Personal Details">
      <div className="space-y-2 p-6 pt-0">
        <Input labelText="Full name" type="text" placeholder="John Darksouls" />
        <Input
          labelText="Email"
          type="email"
          placeholder="example@domain.com"
        />
        <Input labelText="Phone number" type="tel" placeholder="1234567890" />
        <Input labelText="Address" type="text" placeholder="Paris, France" />
      </div>
    </Card>
  );
}
