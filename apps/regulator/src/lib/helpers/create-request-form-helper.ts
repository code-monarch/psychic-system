// import { IRequestCreatorDepartments } from "../types";

const answerjson = {};
const draft = {};

const videoChoice = "Video (.mp4 and .mov)";
const documentChoice = "Document (.pdf)";
const mediaTypeOptions = {
  DOCUMENT: documentChoice,
  VIDEO: videoChoice,
};

const questionTypes = [
  "text",
  "checkbox",
  "radiogroup",
  "comment",
  "country",
  "file",
  "dropdown",
  "boolean",
  "boolean",
  "Image",
  "signaturepad",
];

const surveyPropertyViewList = [
  "title",
  "pages",
  "ratingEnabled",
  'ratingScale',
  "commentMandatory",
];

const pagePropertyViewList = ["name", "title", "AssignToDepartments"];

const textPropertyViewList = [
  "name",
  "title",
  "isRequired",
  "inputType",
  "AssignToDepartments",
];

const checkBoxPropertyViewList = [
  "name",
  "title",
  "isRequired",
  "AssignToDepartments",
];

const radiogroupPropertyViewList = [
  "name",
  "title",
  "isRequired",
  "AssignToDepartments",
];

const commentPropertyViewList = [
  "name",
  "title",
  "isRequired",
  "AssignToDepartments",
];

const filePropertyViewList = [
  "name",
  "title",
  "isRequired",
  "AssignToDepartments",
  "allowMultiple",
  "selectMediaType",
];

const countryPropertyViewList = [
  "name",
  "title",
  "isRequired",
  "AssignToDepartments",
];

const confirmationCheckboxPropertyViewList = [
  "name",
  "title",
  "isRequired",
  "AssignToDepartments",
];

const defaultQuestionnaireData = {
  title: "Approval Request Form",
  pages: [
    {
      name: "page1",
    },
  ],
};

const MAX_WEIGHT = 100;
const MIN_WEIGHT = 0;
const TOTAL_WEIGHT = 100;

export {
  answerjson,
  draft,
  videoChoice,
  documentChoice,
  mediaTypeOptions,
  questionTypes,
  surveyPropertyViewList,
  pagePropertyViewList,
  textPropertyViewList,
  checkBoxPropertyViewList,
  radiogroupPropertyViewList,
  commentPropertyViewList,
  filePropertyViewList,
  countryPropertyViewList,
  confirmationCheckboxPropertyViewList,
  defaultQuestionnaireData,
//   getDepartmentNames,
  MAX_WEIGHT,
  MIN_WEIGHT,
  TOTAL_WEIGHT,
};
