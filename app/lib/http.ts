import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export async function PostFormData<T>(
  url: string,
  formData: FormData
): Promise<T> {
  const response = await api.post(url, formData);
  return response.data;
}
