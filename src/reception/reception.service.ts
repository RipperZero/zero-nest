import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import dayjs from "dayjs";
import { fakerJA as faker } from "@faker-js/faker";
import { GetShokiUketsukeResObj, GetUketsukeDataResObj } from "@reception";
import { IterableElement } from "type-fest";
import _getShokiUketsuke from "./json/_getShokiUketsuke.json";
import _getKanjya from "./json/_getKanjya.json";

const DEPARTMENTS = [
  "内科",
  "外科",
  "小児科",
  "産婦人科",
  "皮膚科",
  "眼科",
  "耳鼻咽喉科",
  "整形外科",
  "心臓血管外科",
  "消化器科",
  "神経内科",
  "精神科",
  "泌尿器科",
  "呼吸器科",
  "放射線科",
  "麻酔科",
];

const now = dayjs();

@Injectable()
class ReceptionService {
  createUketsukeData(patientsLength = 1) {
    const uketsukeData: GetUketsukeDataResObj = {
      uketsukeMatiData: Array.from({ length: patientsLength }, (_, index) => {
        const sinnkannFlag = index % 2 === 0;
        const hasComment = index % 3 === 0;

        const uketsukeMati: IterableElement<
          GetUketsukeDataResObj["uketsukeMatiData"]
        > = {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          kanaName: "アアアア　イイイイ ウウウウ",
          birth: 20080808,
          seibetsu: faker.string.fromCharacters(["男", "女"]),
          sinnkannFlag: sinnkannFlag,
          mainDoctor: `${faker.person.fullName()}医師`,
          kanjyaNo: !sinnkannFlag
            ? faker.number
                .int({ min: 1, max: 99999 })
                .toString()
                .padStart(10, "0")
            : "",
          uketsukeNo: faker.number.int({ min: 1, max: 999 }),
          uketsukeTime: Number(now.format("HHmmss")),
          uketsukeKaNo: faker.number.int({ min: 1, max: 999 }),
          uketsukeKa: faker.string.fromCharacters(["内内内内科", "外外外外科"]),
          uketsukeComent: hasComment
            ? faker.string.fromCharacters([
                "車いすです。",
                "comment comment comment アアアア　イイイイ ウウウウ",
              ])
            : null,
        };

        return uketsukeMati;
      }),

      jusinnMatiData: Array.from({ length: patientsLength * 2 }, (_, index) => {
        const sinnkannFlag = index % 2 === 0;
        const hasComment = index % 3 === 0;

        const jusinnMati: IterableElement<
          GetUketsukeDataResObj["jusinnMatiData"]
        > = {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          kanaName: "アアアア　イイイイ ウウウウ",
          birth: 20080808,
          seibetsu: faker.string.fromCharacters(["男", "女"]),
          sinnkannFlag: sinnkannFlag,
          mainDoctor: `${faker.person.fullName()}医師`,
          kanjyaNo: faker.number
            .int({ min: 1, max: 99999 })
            .toString()
            .padStart(10, "0"),
          uketsukeNo: faker.number.int({ min: 1, max: 999 }),
          uketsukeTime: Number(now.format("HHmmss")),
          uketsukeKaNo: faker.number.int({ min: 1, max: 999 }),
          uketsukeKa: faker.string.fromCharacters(["内内内内科", "外外外外科"]),
          uketsukeComent: hasComment
            ? faker.string.fromCharacters([
                "車いすです。",
                "comment comment comment アアアア　イイイイ ウウウウ",
              ])
            : null,
        };

        return jusinnMati;
      }),
    };

    return uketsukeData;
  }

  createShokiUketsukeData() {
    const uketsukeDoctor = Array.from({ length: 10 }, (_, index) => {
      const doctor: IterableElement<GetShokiUketsukeResObj["uketsukeDoctor"]> =
        {
          doctorCode: (index + 1).toString(),
          doctorName: `${faker.person.fullName()}先生`,
        };

      return doctor;
    });

    uketsukeDoctor.unshift({
      doctorCode: "0",
      doctorName: "ー",
    });

    const shokiUketsukeData: GetShokiUketsukeResObj = {
      kanjyaJyouhou: {
        sinnkannFlag: false,
        kanjyaNo: faker.number
          .int({ min: 1, max: 99999 })
          .toString()
          .padStart(10, "0"),
        kanaName: "アアアア　イイイイ ",
        name: faker.person.fullName(),
        birth: 20080808,
        seibetsu: faker.string.fromCharacters(["男", "女"]),
        postNo: "047-8660",
        // address: "北海道小樽市花園２－９９－９９ 小樽市花園 小樽市花園",
        address1: "aaaaaaa",
        address2: "",
      },
      onlineKanjyaJyouhou: {
        sinnkannFlag: false,
        kanjyaNo: faker.number
          .int({ min: 1, max: 99999 })
          .toString()
          .padStart(10, "0"),
        kanaName: "アアアア　イイイイ ウウウウ 　イイイイ 　イイイイ",
        name: faker.person.fullName(),
        birth: 20080809,
        seibetsu: faker.string.fromCharacters(["男", "女"]),
        postNo: "048-8660",
        // address: "北海道小樽市花園２－66－66 小樽市花園 小樽市花園",
        address1: "aaaaaaa",
        address2: "bbb",
      },
      sameNameCheckKanjyaNoList: ["0000000001", "0000000002", "9999999999"],
      uketsukeKa: Array.from({ length: 10 }, (_, index) => {
        return {
          kaCode: (index + 1).toString(),
          kamei: faker.helpers.arrayElement(DEPARTMENTS),
        };
      }),
      uketsukeDoctor: uketsukeDoctor,
      jyushinNaiyou: _getShokiUketsuke.data.jyushinNaiyou,
      connect: _getShokiUketsuke.data.connect,
      matijyoutai: _getShokiUketsuke.data.matijyoutai,
      raiinData: _getShokiUketsuke.data.raiinData,
    };

    return shokiUketsukeData;
  }

  createKanjyaData = () => {
    return _getKanjya.data;
  };
}

export { ReceptionService };
