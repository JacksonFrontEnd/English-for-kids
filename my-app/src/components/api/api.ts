import { Category } from "../../models/category-model";
import { WordModel } from "../../models/word-model";
import { CATEGORIES, url, WORD } from "../utils/const";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(url(CATEGORIES));
  return response.json();
};

export const getCategoryById = async (
  categoryId: number
): Promise<Category> => {
  const response = await fetch(url(`${CATEGORIES}/${categoryId}`));
  return response.json();
};

export const createCategory = async (data: Category): Promise<void> =>
  (
    await fetch(url(CATEGORIES), {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
  ).json();

export const deleteCategory = async (id: number): Promise<void> => {
  (await fetch(url(`${CATEGORIES}/${id}`), { method: "DELETE" })).json();
};
export const updateCategory = async (
  data: Category,
  id: number
): Promise<void> =>
  (
    await fetch(url(`${CATEGORIES}/${id}`), {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
  ).json();

export const getWords = async (): Promise<WordModel[][]> => {
  const response = await fetch(url(WORD));
  return response.json();
};

export const getWordsById = async (
  categoryId: number
): Promise<WordModel[]> => {
  const response = await fetch(url(`${WORD}/${categoryId}`));
  return response.json();
};
export const deleteArrWords = async (id: number) => {
  (await fetch(url(`${WORD}/${id}`), { method: "DELETE" })).json();
};
