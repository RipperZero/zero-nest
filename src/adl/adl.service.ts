import { Injectable } from "@nestjs/common";
import { fakerJA as faker } from "@faker-js/faker";
import dayjs from "dayjs";
import {
  FindByoutouResObj,
  FindKanjyaListResObj,
  FindKanjyaResObj,
  FindShikkanJyoutaiResObj,
} from "@ADL";
import type { IterableElement } from "type-fest";

/**
 *  key: id
 *  value: level
 */
type ADL = Record<number, string>;

type EditADLInfo = Omit<
  FindKanjyaResObj,
  | "nyuuinDate"
  | "kamei"
  | "byoutouName"
  | "roomCode"
  | "roomName"
  | "adlList"
  | "yesterdayAdlList"
  | "diseaseStateList"
  | "disposeList"
  | "sonoHokaList"
> & {
  ADL: ADL;
  yesterdayADL: ADL;
  selectDiseaseStates: Array<
    Pick<
      IterableElement<FindKanjyaResObj["diseaseStateList"]>,
      "calendarKubun" | "shikkanJyoutaiNo" | "hyoujiName"
    >
  >;
  selectDisposes: Array<
    Pick<
      IterableElement<FindKanjyaResObj["disposeList"]>,
      "calendarKubun" | "shikkanJyoutaiNo" | "hyoujiName"
    >
  >;
  selectSonoHokas: Array<
    Pick<
      IterableElement<FindKanjyaResObj["disposeList"]>,
      "calendarKubun" | "shikkanJyoutaiNo" | "hyoujiName"
    >
  >;
};

const now = dayjs();

/** 疾患・状態（区分3） */
const DiseaseCondition_3: Record<string, string> = {
  "11": "スモン",
  "13": "86 に該当、かつ、1～41（13 及び31 を除く。）に１項目以上該当する場合",
} as const;

/** 疾患・状態（区分2） */
const DiseaseCondition_2: Record<string, string> = {
  "03": "消化管等の体内からの出血が反復継続している状態",
  "20": "筋ジストロフィー",
  "21": "多発性硬化症",
  "22": "筋萎縮性側索硬化症",
  "23": "パーキンソン病関連疾患",
  "24": "その他の指定難病等 （11 及び20～23 までを除く。）",
  "25": "脊髄損傷",
  "26": "慢性閉塞性肺疾患",
  "28": "基本診療料の施設基準等の別表第五の三の三の患者",
  "29": "悪性腫瘍",
  "30": "他者に対する暴行が毎日認められる場合",
  "31": "86 に該当、かつ、1～41（13 を除く。）に該当しない場合",
} as const;

const DiseaseCondition = {
  ...DiseaseCondition_3,
  ...DiseaseCondition_2,
};

const DiseaseConditionKeys = Object.keys(DiseaseCondition);

/** 処置（区分3） */
const Treatment_3: Record<string, string> = {
  "01": "24 時間持続しての点滴",
  "02": "中心静脈栄養（開始した日から30 日以内に実施するものに限る。）",
  "14": "中心静脈栄養",
  "15": "人工呼吸器の使用",
  "16": "ドレーン法又は胸腔若しくは腹腔の洗浄",
  "17": "85、かつ、83 の場合",
  "18": "酸素療法（密度の高い治療を要する状態に限る。）",
  "19": "感染症の治療の必要性から隔離室での管理",
} as const;

