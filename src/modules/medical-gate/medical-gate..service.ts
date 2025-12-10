// import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
// import dayjs from "dayjs";
// import { fakerJA as faker } from "@faker-js/faker";
// import { IterableElement } from "type-fest";
// import {
//   FindByoutouResObj,
//   FindNyuutaiinKanjyachiranResObj,
//   FindTaiinKanriByIdResObj,
//   FindTaiinShoriByIdResObj,
//   GetNyuutaiinKanjyaFileResObj,
//   UploadNyuutaiinKyoyuFileResObj,
// } from "@medicalGate";

// const _DESTINATION = ["自宅", "〇〇介護事業所", "●●介護事業所", "××介護事業所"];

// const now = dayjs();

// function createKanjyaFileEntityList() {
//   return Array.from({ length: 4 }, (_, index) => {
//     const type = index % 2 === 0 ? "image" : "document";
//     const fileName =
//       type === "image" ? `image_${index + 1}` : `document_${index + 1}`;

//     return {
//       id: fileName,
//       type: type,
//       fileName: fileName,
//       createAt: 1725951031155,
//       updateAt: now.valueOf(),
//     };
//   });
// }

// @Injectable()
// class MedicalGateService {
//   createByoutous() {
//     const findByoutouResObj = Array.from({ length: 10 }, (_, index) => {
//       const code = (index + 1).toString().padStart(3, "0");
//       const name = `病棟${code}`;

//       return {
//         byoutouCode: code,
//         byoutouName: name,
//       } as IterableElement<FindByoutouResObj>;
//     });

//     return findByoutouResObj;
//   }

//   createNyuutaiinKanjyachiran(length: number) {
//     const patientList: FindNyuutaiinKanjyachiranResObj = Array.from(
//       { length: length },
//       (_, index) => {
//         return {
//           id: faker.string.uuid(),
//           nyuutaiinStatus: faker.string.fromCharacters([
//             "未調整",
//             "調整中",
//             "調整済",
//             "退院済",
//           ]),
//           kanjyaInfo: {
//             kanjyaNo: faker.number
//               .int({ min: 1, max: 99999 })
//               .toString()
//               .padStart(10, "0"),
//             name: faker.person.fullName(),
//             kanaName: "アアアア　イイイイ ウウウウ",
//             birth: 20080808,
//             seibetsu: faker.string.fromCharacters(["男", "女"]),
//           },
//           nyuuinDate: index % 2 === 0 ? 20000606 : 20180808,
//           taiinDate: index % 2 === 0 ? 20200909 : 0,
//           dayCount: faker.number.int({ min: 20, max: 60 }),
//         };
//       },
//     );

//     return patientList;
//   }

//   createEditInfo() {
//     const editInfo: FindTaiinShoriByIdResObj = {
//       id: faker.string.uuid(),
//       kanjyaInfo: {
//         kanaName: "アアアア　イイイイ　ウウウウ",
//         name: faker.person.fullName(),
//         kanjyaNo: faker.number
//           .int({ min: 1, max: 99999 })
//           .toString()
//           .padStart(10, "0"),
//         birth: 20000606,
//         seibetsu: faker.string.fromCharacters(["男", "女"]),
//       },
//       nyuutaiinStatus: faker.string.fromCharacters([
//         "未調整",
//         "調整中",
//         "調整済",
//       ]),
//       taiinDate: 20230606,
//       kaigoCheckBoxBeanList: _DESTINATION.map((value, index) => {
//         return {
//           kaigoCode: (index + 1).toString(),
//           kaigoName: value,
//         };
//       }),
//       kaigoCodeSelectedList: faker.helpers.arrayElements(
//         Array.from({ length: _DESTINATION.length }, (_, index) => {
//           return (index + 1).toString();
//         }),
//         {
//           min: 0,
//           max: 4,
//         },
//       ),
//     };

//     return editInfo;
//   }

//   createTaiinKanri() {
//     const editConfig: FindTaiinKanriByIdResObj = {
//       id: faker.string.uuid(),
//       kanjyaInfo: {
//         kanaName: "アアアア　イイイイ　ウウウウ",
//         name: faker.person.fullName(),
//         kanjyaNo: faker.number
//           .int({ min: 1, max: 99999 })
//           .toString()
//           .padStart(10, "0"),
//         birth: 20000606,
//         seibetsu: faker.string.fromCharacters(["男", "女"]),
//       },
//       kanjyaNyuutaiinInfo: {
//         nyuutaiinStatus: faker.string.fromCharacters([
//           "未調整",
//           "調整中",
//           "調整済",
//         ]),
//         nyuuinDate: 20240606,
//         taiinDate: 0,
//       },
//       kaigoNameSelectedList: _DESTINATION,
//       kanjyaFileEntityList: createKanjyaFileEntityList(),
//     };

//     return editConfig;
//   }

//   createNyuutaiinKanjyaFile() {
//     const nyuutaiinKanjyaFiles: GetNyuutaiinKanjyaFileResObj["kyoyuFileList"] =
//       Array.from({ length: 10 }, (_, index) => {
//         return {
//           id: `document_${index + 1}`,
//           type: "document",
//           fileName: `document_${index + 1}`,
//           fileData: "",
//           createAt: now.valueOf(),
//           updateAt: now.valueOf(),
//         };
//       });

//     const nyuutaiinKanjyaFile: GetNyuutaiinKanjyaFileResObj = {
//       kyoyuFileList: nyuutaiinKanjyaFiles,
//     };

//     return nyuutaiinKanjyaFile;
//   }

//   uploadNyuutaiinKyoyuFile(params: FormData) {
//     const timeStamp = dayjs().valueOf();

//     const result: UploadNyuutaiinKyoyuFileResObj = {
//       id: params.get("id") as string,
//       type: params.get("type") as string,
//       fileName: params.get("fileName") as string,
//       createAt: timeStamp,
//       updateAt: timeStamp,
//     };

//     return result;
//   }
// }

// export { MedicalGateService };
