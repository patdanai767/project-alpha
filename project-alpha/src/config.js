import Cookies from "js-cookie";

export const config = {
  headers: () => {
    return {
      headers: {
        Authorization: `Bearer ${Cookies.get("AUTH_KEY" || null)}`,
      },
    };
  },
};
