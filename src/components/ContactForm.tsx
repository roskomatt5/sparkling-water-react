import Button from "./Button";
import Input from "./Input";

import { useForm } from "react-hook-form";
import { server_calls } from "../api/servers";
import { useDispatch, useStore } from "react-redux";
import { chooseBrand, chooseFlavor } from "../redux/slices/RootSlice";

interface ContactFormProps {
  id?: string[];
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${data.make} ${props.id}`);
    } else {
      dispatch(chooseBrand(data.brand));
      dispatch(chooseFlavor(data.flavor));

      server_calls.create(store.getState());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="brand">Drink Brand</label>
          <Input {...register("brand")} name="brand" placeholder="Brand" />
        </div>
        <div>
          <label htmlFor="flavor">Drink Flavor</label>
          <Input {...register("flavor")} name="flavor" placeholder="Flavor" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