/** 処置（区分2） */
const Treatment_2: Record<string, string> = {
  "04": "尿路感染症に対する治療",
  "05": "傷病等によりリハビリテーション",
  "06": "81、かつ、83 の場合",
  "07": "82、かつ、83 の場合",
  "08": "せん妄に対する治療",
  "09": "84、かつ、82 又は83 の場合",
  "10": "頻回の血糖検査",
  "32": "中心静脈栄養（開始した日から30 日を超えて実施するものに限る。）",
  "33": "人工腎臓、持続緩徐式血液濾過、腹膜灌流又は血漿交換療法",
  "34": "肺炎に対する治療",
  "35": "褥瘡に対する治療",
  "36": "末梢循環障害による下肢末端の開放創に対する治療",
  "37": "うつ症状に対する治療",
  "38": "1 日8 回以上の喀痰吸引",
  "39": "気管切開又は気管内挿管（発熱を伴う状態を除く。）",
  "40": "創傷、皮膚潰瘍又は下腿若しくは足部の蜂巣炎、膿等の感染症に対する治療",
  "41": "酸素療法（18 を除く。）",
} as const;

/** 処置（区分1） */
const Treatment_1: Record<string, string> = {
  "81": "脱水に対する治療",
  "82": "頻回の嘔吐に対する治療",
  "83": "発熱がある状態",
  "84": "経鼻胃管や胃瘻等の経腸栄養",
  "85": "気管切開又は気管内挿管",
  "86": "医師及び看護職員により、常時、監視及び管理を実施している状態",
  "87": "中心静脈カテーテル関連血流感染症に対しての治療",
  "91": "身体的拘束を実施している",
} as const;

const Treatment = {
  ...Treatment_3,
  ...Treatment_2,
  ...Treatment_1,
};

const TreatmentKeys = Object.keys(Treatment);

const SonoHoka: Record<string, string> = {
  "12": "注１を参照",
  "27": "注２を参照",
  "90": "負担軽減対象の特定入院料の算定",
  "92": "未使用",
  "97": "注１４ 慢性腎臓病の患者",
  "98": "注１3 脳卒中、脳卒中の後遺症の患者（意識障害、筋ｼﾞｽﾄﾛﾌｨｰ、難病等除く）",
  "99": "生活療養費ではなく食事療養費を算定",
} as const;

const SonoHokaKeys = Object.keys(SonoHoka);

@Injectable()
class ADLService {
  createByoutous() {
    const findByoutouResObj = Array.from({ length: 10 }, (_, index) => {
      const code = (index + 1).toString().padStart(3, "0");
      const name = `病棟${code}`;

      const byoutou: IterableElement<FindByoutouResObj> = {
        byoutouCode: code,
        byoutouName: name,
      };

      return byoutou;
    });

    return findByoutouResObj;
  }

  createMockKanjyaList(wardsLength = 1, patientsLength = 1) {
    const kanjyaList = Array.from({ length: wardsLength }).map<
      IterableElement<FindKanjyaListResObj>
    >(() => {
      const roomCode = faker.number.int({ min: 1, max: 200 }).toString();

      return {
        roomCode: roomCode,
        roomName: `${roomCode}室`,
        kanjyaList: Array.from({ length: patientsLength }).map<
          IterableElement<IterableElement<FindKanjyaListResObj>["kanjyaList"]>
        >(() => {
          return {
            kanaName: "アアアア　イイイイ　ウウウウ",
            name: faker.person.fullName(),
            kanjyaNo: faker.number
              .int({ min: 1, max: 99999 })
              .toString()
              .padStart(10, "0"),
            seibetsu: faker.string.fromCharacters(["男", "女"]),
            age: faker.number.int({ min: 0, max: 100 }).toString(),
            nyuuinDate: dayjs(
              faker.date.between({
                from: now.subtract(2, "year").toDate(),
                to: now.toDate(),
              }),
            ).format("YYYY/MM/DD"),
            kamei: faker.string.fromCharacters(["内内内内科", "外外外外科"]),
            byoutouName: faker.number.int({ min: 1, max: 20 }).toString(),
            roomCode: roomCode,
            roomName: `${roomCode}室`,
            adl: faker.helpers.arrayElement([-1, 0, 1, 2, 3]),
            diseaseState: faker.number.int({ min: 1, max: 3 }),
            dispose: faker.number.int({ min: 1, max: 3 }),
            adlList: [],
            yesterdayAdlList: [],
            diseaseStateList: [],
            disposeList: [],
          };
        }),
      };
    });

    return kanjyaList;
  }

