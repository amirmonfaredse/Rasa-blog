import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

export async function PostFormData<T>(
  url: string,
  formData: FormData
): Promise<T> {
  const response = await api.post(url, formData);
  return response.data;
}
export async function PutFormData<T>(
  url: string,
  formData?: FormData
): Promise<T> {
  const response = await api.put(url, formData);
  return response.data;
}
export async function DeleteData<T>(url: string): Promise<T> {
  const response = await api.delete(url);
  return response.data;
}
