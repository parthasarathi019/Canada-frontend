import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useUserRole = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const { data, isLoading } = useQuery({
    queryKey: ["role", "title", user, token],
    enabled: Boolean(user?.email && token),
    queryFn: async () => {
      const res = await axios.get(
        `https://backend-kappa-puce.vercel.app/api/users/${user?.email}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return res.data;
    },
  });
  return { role: data?.role, isLoading, title: data?.title, };
};

export default useUserRole;
