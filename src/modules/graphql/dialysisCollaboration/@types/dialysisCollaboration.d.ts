declare module "@dialysisCollaboration" {
  type DialysisCollaborationConfig = {
    id: string;
    isOptionEnabled: boolean;
    dialysisDocTypeCode: number;
  };

  type DialysisCollaborationConfigRes = {
    result: boolean;
    code: string;
    message: string;
    data: DialysisCollaborationConfig;
  };

  type DialysisCollaborationEditConfig = {
    id: string;
    isFreeEditable: boolean;
    isChiefEditable: boolean;
    isSubjectiveEditable: boolean;
    isObjectiveEditable: boolean;
    isAssessmentEditable: boolean;
    isPlanEditable: boolean;
  };

  type DialysisCollaborationEditConfigRes = {
    result: boolean;
    code: string;
    message: string;
    data: DialysisCollaborationEditConfig;
  };
}
