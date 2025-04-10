import api from './axios';

// Generic GET
export const fetchData = async <T = any>(
  url: string,
  params?: Record<string, any>
): Promise<T> => {
  const res = await api.get<T>(url, { params });
  return res.data;
};

// Generic POST
export const postData = async <T = any>(
  url: string,
  data?: Record<string, any>
): Promise<T> => {
  const res = await api.post<T>(url, data);
  return res.data;
};
