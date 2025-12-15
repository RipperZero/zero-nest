import {
  DialysisCollaborationConfigRes,
  DialysisCollaborationEditConfigRes,
} from "@dialysisCollaboration";
import { Injectable } from "@nestjs/common";

@Injectable()
class DialysisCollaborationService {
  findDialysisCollaborationConfig() {
    const response: DialysisCollaborationConfigRes = {
      result: true,
      code: "",
      message: "",
      data: {
        id: "123456",
        isOptionEnabled: true,
        dialysisDocTypeCode: 23,
      },
    };

    return response;
  }

  findDialysisCollaborationEditConfig() {
    const response: DialysisCollaborationEditConfigRes = {
      result: true,
      code: "",
      message: "",
      data: {
        id: "666",
        isFreeEditable: true,
        isChiefEditable: false,
        isSubjectiveEditable: true,
        isObjectiveEditable: false,
        isAssessmentEditable: true,
        isPlanEditable: false,
      },
    };

    return response;
  }
}

export { DialysisCollaborationService };
