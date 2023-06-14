import React from "react";
import { useField, FieldInputProps } from "formik";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

export interface ITextField {
  label: string;
  name: string;
  defaultValue: string;
}

const TextField: React.FC<{ data: ITextField }> = ({
  data: { defaultValue, label, name },
}: {
  data: ITextField;
}) => {
  // const [field, meta] = useField({
  //   name,
  //   value: defaultValue,
  //   onChange: (e: any) => {
  //     console.log(e);
  //   },
  // } as FieldInputProps<any>);

  return (
    <InputGroup>
      <InputLeftAddon children={label} />
      <Input
        placeholder={label}
        defaultValue={defaultValue}
        // {...field}
      />
    </InputGroup>
  );
};

export default TextField;
