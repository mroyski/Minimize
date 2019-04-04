const categoryURL = "https://localhost:44387/api/category/";

export function GetAll() {
  return fetch(`${categoryURL}`).then(res => res.json());
}

export function GetById(id) {
  return fetch(`${categoryURL}/${id}`).then(res => res.json());
}
