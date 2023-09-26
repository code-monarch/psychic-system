import {useEffect} from "react"

// Survey JS
import { ComponentCollection } from "survey-core";
import { SurveyCreator } from "survey-creator-react";

// Request Form Helpers
import {
  checkBoxPropertyViewList,
  commentPropertyViewList,
  countryPropertyViewList,
  filePropertyViewList,
  pagePropertyViewList,
  questionTypes,
  radiogroupPropertyViewList,
  surveyPropertyViewList,
  textPropertyViewList
} from "../helpers/create-request-form-helper";

import { surveyTheme } from "../helpers/survey-theme";

// Country List
import countryList from "react-select-country-list";

// Register new "country" component
ComponentCollection.Instance.add({
  name: "country",   // Unique component name. It becomes a new question type. Please note, it should be written in lowercase.
  title: "Country", // The text that shows on toolbox
  questionJSON: {
    type: "dropdown",
    placeholder: "Select a country...",
    choices: countryList()
      .getData()
      .map((item) => ({
        value: item.label,
      })),
  }, // The actual question that will do the job
});

export const useSurveyCreator = () => {
    const creatorOptions = {
    showPreviewTab: true,
    showToolbox: true,
    haveCommercialLicense: true, // Disables the "Get Commercial License" Banner at the bottom of survey creator component
    isAutoSave: false,
    showThemeTab: true,
    questionTypes, // Get availble question types that can be used from helper import
  };
    // Custom CSS selector
  const customCss = {
    question: {
      content: "question-content",
      answered: "question-answered",
      titleRequired: "question-title-required",
    },
  };

  // Instantiate Survey-creator instance with Creator Options
  let creator;
  creator = new SurveyCreator(creatorOptions),

  // ----------------------------------- //
  creator.survey.title = "Request Form";

  creator.toolbox.forceCompact = false;

  creator.survey.applyTheme(surveyTheme);

  creator.survey.css = customCss;
  // ----------------------------------- //


  creator.survey.onUpdateQuestionCssClasses.add(function (_, options) {
    const classes = options.cssClasses;
    classes.root = "question-root";
    if (options.question.getType() === "checkbox") {
      classes.root += " question-root-checkboxes";
    }
    if (options.question.getType() === "single-line-input") {
      classes.root += " question-root-text";
    }
  });
  creator.survey.onUpdatePageCssClasses.add(function (_, options) {
    const classes = options.cssClasses;
    classes.root = "page-root";
    if (options.page.isQuestion) {
      classes.root += " page-active";
    }
  });

  useEffect(() => {
    creator.onShowingProperty.add((_, options) => {
      switch (options.obj.getType()) {
        case "survey":
          options.canShow =
            surveyPropertyViewList.indexOf(options.property.name) !== -1;
          break;
        case "page":
          options.canShow =
            pagePropertyViewList.indexOf(options.property.name) !== -1;
          break;
        case "radiogroup":
          options.canShow =
            radiogroupPropertyViewList.indexOf(options.property.name) !== -1;
          break;
        case "checkbox":
          options.canShow =
            checkBoxPropertyViewList.indexOf(options.property.name) !== -1;
          break;
        case "file":
          options.canShow =
            filePropertyViewList.indexOf(options.property.name) !== -1;
          break;
        case "text":
          options.canShow =
            textPropertyViewList.indexOf(options.property.name) !== -1;
          break;
        case "comment":
          options.canShow =
            commentPropertyViewList.indexOf(options.property.name) !== -1;
          break;
        case "country":
          options.canShow =
            countryPropertyViewList.indexOf(options.property.name) !== -1;
          break;
      }
    });
  }, [creator.onShowingProperty]);

  // Creator Request Departments
  const requestCreatorDepartments = [
    "FSD AML",
    "FSD MC",
    "Regulatory Support",
    "IT Operators",
    "Legal",
    "Innovation",
  ];

  return {
    creatorOptions,
    customCss,
    saveButtonId: "svc-save-form",
    requestCreatorDepartments,
  };
};
