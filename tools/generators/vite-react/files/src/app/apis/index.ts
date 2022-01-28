function getUserInfo() {
  return fetch('/api/user/info').then((res) => res.json());
}

export { getUserInfo };
