import { cache } from 'react';

export const getPlayers = cache(async () => {
  const res = await fetch('http://localhost:3000/api/players', { next: { revalidate: 10 } });
  return res.json();
});
