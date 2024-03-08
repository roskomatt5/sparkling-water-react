const token = "9a108d22d5d9c04d286ab17d5ab66476754430d268787881";

export const server_calls = {
  get: async () => {
    const response = await fetch(
      `https://sparkling-water-inventory.onrender.com/api/drinks`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }

    return await response.json();
  },

  create: async (data: any = {}) => {
    const response = await fetch(
      `https://sparkling-water-inventory.onrender.com/api/drinks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create new data on the server");
    }

    return await response.json();
  },

  update: async (id: string, data: any = {}) => {
    const response = await fetch(
      `https://sparkling-water-inventory.onrender.com/api/drinks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update data on the server");
    }

    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(
      `https://sparkling-water-inventory.onrender.com/api/drinks/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete data from the server");
    }

    return;
  },
};
