export const fetchData = async (url: string, method = "GET") => {
  try {
    const response = await fetch(url, {
      method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw response;
    }
    const json = await response.json();
    return { error: false, statusCode: response.status, json };
  } catch (error) {
    return {
      error: true,
      statusCode: error.status,
    };
  }
};
