import { useForm, SubmitHandler } from "react-hook-form";
import style from "./Profile.module.css";
import { useEffect, useState } from "react";
import { Text } from "@mantine/core";
export interface User {
  name: string;
  login: string;
  email: string;
  password: number | string;
}
export const Profile = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();
  useEffect(() => {
    const savedData = localStorage.getItem("userProfile");
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);
  const onSubmit: SubmitHandler<User> = (data: User) => {
    localStorage.setItem("userProfile", JSON.stringify(data));
    setUserData(data);
    reset();
  };
  return (
    <div>
      {!userData ? (
        <>
          <h1>Let's create a profile</h1>
          <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
            <div className={style.formGroup}>
              <label className={style.label}>First Name</label>
              <input
                {...register("name", { required: true })}
                className={style.input}
              />
              {errors.name && (
                <span className={style.error}>This field is required</span>
              )}
            </div>

            <div className={style.formGroup}>
              <label className={style.label}>Login</label>
              <input
                {...register("login", { required: true })}
                className={style.input}
              />
              {errors.login && (
                <span className={style.error}>This field is required</span>
              )}
            </div>

            <div className={style.formGroup}>
              <label className={style.label}>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={style.input}
              />
              {errors.email && (
                <span className={style.error}>Please enter a valid email</span>
              )}
            </div>
            <div className={style.formGroup}>
              <label className={style.label}>Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className={style.input}
              />
              {errors.password && (
                <span className={style.error}>
                  Password must be at least 6 characters
                </span>
              )}
            </div>

            <button type="submit" className={style.submitButton}>
              Create Profile
            </button>
          </form>
        </>
      ) : (
        <div className={style.profileCard}>
          <div className={style.profileHeader}>
            <Text c="black" ff="Arial" fw={800} size="30px">
              {userData.name}
            </Text>
            <p className={style.username}>@{userData.login}</p>
          </div>

          <div className={style.profileDetails}>
            <div className={style.detailItem}>
              <span className={style.detailLabel}>Email:</span>
              <span className={style.detailValue}>{userData.email}</span>
            </div>

            <div className={style.detailItem}>
              <span className={style.detailLabel}>Password:</span>
              <span className={style.detailValue}>
                {showPassword ? userData.password : "••••••••"}
                <button
                  className={style.toggleButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? " 🙈" : " 👁️"}
                </button>
              </span>
            </div>
          </div>
          <button
            className={style.editButton}
            onClick={() => {
              localStorage.removeItem("userProfile");
              setUserData(null);
            }}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};
