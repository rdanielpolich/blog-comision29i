const url = "http://localhost:8080/api";

export const postUsuario = async (datos) => {
  const resp = await fetch(`${url}/usuarios`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

export const postAuth = async (datos) => {
  const resp = await fetch(`${url}/auth/login`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

export const getBlog = async () => {
  const resp = await fetch(`${url}/blog`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

export const getBlogById = async (id) => {
  const resp = await fetch(`${url}/blog/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("token")),
    },
  });
  const data = await resp.json();

  return data;
};

//-------------------------------------------------------------------------------
// export const getPosts = async () => {
//   const resp = await fetch("http://localhost:8080/posts");
//   const data = await resp.json();

//   return data;
// };

// export const getPostById = async (id) => {
//   const resp = await fetch(`http://localhost:8080/posts/${id}`);
//   const data = await resp.json();

//   return data;
// };

// export const addPost = async (datos) => {
//   const resp = await fetch("http://localhost:8080/posts", {
//     method: "POST",
//     body: JSON.stringify(datos),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });

//   const data = await resp.json();

//   return data;
// };
