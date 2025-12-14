// import { Module } from "@nestjs/common";
// import { Field, GraphQLModule, Int, ObjectType } from "@nestjs/graphql";
// import { AuthorsService } from "./authors.service";
// import { AuthorsResolver } from "./authors.resolver";
// import {
//   ApolloFederationDriverConfig,
//   ApolloFederationDriver,
// } from "@nestjs/apollo";

// // @ObjectType()
// // class Author {
// //   @Field((_type) => Int)
// //   id: number;

// //   @Field({
// //     nullable: true,
// //   })
// //   firstName?: string;

// //   @Field({ nullable: true })
// //   lastName?: string;
// // }

// // export { Author };

// @Module({
//   imports: [
//     GraphQLModule.forRoot<ApolloFederationDriverConfig>({
//       driver: ApolloFederationDriver,
//       playground: true,
//       typePaths: ["src/graphql/author.graphql"],
//     }),
//   ],
//   providers: [AuthorsService, AuthorsResolver],
// })
// class AuthorModule {}

// export { AuthorModule };
