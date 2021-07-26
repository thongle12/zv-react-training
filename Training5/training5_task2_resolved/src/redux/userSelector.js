

export const getToken = (state) => state.auth.token;
export const getAllUsers = (state) => state.users.users;
export const getAllIdUsers = (state) => state.users.users.map(x => x.id);
