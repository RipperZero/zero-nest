declare module "@ADL" {
  type FindByoutouReqParams = {
    date: string;
  };

  type FindByoutouResObj = Array<{
    byoutouName: string;
    byoutouCode: string;
  }>;

  type FindKanjyaListReqParams = {
    date: string;
    byoutouCode: string;
  };

  type FindKanjyaListResObj = Array<{
    roomCode: string;
    roomName: string;
    kanjyaList: Array<{
      kanaName: string;
      name: string;
      kanjyaNo: string;
      seibetsu: string;
      age: string;
      nyuuinDate: string;
      kamei: string;
      byoutouName: string;
      roomCode: string;
      roomName: string;
      adl: number;
      diseaseState: number;
      dispose: number;
      adlList: number[];
      yesterdayAdlList: number[];
      diseaseStateList: number[];
      disposeList: number[];
    }>;
  }>;

  type FindKanjyaReqParams = {
    date: string;
    kanjyaNo: string;
    isNeedSync: boolean;
  };

  type FindKanjyaResObj = {
    kanaName: string;
    name: string;
    kanjyaNo: string;
    seibetsu: string;
    age: string | null;
    nyuuinDate: string;
    kamei: string | null;
    byoutouName: string | null;
    roomCode: string | null;
    roomName: string | null;
    adl: number;
    diseaseState: number;
    dispose: number;
    adlList: Array<{
      calendarKubun: number;
      shikkanJyoutaiNo: string;
      taisyouKubun: number;
      hyoujiName: string;
      updateUser: string;
      adlValue: string;
    }>;
    yesterdayAdlList: Array<{
      calendarKubun: number;
      shikkanJyoutaiNo: string;
      taisyouKubun: number;
      hyoujiName: string;
      updateUser: string;
      adlValue: string;
    }>;
    diseaseStateList: Array<{
      calendarKubun: number;
      shikkanJyoutaiNo: string;
      taisyouKubun: number;
      hyoujiName: string;
      updateUser: string;
      adlValue: string;
    }>;
    disposeList: Array<{
      calendarKubun: number;
      shikkanJyoutaiNo: string;
      taisyouKubun: number;
      hyoujiName: string;
      updateUser: string;
      adlValue: string;
    }>;
    sonoHokaList: Array<{
      calendarKubun: number;
      shikkanJyoutaiNo: string;
      taisyouKubun: number;
      hyoujiName: string;
      updateUser: string;
      adlValue: string;
    }>;
  };

  type FindShikkanJyoutaiReqParams = {
    date: string;
  };

  type FindShikkanJyoutaiResObj = {
    sysNyuShikkanKbn: number;
    diseaseStateDict: Array<{
      shikkanJyoutaiNo: string;
      taisyouKubun: number;
      hyoujiName: string;
      updateUser: string;
    }>;
    disposeDict: Array<{
      shikkanJyoutaiNo: string;
      taisyouKubun: number;
      hyoujiName: string;
      updateUser: string;
    }>;
    sonoHokaDict: Array<{
      shikkanJyoutaiNo: string;
      taisyouKubun: number;
      hyoujiName: string;
      updateUser: string;
    }>;
  };

  type UpdateAdlScoreReqParams = {
    kanjyaNo: string;
    date: string;
    calendarKubun: number;
    adlScore: string;
  };

  type UpdateDiseaseAndDisposeReqParams = {
    kanjyaNo: string;
    date: string;
    savedData: Array<{
      calendarKubun?: number;
      shikkanJyoutaiNo: string;
    }>;
    /** calendarKubun list */
    deletedData: number[];
  };

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
}
