import { api } from "@/app/lib/api-client";

export const addComapny = (data: any) => {
  return api.post("/v1/companies", data);
};

export const updateComapny = () => {
  return api.put("/v1/companies");
};

export const deleteComapny = () => {
  return api.delete("/v1/companies");
};

export const fetchComapny = () => {
  return api.get("/v1/companies");
};

export const getSingleComapny = (id: any) => {
  return api.get(`/v1/companies/${id}`);
};
