declare module "@common" {
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
