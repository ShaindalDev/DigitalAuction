export function createLocalStorageSave(key, storageValue) {
  localStorage.setItem(key, JSON.stringify(storageValue));
}
export function save(key, storageValue) {
  localStorage.setItem(key, JSON.stringify(storageValue));
}

export function load(key) {
  try {
    const storageValue = localStorage.getItem(key);
    return JSON.parse(storageValue);
  } catch {
    return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}
