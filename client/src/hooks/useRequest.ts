import { useState } from "react";
import axios from "axios";

interface UseRequestsArgs {
  url: string;
  method: string;
  body: {
    [key: string]: string;
  };
  onSuccess: (arg: { [key: string]: string }) => void;
}

const useRequest = ({ url, method, body, onSuccess }: UseRequestsArgs) => {
  const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      // @ts-ignore
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      let obj: { [key: string]: string } = {};

      interface ET {
        field: string;
        message: string;
      }

      err.response.data.errors.forEach((e: ET) => (obj[e.field] = e.message));

      setErrors(obj);
    }
  };

  return { doRequest, errors };
};

export default useRequest;
