const controller = new AbortController();

const request = async (url) => {
  try {
    const response = await fetch(url, { signal: controller.signal });
    return await response.json();
  } catch(error) {
    console.log("Error", error);
  }
}

const API = {
  request,
  abort: () => controller.abort(),
  isAborted: () => controller.signal.aborted,
}

export default API;