import { SetMetadata } from "@nestjs/common";

import { RoleValue } from "@/constants";

const Roles = (...roles: RoleValue[]) => SetMetadata("roles", roles);

export { Roles };
