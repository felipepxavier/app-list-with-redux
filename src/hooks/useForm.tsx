import { useState } from "react";

const useForm = (callback?: any) => {
  const [values, setValues] = useState({} as any);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
    if(event.target){
        const { name, value } = event.target;
        event.persist();
        setValues({ ...values, [name]: value });
    }else if(event.value){
      setValues({ ...values, [event.name]: event.value });
    }
  };

  const handleSubmit = (callback: any) =>(event: React.SyntheticEvent) => {
    event.preventDefault();
    callback();

  };

  return { values, setValues, handleChange, handleSubmit };
};

export default useForm;