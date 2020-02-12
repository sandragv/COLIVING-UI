import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'

const useFormHostLogin = (callback, validate) => {
  const dispatch = useDispatch()
  const login = (user) => dispatch({ type: 'login', user })

  const [values, setValues] = useState({ name:"", surname:"", email:"", password:"", colivingName:"", street:"", zipcode:"", city:"", country:"", photo:"", apartments:"", rooms:"", roomType:"", facilities:"", website:"", facebook:"", instagram:"", twitter:"" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coliving = values
    setErrors(validate(values));
    setIsSubmitting(true);
    try {
      const ret = await fetch('http://localhost:3300/host/signup', {
        method: 'POST',
        body: JSON.stringify(coliving),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await ret.json()
      if (ret.ok)
        login(data)
    } catch (err) {
      console.warn('Error:', err)
    }
};

useEffect(() => {
  if (Object.keys(errors).length === 0 && isSubmitting) {
    callback();
  }
}, [errors, callback, isSubmitting]);

return {
  handleChange,
  handleSubmit,
  values,
  errors
};
};

export default useFormHostLogin;