"use client";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import { Serializer, StylesManager } from "survey-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
// import { themeJSON } from "@/lib/constants/theme_json";
import "@/styles/survey.css";
import { useSaveRequestFormMutation } from "@/redux/services/requests/save-request-form";
import LocalStore from "@/lib/helpers/session-manager.helpers";
import Loading from "@/app/(appPages)/management/loading";
import Hidden from "@/pattern/common/atoms/hidden";
import { toastError, toastSuccess } from "@/pattern/common/atoms/toast";


interface ISaveSurveyJson {
  json: Record<string, string>;
  saveNo: any;
  callback: any;
}

const creatorOptions = {
  isAutoSave: false,
  showLogicTab: false,
  showJSONEditorTab: false,
  showThemeTab: true,
  haveCommercialLicense: true
};

//remove a property from the page object. You can't set it in JSON as well
Serializer.removeProperty("panelbase", "visibleIf");

//remove a property from the base question class and as result from all questions
Serializer.removeProperty("question", "visibleIf");

// Hide some properties of the itemvalue object
// Design itemvalue[] property editor
// Hide visbileIf, enableIf and text properties
Serializer.findProperty("itemvalue", "visibleIf").visible = false;
Serializer.findProperty("itemvalue", "enableIf").visible = false;
Serializer.findProperty("itemvalue", "text").visible = false;

const CreateRequestFormTemp = () => {
  const [saveRequestForm, { isLoading }] = useSaveRequestFormMutation();

  const saveSurveyJson = ({ json, saveNo, callback }: ISaveSurveyJson) => {
    const requestKey = LocalStore.getItem({
      key: "request-id",
    });
    saveRequestForm({ id: requestKey, json })
      .unwrap()
      .then(() => {
        toastSuccess("Created Request Form");
        callback(saveNo, true);
      })
      .catch(() => {
        toastError("Failed to save Request form");
        callback(saveNo, false);
      });
  };
  const creator = new SurveyCreator(creatorOptions);

  // Change toolbox category
  creator.toolbox.changeCategories([
    {
      name: "text",
      category: "default",
    },
    {
      name: "comment",
      category: "default",
    },
    {
      name: "checkbox",
      category: "default",
    },
    {
      name: "radiogroup",
      category: "default",
    },
    {
      name: "dropdown",
      category: "default",
    },
    {
      name: "file",
      category: "default",
    },
  ]);

  // Disable the compact display mode
  creator.toolbox.forceCompact = false;

  // Change the title of the Text question type
  creator.toolbox.getItemByName("text").title = "Single Input";

  // Change the title of the Comment question type
  creator.toolbox.getItemByName("comment").title = "Comment";

  // Change the icon of the Checkbox question type
  creator.toolbox.getItemByName("checkbox").iconName = "icon-checked";

  console.log("CREATOR TEXT: ", typeof creator.text);

  // Get Initial survey JSON
  const loc = LocalStore?.getItem({ key: "survey-json" });
  console.log("LOCAL STORKJ: ", loc);
  console.log("LOCAL STORKJ: ", typeof loc);

  creator.text = loc;

  creator.saveSurveyFunc = (saveNo, callback) => {
    saveSurveyJson({
      json: creator.JSON,
      saveNo,
      callback,
    });
  };

  StylesManager.applyTheme("defaultV2");

  return (
    <div className='relative'>
      <SurveyCreatorComponent creator={creator} />
      <Hidden visible={isLoading ? true : false}>
        <Loading />
      </Hidden>
    </div>
  );
};

export default CreateRequestFormTemp;
