type RoleValue = (typeof Role)[keyof typeof Role];

const Role = {
  USER: "user",
  ADMIN: "admin",
  ZERO: "zero",
} as const;

export { RoleValue, Role };