  createMockKanjyaADLInfo(kanjyaNo: string) {
    const kanjyaADLInfo: FindKanjyaResObj = {
      kanaName: "アアアア　イイイイ　ウウウウ",
      name: faker.person.fullName(),
      kanjyaNo: kanjyaNo,
      seibetsu: faker.string.fromCharacters(["男", "女"]),
      age: faker.number.int({ min: 0, max: 100 }).toString(),
      nyuuinDate: dayjs(
        faker.date.between({
          from: now.subtract(2, "month").toDate(),
          to: now.toDate(),
        }),
      ).format("YYYY/MM/DD"),
      // nyuuinDate: "2024/07/27",
      kamei: faker.string.fromCharacters(["内内内内科", "外外外外科"]),
      byoutouName: faker.number.int({ min: 1, max: 20 }).toString(),
      roomCode: null,
      roomName: null,
      adl: faker.helpers.arrayElement([-1, 1, 2, 3]),
      diseaseState: faker.number.int({ min: 1, max: 3 }),
      dispose: faker.number.int({ min: 1, max: 3 }),

      adlList: [34, 35, 36, 37].map((calendarKubun) => {
        return {
          calendarKubun: calendarKubun,
          shikkanJyoutaiNo: faker.number
            .int({ min: 0, max: 10 })
            .toString()
            .padStart(2, "0"),
          taisyouKubun: faker.number.int({ min: 0, max: 10 }),
          hyoujiName: "",
          adlValue: faker.number.int({ min: -1, max: 6 }).toString(),
          updateUser: "",
        };
      }),
      yesterdayAdlList: [34, 35, 36, 37].map((calendarKubun) => {
        return {
          calendarKubun: calendarKubun,
          shikkanJyoutaiNo: faker.number
            .int({ min: 0, max: 10 })
            .toString()
            .padStart(2, "0"),
          taisyouKubun: faker.number.int({ min: 0, max: 10 }),
          hyoujiName: "",
          adlValue: faker.number.int({ min: -1, max: 6 }).toString(),
          updateUser: "",
        };
      }),
      diseaseStateList: faker.helpers
        .arrayElements(DiseaseConditionKeys, {
          min: 0,
          max: 5,
        })
        .map((id) => {
          return {
            calendarKubun: 0,
            shikkanJyoutaiNo: id,
            taisyouKubun: faker.number.int({ min: 0, max: 10 }),
            hyoujiName: `${id} ${DiseaseCondition[id] ?? ""}`,
            adlValue: "",
            updateUser: "",
          };
        }),
      disposeList: faker.helpers
        .arrayElements(TreatmentKeys, {
          min: 0,
          max: 5,
        })
        .map((id) => {
          return {
            calendarKubun: 0,
            shikkanJyoutaiNo: id,
            taisyouKubun: faker.number.int({ min: 0, max: 10 }),
            hyoujiName: `${id} ${Treatment[id] ?? ""}`,
            adlValue: "",
            updateUser: "",
          };
        }),
      sonoHokaList: faker.helpers
        .arrayElements(SonoHokaKeys, {
          min: 0,
          max: 5,
        })
        .map((id) => {
          return {
            calendarKubun: 0,
            shikkanJyoutaiNo: id,
            taisyouKubun: faker.number.int({ min: 0, max: 10 }),
            hyoujiName: `${id} ${SonoHoka[id] ?? ""}`,
            adlValue: "",
            updateUser: "",
          };
        }),
    };

    return kanjyaADLInfo;
  }

