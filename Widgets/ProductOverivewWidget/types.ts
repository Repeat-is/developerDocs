import React from "react";

type ProductOverviewTypes = {
  // Required
  uuid: string;
  repeatAPIKey: string;

  // Optional
  repeatColorPrimary?: string;
  repeatBorderRadius?: number | string;
  showIntervalSettings?: boolean;
  repeatFontFamily?: string;
  repeatButtonStyle?: React.CSSProperties;
  repeatFontSize?: number;
  repeatSearchBar?: boolean;
  repeatMaxWidth?: number;
  repeatColumns?: number;
  repeatProductOrdering?:
    | "price"
    | "title"
    | "created"
    | "-price"
    | "-title"
    | "-created";
};
