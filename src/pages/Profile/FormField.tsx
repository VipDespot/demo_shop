import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { User } from "./Profile";
import style from "./Profile.module.css";
import { Text } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
export const FormField = ({
  name,
  label,
  type,
  validation,
}: {
  name: keyof User;
  label: string;
  type?: string;
  validation?: RegisterOptions<User, keyof User>;
}) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<User>();

  const errorMessages: { [key: string]: string } = {
    email: "Please enter a valid email",
    minLength: "Password must be at least 6 characters",
    required: "This field is required",
    pattern: "Please enter a valid date",
    validate: "Invalid date",
  };

  const getErrorMessage = (errorType: string) => {
    return errorMessages[errorType] || "Invalid field";
  };

  return (
    <div className={style.formGroup}>
      <label className={style.label}>
        <Text c="#2d3436" fw={500}>
          {label}
        </Text>
      </label>
      {type === "date" ? (
        <Controller
          name={name}
          control={control}
          rules={validation}
          render={({field}) => (
            <DatePicker
              {...field}
              value={field.value ? new Date(field.value) : null}
              onChange={(date) => field.onChange(date)}
              maxDate={new Date()}
              className={style.input}
            />
          )}
        />
      ) : (
        <input
          type={type}
          {...register(name, validation)}
          className={style.input}
        />
      )}
      {errors[name] && (
        <Text c="#f78787" size="10px" mt="6px" className={style.error}>
          {getErrorMessage(errors[name]!.type as string)}
        </Text>
      )}
    </div>
  );
};