  createMockAdlDict() {
    const diseaseStateDict: FindShikkanJyoutaiResObj["diseaseStateDict"] = [];
    const disposeDict: FindShikkanJyoutaiResObj["disposeDict"] = [];
    const sonoHokaDict: FindShikkanJyoutaiResObj["sonoHokaDict"] = [];

    Object.entries(DiseaseCondition_3).forEach(([key, value]) => {
      diseaseStateDict.push({
        hyoujiName: `${key} ${value}`,
        shikkanJyoutaiNo: key,
        taisyouKubun: 3,
        updateUser: "",
      });
    });
    Object.entries(DiseaseCondition_2).forEach(([key, value]) => {
      diseaseStateDict.push({
        hyoujiName: `${key} ${value}`,
        shikkanJyoutaiNo: key,
        taisyouKubun: 2,
        updateUser: "",
      });
    });

    Object.entries(Treatment_3).forEach(([key, value]) => {
      disposeDict.push({
        hyoujiName: `${key} ${value}`,
        shikkanJyoutaiNo: key,
        taisyouKubun: 3,
        updateUser: "",
      });
    });
    Object.entries(Treatment_2).forEach(([key, value]) => {
      disposeDict.push({
        hyoujiName: `${key} ${value}`,
        shikkanJyoutaiNo: key,
        taisyouKubun: 2,
        updateUser: "",
      });
    });
    Object.entries(Treatment_1).forEach(([key, value]) => {
      disposeDict.push({
        hyoujiName: `${key} ${value}`,
        shikkanJyoutaiNo: key,
        taisyouKubun: 0,
        updateUser: "",
      });
    });

    Object.entries(SonoHoka).forEach(([key, value]) => {
      sonoHokaDict.push({
        hyoujiName: `${key} ${value}`,
        shikkanJyoutaiNo: key,
        taisyouKubun: 0,
        updateUser: "",
      });
    });

    const adlDict: FindShikkanJyoutaiResObj = {
      sysNyuShikkanKbn: 10,
      diseaseStateDict: diseaseStateDict,
      disposeDict: disposeDict,
      sonoHokaDict: sonoHokaDict,
    };

    return adlDict;
  }

  create_diseaseStateList(selectedIds: string[]) {
    const _diseaseStateList = selectedIds.map<
      IterableElement<EditADLInfo["selectDiseaseStates"]>
    >((selectedId) => {
      let hyoujiName = "";
      if (DiseaseCondition_2[selectedId] !== undefined) {
        hyoujiName = `${selectedId} ${DiseaseCondition_2[selectedId]}`;
      }
      if (DiseaseCondition_3[selectedId] !== undefined) {
        hyoujiName = `${selectedId} ${DiseaseCondition_3[selectedId]}`;
      }
      return {
        calendarKubun: 0,
        shikkanJyoutaiNo: selectedId,
        hyoujiName: hyoujiName,
      };
    });

    return _diseaseStateList;
  }

  create_disposeList = (selectedIds: string[]) => {
    const _disposeList = selectedIds.map<
      IterableElement<EditADLInfo["selectDisposes"]>
    >((selectedId) => {
      let hyoujiName = "";

      if (Treatment_1[selectedId] !== undefined) {
        hyoujiName = `${selectedId} ${Treatment_1[selectedId]}`;
      }
      if (Treatment_2[selectedId] !== undefined) {
        hyoujiName = `${selectedId} ${Treatment_2[selectedId]}`;
      }
      if (Treatment_3[selectedId] !== undefined) {
        hyoujiName = `${selectedId} ${Treatment_3[selectedId]}`;
      }

      return {
        calendarKubun: 0,
        shikkanJyoutaiNo: selectedId,
        hyoujiName: hyoujiName,
      };
    });

    return _disposeList;
  };

  create_otherList = (selectedIds: string[]) => {
    const _otherList = selectedIds.map<
      IterableElement<EditADLInfo["selectSonoHokas"]>
    >((selectedId) => {
      let hyoujiName = "";

      if (SonoHoka[selectedId] !== undefined) {
        hyoujiName = `${selectedId} ${SonoHoka[selectedId]}`;
      }

      return {
        calendarKubun: 0,
        shikkanJyoutaiNo: selectedId,
        hyoujiName: hyoujiName,
      };
    });

    return _otherList;
  };
}

export { ADLService };
