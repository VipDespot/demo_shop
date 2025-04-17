import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import style from "./Profile.module.css";
import { useState } from "react";
import { Text } from "@mantine/core";
import { FormUser } from "./FormUser";
import { fieldsConfig } from "../../configs/Form.config";
import { useUserStore } from "../../store/user.store";

export interface User {
  name: string;
  login: string;
  email: string;
  password: number | string;
  birthDate: Date | null;
}
export const Profile = () => {
  const { user, saveUser, clearUser } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm<User>({
    defaultValues: user || {
      name: "",
      login: "",
      email: "",
      password: "",
      birthDate: null,
    },
  });
  const { handleSubmit, reset } = methods;
  const onSubmit: SubmitHandler<User> = (data) => {
    saveUser(data);
    reset();
  };
  return (
    <div>
      {!user ? (
        <>
          <div className={style.create_profile}>
            <Text
              size="50px"
              ta="center"
              pt="50px"
              ff="Arial, Helvetica, sans-serif"
            >
              Let's create a profile
            </Text>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
              {fieldsConfig.map((field) => (
                <FormUser
                  key={field.name}
                  name={field.name as keyof User}
                  label={field.label}
                  type={field.type}
                  validation={field.validation || { required: true }}
                />
              ))}
              <button type="submit" className={style.submitButton}>
                <Text c="white" fw={500} size="16px">
                  Create Profile
                </Text>
              </button>
            </form>
          </FormProvider>
        </>
      ) : (
        <div className={style.profileCard}>
          <div className={style.profileHeader}>
            <Text c="black" ff="Arial" fw={800} size="30px">
              {user.name}
            </Text>
            <Text c="#718096" size="14px" pt="10px">
              @{user.login}
            </Text>
          </div>

          <div className={style.profileDetails}>
            <div className={style.detailItem}>
              <span className={style.detailLabel}>Email:</span>
              <span className={style.detailValue}>{user.email}</span>
            </div>

            <div className={style.detailItem}>
              <Text fw={500} c="#4a5568">
                Password:
              </Text>
              <Text c="#2d3748" className={style.detailValue}>
                {showPassword ? user.password : "••••••••"}
                <button
                  className={style.toggleButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Text size="20px">{showPassword ? " 🙈" : " 👁️"}</Text>
                </button>
              </Text>
            </div>
            <div className={style.detailItem}>
              <Text fw={500} c="#4a5568">
                Birth Date:
              </Text>
              <Text c="#2d3748" className={style.detailValue}>
                {user.birthDate?.toLocaleDateString()}
              </Text>
            </div>
          </div>
          <button
            className={style.editButton}
            onClick={() => {
              localStorage.removeItem("userProfile");
              clearUser();
            }}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};
