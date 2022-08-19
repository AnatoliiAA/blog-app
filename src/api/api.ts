const BASE_URL = 'https://bloggy-api.herokuapp.com';

export const getPosts = async () => {
  try {
    const requestUrl = `${BASE_URL}/posts/`;
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (title: string, text: string) => {
  try {
    const requestUrl = `${BASE_URL}/posts`;
    const requestData = { title: title, body: text };
    const response = await fetch(requestUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updatePost = async (title: string, text: string, postId: number) => {
  try {
    const requestUrl = `${BASE_URL}/posts/${postId}`;
    const requestData = { title: title, body: text };
    const response = await fetch(requestUrl, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deletePost = async (postId: number) => {
  try {
    const requestUrl = `${BASE_URL}/posts/${postId}`;
    const response = await fetch(requestUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getComments = async (id: number) => {
  try {
    const requestUrl = `${BASE_URL}/posts/${id}?_embed=comments`;
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (postId: number, text: string) => {
  try {
    const requestUrl = `${BASE_URL}/comments`;
    const requestData = { postId: postId, body: text };
    const response = await fetch(requestUrl, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
