# 📁 Project Structure (NestJS Recommended Layout)

This project follows a modular and scalable architecture style with first-class support for **REST API + GraphQL**, **Mock modules**, and **environment-driven configurations**.

```
src
├── main.ts
├── app.module.ts

├── config
│   ├── app.config.ts
│   ├── database.config.ts
│   └── faker.config.ts

├── common
│   ├── decorators
│   ├── filters
│   ├── guards
│   ├── interceptors
│   ├── middleware
│   └── pipes

├── core
│   ├── database
│   │   ├── prisma.service.ts
│   │   └── typeorm.service.ts (optional)
│   ├── logger
│   └── events

├── modules
│   ├── auth
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.resolver.ts
│   │   ├── auth.service.ts
│   │   ├── auth.strategy.ts
│   │   └── dto
│   │       └── login.dto.ts
│   │
│   ├── user
│   │   ├── user.module.ts
│   │   ├── user.controller.ts
│   │   ├── user.resolver.ts
│   │   ├── user.service.ts
│   │   ├── dto
│   │   │   └── create-user.dto.ts
│   │   ├── entities
│   │   │   └── user.entity.ts
│   │   └── mock
│   │       ├── user.mock.service.ts
│   │       └── user.mock.factory.ts
│   │
│   └── product
│       ├── product.module.ts
│       ├── product.controller.ts
│       ├── product.resolver.ts
│       ├── product.service.ts
│       ├── dto
│       └── entities

├── graphql
│   └── schema.gql

├── seed
│   ├── seed.module.ts
│   └── seed.service.ts

└── utils
    ├── faker.factory.ts
    └── helpers.ts
```

---

## 🧠 Architecture Philosophy

| Layer       | Purpose                                                |
| ----------- | ------------------------------------------------------ |
| `modules/*` | Business logic (feature-based organization)            |
| `common/*`  | Shared utilities (guards, filters, interceptors, etc.) |
| `core/*`    | Infrastructure services (DB, logger, events)           |
| `config/*`  | Environment-based configuration                        |
| `utils/*`   | Reusable helpers — no business logic                   |