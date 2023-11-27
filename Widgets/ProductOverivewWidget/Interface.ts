import React from "react";

interface WindowSettings {
  uuid: string;
  repeatAPIKey: string;

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
}
