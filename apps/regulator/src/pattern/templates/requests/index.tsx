"use client";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import { Serializer } from "survey-core";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true,
  questionTypes: [
    "text",
    "comment",
    "checkbox",
    "radiogroup",
    "dropdown",
    "file",
  ],
};

//remove a property from the page object. You can't set it in JSON as well
Serializer.removeProperty("panelbase", "visibleIf");
//remove a property from the base question class and as result from all questions
Serializer.removeProperty("question", "visibleIf");

const SurveyCreatorWidget = () => {
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

  // Enable the compact display mode
  creator.toolbox.forceCompact = true;

  // Change the title of the Text question type
  creator.toolbox.getItemByName("text").title = "Single Input";

  // Change the title of the Comment question type
  creator.toolbox.getItemByName("comment").title = "Comment";

  // Change the icon of the Checkbox question type
  creator.toolbox.getItemByName("checkbox").iconName = "icon-checked";

  creator.onShowingProperty.add(function (sender, options) {
    if (options.obj.getType() == "survey") {
      options.canShow = options.property.name == "title";
    }
  });

  //It will re-create creator survey, select survey object in property grid again,
  //and as result apply onShowingProperty event
  //In real application you can set your JSON from database here or use creator.text property
  creator.JSON = {};

  return <SurveyCreatorComponent creator={creator} />;
};

export default SurveyCreatorWidget;
