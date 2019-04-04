export function GetAll() {
  return fetch('https://localhost:44387/api/category/').then(res => res.json());
}
