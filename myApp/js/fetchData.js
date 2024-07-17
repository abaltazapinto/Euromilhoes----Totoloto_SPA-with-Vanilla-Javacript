export default async function getData() {
    const response = await fetch('https://euromillions.api.pedromealha.dev/draws ');
    if(!response.ok) throw new Error(response.status);
    const data = await response.json();
    return data;                     
}