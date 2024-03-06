import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = process.env.REACT_APP_STAGE === 'DEVELOPMENT' ? 
    process.env.REACT_APP_API_URL_DEP :
    process.env.REACT_APP_API_URL_DEV;

console.log(API_URL)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//sample get query template
export const useGet = (url) => {
  const { isPending,data, isLoading, isError } = useQuery({
    queryKey: ["useTestData"],
    queryFn: async () => {
      try {
        await wait(2000);
        const response = await axios.get(`${API_URL}/${url}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { data, isLoading, isError,isPending };
};

export const usePost = () => {
  const { isPending, mutateAsync, isSuccess } = useMutation({
    mutationFn: async ({ postData, url }) => {
      try {
        await wait(1000);
        const res = await axios.post(`${API_URL}/${url}`, postData);

        return res;
      } catch (error) {
        return error.response;
      }
    },
  });
  return { isPending, mutateAsync, isSuccess };
};
