"use client";
import React, { useEffect } from "react";

// Survey js
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";

// Survey js styles
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import "@/styles/survey.css";

// API Hooks
import { useSaveRequestFormMutation } from "@/redux/services/requests/save-request-form";

// Form Creator hook
import { useSurveyCreator } from "@/lib/hooks/useSurveyCreator";

// Components
import {
  toastError,
  toastLoading,
  toastSuccess,
} from "@/pattern/common/atoms/toast";

// Helpers
import LocalStore from "@/lib/helpers/session-manager.helpers";

interface ISaveSurveyJson {
  json: Record<string, string>;
  saveNo: any;
  callback: any;
}

const CreateRequestApprovalForm = () => {
  const [saveRequestForm, { isLoading }] = useSaveRequestFormMutation();

  // Get Initial survey JSON
  const initialSurvey = LocalStore?.getItem({ key: "survey-json" });

  // Function that saves survey JSON
  const saveSurveyJson = ({ json, saveNo, callback }: ISaveSurveyJson) => {
    const requestKey = LocalStore.getItem({
      key: "request-id",
    });

    LocalStore?.setItem({
      key: "survey-json",
      value: JSON.stringify(json),
    }); // Update Survey JSON before hitting Endpoint

    saveRequestForm({ id: requestKey, json })
      .unwrap()
      .then(() => {
        toastSuccess("Created Request Form");
        callback(saveNo, true);

        LocalStore?.setItem({
          key: "survey-json",
          value: JSON.stringify(json),
        }); // Reset Local Storage after Submission
      })
      .catch(() => {
        toastError("Failed to save Request form");
        callback(saveNo, false);
      });
  };

  // Get Survey Creator Instance
  const { creatorOptions } = useSurveyCreator();

  // instantiate Survey Creator Instance
  const creator = new SurveyCreator(creatorOptions);

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

  // ----------------------------------- //
  creator.survey.title = "Request Form";

  creator.toolbox.forceCompact = false;

  creator.text = initialSurvey;

  console.log("CREATOR JSON: ", creator.text);

  creator.saveSurveyFunc = (saveNo, callback) => {
    saveSurveyJson({
      json: creator.JSON,
      saveNo,
      callback,
    });
  };

  // ----------------------------------- //

  useEffect(() => {
    isLoading && toastLoading("Saving Created Form...");
  }, [isLoading]);

  // useEffect(() => {
  //   Serializer.addProperty("survey", {
  //     name: "ratingEnabled",
  //     type: "boolean",
  //     category: "general",
  //     displayName: "Enable Rating for Approval Form",
  //   });
  //   Serializer.addProperty("survey", {
  //     name: "ratingScale",
  //     displayName: "Select a rating scale",
  //     type: "dropdown",
  //     category: "general",
  //     default: 5,
  //     choices: [5],
  //     dependsOn: ["ratingEnabled"],
  //     visibleIf: function (obj) {
  //       return obj.ratingEnabled;
  //     },
  //   });
  //   Serializer.addProperty("question", {
  //     name: "AssignToDepartments",
  //     type: "multiplevalues",
  //     choices: requestCreatorDepartments?.map((department) => department),
  //     category: "general",
  //   });
  //   Serializer.addProperty("page", {
  //     name: "AssignToDepartments",
  //     type: "multiplevalues",
  //     choices: requestCreatorDepartments?.map((department) => department),
  //     category: "general",
  //   });
  //   // Serializer.addProperty("page", {
  //   //   name: "sectionWeightage",
  //   //   type: "number",
  //   //   category: "general",
  //   //   visibleIf: function (obj) {
  //   //     return obj.survey.ratingEnabled;
  //   //   },
  //   // });
  //   Serializer.addProperty("question", {
  //     name: "selectMediaType:dropdown",
  //     default: documentChoice,
  //     choices: [documentChoice, videoChoice],
  //     category: "general",
  //   });
  //   // Serializer.addProperty("survey", {
  //   //   name: "commentMandatory",
  //   //   displayName: "Is rating comment required",
  //   //   type: "boolean",
  //   //   category: "general",
  //   //   dependsOn: ["ratingEnabled"],
  //   //   visibleIf: function (obj) {
  //   //     return obj.ratingEnabled;
  //   //   },
  //   // });
  //   // Serializer.addProperty("question", {
  //   //   name: "questionWeightage",
  //   //   type: "number",
  //   //   category: "general",
  //   //   visibleIf: function (obj) {
  //   //     return obj.survey.ratingEnabled;
  //   //   },
  //   // });
  // }, [requestCreatorDepartments]);

  return (
    <div className='min-w-full h-full flex items-start justify-center overflow-x-auto'>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
};

export default CreateRequestApprovalForm;
