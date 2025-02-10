import studyManagerApi from "@/api/studyManagerApi";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "@/store/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const starLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await studyManagerApi.post("/auth/login", {
        email,
        password,
      });
      console.log(data);

      localStorage.setItem("token", data.data.token);
      localStorage.setItem("token-init-date", String(new Date().getTime()));

      checkAuth();

    } catch (error) {
      dispatch(onLogout("Incorrect credentials"));

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuth = async() => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(onLogout("No token"));
      return;
    };

    try {
      const { data } = await studyManagerApi.get("/user");
      dispatch(onLogin({ id: data.id, name: data.name, email: data.email }));
    } catch (error) {
      dispatch(onLogout(""));
    };
  };


  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout())
}
  return {
    errorMessage,
    status,
    user,

    checkAuth,
    starLogin,
    startLogout
  };
};
