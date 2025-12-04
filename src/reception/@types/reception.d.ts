declare module "@reception" {
  type FindHaitaReqParams = {
    kanjyaNo: string;
  };

  type FindHaitaResObj = {
    isHaita: boolean;
    haitaType: number;
    haitaMessage: string;
  } | null;

  type UpdateHaitaReqParams = {
    kanjyaNo: string;
    flag: boolean;
  };

  type GetUketsukeDataResObj = {
    jusinnMatiData: Array<{
      id: string;
      name: string;
      sinnkannFlag?: boolean;
      mainDoctor: string;
      kanjyaNo: string;
      uketsukeKaNo: number;
      uketsukeTime: number;
      uketsukeNo: number;
      birth: number;
      kanaName: string;
      uketsukeKa: string;
      seibetsu: string;
      uketsukeComent: string | null;
    }>;
    uketsukeMatiData: Array<{
      id: string;
      name: string;
      sinnkannFlag: boolean;
      mainDoctor: string;
      kanjyaNo: string;
      uketsukeKaNo: number;
      uketsukeTime: number;
      uketsukeNo: number;
      birth: number;
      kanaName: string;
      uketsukeKa: string;
      seibetsu: string;
      uketsukeComent: string | null;
    }>;
  };

  type GetShokiUketsukeReqParams = {
    id: string;
  };

  type KanjyaJyouhou = {
    sinnkannFlag: boolean;
    kanjyaNo: string;
    kanaName: string;
    name: string;
    birth: number;
    seibetsu: string;
    postNo: string;
    address1: string;
    address2: string;
  };

  type GetShokiUketsukeResObj = {
    kanjyaJyouhou: KanjyaJyouhou;
    onlineKanjyaJyouhou: KanjyaJyouhou;
    sameNameCheckKanjyaNoList: Array<string>;
    uketsukeKa: Array<{
      kaCode: string;
      kamei: string;
    }>;
    uketsukeDoctor: Array<{
      doctorCode: string;
      doctorName: string;
    }>;
    jyushinNaiyou: Array<{
      naiyouCode: string;
      naiyouDisplayName: string;
    }>;
    matijyoutai: Array<{
      code: string;
      value: string;
    }>;
    connect: Array<{
      code: string;
      value: string;
    }>;
    raiinData: {
      uketsukeDate: number;
      uketsukeNo: number;
      kanjyaNo: string;
      uketsukeKa: string;
      uketsukeSyousai: string;
      mainDoctorCode: string;
      uketsukeNoKa: number;
      uketsukeNaiyous: Array<string>;
      machiJyoutais: Array<number>;
      sinsatsuzumi: number;
      uketsukeComent: string;
      sinsatsuEndTime: number;
    };
  };

  type UpdateOnlineToKanjyaReqParams = {
    id: string;
    kanjyaNo: string;
  };

  type UpdateUketsukeReqParams = {
    id: string;
    sinnkannFlag: boolean;
    raiinData: {
      uketsukeDate: number;
      uketsukeNo: number;
      kanjyaNo: string;
      uketsukeKa: string;
      uketsukeSyousai: string;
      mainDoctorCode: string;
      uketsukeNoKa: number;
      uketsukeNaiyous: Array<string>;
      machiJyoutais: Array<number>;
      sinsatsuzumi: number;
      uketsukeComent: string;
      sinsatsuEndTime: number;
    };
  };

  type GetKanjyaReqParams = {
    id: string;
    kanjyaNo: string;
  };

  type GetKanjyaResObj = {
    id: string;
    kanjyaNo: string;
    /** フリガナ */
    kanaName: string;
    /** 氏名 */
    name: string;
    oldKanaName: string;
    oldName: string;
    /** 生年月日 */
    birth: number;
    /** 性別 */
    seibetsu: string;
    tel: string;
    keitaiNo: string;
    /** Eメール */
    email: string;
    /** 郵便番号 */
    postNo: string;
    /** 住所 1 */
    address1: string;
    /** 住所 2 */
    address2: string;
    /** 職業 */
    syokugyou: string;
    /** 連絡事項 1 */
    comment1: string;
    /** 連絡事項 2 */
    comment2: string;
    /** 勤務先名 */
    kinmuName: string;
    /** 勤務先電話番号 */
    kinmuTelNo: string;
    /** 勤務先郵便番号 */
    kinmuPostNo: string;
    /** 勤務先住所 1 */
    kinmuAddress1: string;
    /** 勤務先住所 2 */
    kinmuAddress2: string;
    /** その他連絡先名 */
    renrakuName: string;
    /** 連絡先郵便番号 */
    renrakuPostNo: string;
    /** 連絡先電話番号 */
    renrakuTelNo: string;
    /** 連絡先住所 1 */
    renrakuAddress1: string;
    /** 連絡先住所 2 */
    renrakuAddress2: string;
  };

  type SameNameCheckReqParams = {
    kanjyaNo: string;
    kanaName: string;
    name: string;
    birth: number;
    seibetsu: string;
  };

  type UpdateKanjyaReqParams = {
    id: string;
    kanjyaNo: string;
    /** 氏名 */
    name: string;
    /** フリガナ */
    kanaName: string;
    /** 生年月日 */
    birth: number;
    /** 性別 */
    seibetsu: string;
    /** Eメール */
    email: string;
    /** 郵便番号 */
    postNo: string;
    /** 住所 1 */
    address1: string;
    /** 住所 2 */
    address2: string;
    /** 職業 */
    syokugyou: string;
    /** 連絡事項 1 */
    comment1: string;
    /** 連絡事項 2 */
    comment2: string;
    /** 勤務先名 */
    kinmuName: string;
    /** 勤務先電話番号 */
    kinmuTelNo: string;
    /** 勤務先郵便番号 */
    kinmuPostNo: string;
    /** 勤務先住所 1 */
    kinmuAddress1: string;
    /** 勤務先住所 2 */
    kinmuAddress2: string;
    /** その他連絡先名 */
    renrakuName: string;
    /** 連絡先電話番号 */
    renrakuTelNo: string;
    /** 連絡先郵便番号 */
    renrakuPostNo: string;
    /** 連絡先住所 1 */
    renrakuAddress1: string;
    /** 連絡先住所 2 */
    renrakuAddress2: string;

    oldKanaName?: string;
    oldName?: string;
    tel?: string;
    keitaiNo?: string;
  };
}
