export const saveToLocalStorage = (name, data) => {
  if (!window || !window.localStorage) {
    return;
  }

  window.localStorage.setItem(name, JSON.stringify(data));
};

export const getFromLocalStorage = (name) => {
  if (!window || !window.localStorage) {
    return null;
  }

  try {
    return JSON.parse(window.localStorage.getItem(name));
  } catch (e) {
    console.error(e);

    return null;
  }
};
