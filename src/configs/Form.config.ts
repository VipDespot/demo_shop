export const fieldsConfig = [
  { name: "name", label: "First Name" },
  { name: "login", label: "Login" },
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: {
      required: true,
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "birthDate",
    label: "Date of Birth",
    type: "date",
    validation: {
      required: true,
      validate: (value: Date) =>
        value <= new Date() || "Birth date cannot be in future",
    },
  },
];
