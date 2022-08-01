import sendRequest from './send-request';

const BASE_URL = '/mealhistory';

// export function getAll() {
//   return sendRequest(BASE_URL);
// }

export function saveMeal(foodname, carbs) {
  return sendRequest(`${BASE_URL}`, 'POST', { foodname, carbs });
}

// export function getById(id) {
//   return sendRequest(`${BASE_URL}/${id}`);
// }
