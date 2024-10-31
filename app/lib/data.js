
import axios from "axios";

const instance = axios.create({
  baseURL: "https://66d83a8437b1cadd8053e72c.mockapi.io/api/",
});

export async function fetchEvents() {
  try {
    const response = await instance.get("events");
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        "Server responded with an error",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("No response recieved", error.request);
    } else {
      console.error("Error setting up request", error.message);
    }
  }
}

export async function fetchEventsById(id) {
  try {
    const response = await instance.get(`events/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        "Server responded with an error",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("No response recieved", error.request);
    } else {
      console.error("Error setting up request", error.message);
    }
  }
}

export async function fetchUsers() {
  try {
    const response = await instance.get('users')
    return response.data
  } catch (error) {
    if (error.response) {
      console.error(
        "Server responded with an error",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("No response recieved", error.request);
    } else {
      console.error("Error setting up request", error.message);
    }
  }
}

export async function postUser(data) {
  try { 
    const response = await instance.post('/users', data)
    return response.data
  } catch (error) {
    console.error('Error uploading user data', error)
  }
}

export async function patchEvent(id, data) {
try {
  const response = await instance.put(`/events/${id}`, data)
  return response.data
} catch (error) {
  console.error('Error updating data', error)
}
}

export async function postEvent(data) {
  try {
    const response = await instance.post('/events', data)
    return response.data
  } catch (error) {
    console.error('Error posting event', error)
  }
}