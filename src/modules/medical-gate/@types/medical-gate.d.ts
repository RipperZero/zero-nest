declare module "@medicalGate" {
  type FindByoutouReqParams = {
    date: string;
  };

  type FindByoutouResObj = Array<{
    byoutouName: string;
    byoutouCode: string;
  }>;

  type FindNyuutaiinKanjyachiranReqParams = {
    byoutouCode: string;
    kanjyaInfo?: string;
    roomCode?: string;
  };

  type FindNyuutaiinKanjyachiranResObj = Array<{
    id: string;
    nyuutaiinStatus: string;
    kanjyaInfo: {
      kanjyaNo: string;
      name: string;
      kanaName: string;
      birth: number;
      seibetsu: string;
    };
    nyuuinDate: number;
    taiinDate: number | null;
    dayCount: number | null;
  }> | null;

  type FindTaiinShoriByIdReqParams = {
    id: string;
    byoutouCode: string;
  };

  type FindTaiinShoriByIdResObj = {
    id: string;
    kanjyaInfo: {
      kanjyaNo: string;
      name: string;
      kanaName: string;
      birth: number;
      seibetsu: string;
    };
    nyuutaiinStatus: string;
    taiinDate: number;
    kaigoCodeSelectedList: string[];
    kaigoCheckBoxBeanList: Array<{
      kaigoCode: string;
      kaigoName: string;
    }>;
  };

  type UpdateTaiinShoriReqParams = {
    id: string;
    nyuutaiinStatus: string;
    kaigoCodeSelectedList: string[];
    taiinDate?: number;
  };

  type FindTaiinKanriByIdReqParams = {
    id: string;
    byoutouCode: string;
  };

  type FindTaiinKanriByIdResObj = {
    id: string;
    kanjyaInfo: {
      kanjyaNo: string;
      name: string;
      kanaName: string;
      birth: number;
      seibetsu: string;
    };
    kanjyaNyuutaiinInfo: {
      nyuutaiinStatus: string;
      nyuuinDate: number;
      taiinDate: number;
    };
    kaigoNameSelectedList: string[];
    kanjyaFileEntityList: Array<{
      id: string;
      type: string;
      fileName: string;
      createAt: number;
      updateAt: number;
    }>;
  };

  type GetNyuutaiinKanjyaFileReqParams = {
    id: string;
  };

  type GetNyuutaiinKanjyaFileResObj = {
    kyoyuFileList: Array<{
      id: string;
      type: string;
      fileName: string;
      fileData: string;
      createAt: number;
      updateAt: number;
    }>;
  };

  type UploadNyuutaiinKyoyuFileReqFormData = {
    id: string;
    type: string;
    fileName: string;
    fileData?: string;
    imageData?: File;
  };

  type UploadNyuutaiinKyoyuFileResObj = {
    id: string;
    type: string;
    fileName: string;
    createAt: number;
    updateAt: number;
  };
}
