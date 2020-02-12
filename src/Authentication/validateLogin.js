function validateLogin(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "El nombre es obligatorio";
    }
    if (!values.surname) {
      errors.surname = "El apellido es obligatorio";
    }
    if (!values.email) {
      errors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "El email no es válido";
    }
    if (!values.password) {
      errors.password = "La contraseña es obligatoria";
    } else if (values.password.length < 3) {
      errors.password = "La contraseña debe ser mayor de 3 caracteres";
    }
    if (!values.profession) {
      errors.profession = "La profesión es obligatoria";
    }
    if (!values.country) {
      errors.country = "El país es obligatorio";
    }
    if (!values.colivingName) {
      errors.colivingName = "El nombre del espacio es obligatorio";
    }
    if (!values.apartments) {
      errors.apartments = "El número de apartamentos es obligatorio";
    }
    if (!values.rooms) {
      errors.rooms = "El número total de habitaciones es obligatorio";
    }
    if (!values.roomType) {
      errors.rooms = "El tipo de habitaciones es obligatorio";
    }
    return errors;
  }

  export default validateLogin