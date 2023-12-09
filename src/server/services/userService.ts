export const userService = {
  authenticate,
};

async function authenticate(username: string, password: string) {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    })
  });

  const json = await res.json();
  if (!json.id) return null;
  
  return {
    ...json,
    name: `${json.firstName} ${json.lastName}`,
  };
}
