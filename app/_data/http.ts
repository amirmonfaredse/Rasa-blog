import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

export async function PostFormData(url: string, { arg }: { arg: FormData }) {
  const response = await api.post(url, arg);
  return response.data;
}
export async function PutFormData(url: string, { arg }: { arg: FormData }) {
  const response = await api.put(url, arg);
  return response.data;
}
export async function DeleteData(url: string) {
  const response = await api.delete(url);
  return response.data;
}
