// @ts-nocheck
import { createTheme } from "@mui/material/styles";
import { typography } from "@mui/system";

const secondary_dark = "#0DC298";
const secondary_main = "#00E6B2";
const secondary_light = "#B7FFEE";
const tertiary_dark = "#0081B6";
const tertiary_main = "#17A5DF";
const tertiary_light = "#ACE7FF";

const Palette = {
  primary: {
    dark2: "#0E1E2E",
    dark: "#112B45",
    main: "#023365",
    light: "#1E65AE",
    light2: "#4498EE",
    light3: "#EEF6FF"
  },
  success: {
    dark2: "#007B4F",
    dark: "#00986C",
    main: "#00BA6C",
    light: "#00DF74",
    light2: "#00FFB2",
    light3: "#C2FFE2"
  },
  error: {
    dark2: "#AD0C2A",
    dark: "#D62C4B",
    main: "#E24763",
    light: "#E26C81",
    light2: "#F6AEBB",
    light3: "#FFEAEE"
  },
  alternate: {
    dark2: "#8F4F8B",
    dark: "#BD62B4",
    main: "#DD85C3",
    light: "#E6A6D3",
    light2: "#FDD9F2",
    light3: "#FEECF8"
  },
  warning: {
    dark2: "#CF711A",
    dark: "#DFA720",
    main: "#FBC748",
    light: "#FFD879",
    light2: "#FEE19B",
    light3: "#FFF1D0"
  },
  background: {
    paper: "#FAFCFD",
    default: "#FFFFFF"
  },
  neutral: {
    800: "#293036",
    700: "#46525C",
    600: "#677684",
    500: "#CBD5E0",
    400: "#E2E8F0",
    300: "#F0F4F9",
    200: "#F7FAFC",
    100: "#FBFCFE",
    50: "#FFFFFF",
    components: {
      shadow: "#0E1E2E",
      disabled: "#B4B9BE"
    }
  },
  text: {
    primary: "#023365",
    success: "#0DC298",
    dark: "#293036",
    disabled: "#B4B9BE",
    red: "#E24763",
    white: "#FFFFFF",
    lightGrey: "#B4B9BE",
    grey: "#6D7781",
    secondary: secondary_main,
    tertiary: tertiary_main
  },
  // @ts-nocheck
  secondary: {
    dark: secondary_dark,
    main: secondary_main,
    light: secondary_light
  },
  // @ts-nocheck
  tertiary: {
    dark: tertiary_dark,
    main: tertiary_main,
    light: tertiary_light
  },
  gradients: {
    gradientA: "linear-gradient(180deg, #00E6B2 0%, #023365 100%)",
    gradientB: "linear-gradient(180deg, #0093A2 0%, #00E6B2 100%)",
    gradientC: "linear-gradient(135deg, #023365 0%, #1E65AE 100%)",
    gradientD: "linear-gradient(180deg, #023365 100% , #00E6B2 0%)",
    gradientE: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%)",
    gradientF:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(68, 152, 238, 0.2) 100%);",
    gradientF30:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(68, 152, 238, 0.06) 100%);"
  }
};

const ThemeFonts = {
  screenxl: {
    h1: 56,
    h2: 38,
    h3: 32,
    h4: 28,
    h5: 24,
    h6: 20,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 15,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 20,
    inputLabel: 12,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 20,
    chip: 16,
    tag: 12
  },
  screenlg: {
    h1: 54,
    h2: 34,
    h3: 30,
    h4: 26,
    h5: 22,
    h6: 18,
    subtitle1: 20,
    subtitle2: 16,
    body1: 18,
    body2: 16,
    caption: 15,
    overline: 13,
    numericText: 16,
    button: 16,
    buttonsm: 14,
    buttonlg: 18,
    inputLabel: 12,
    inputText: 16,
    helperText: 12,
    tooltip: 14,
    avatarLetter: 18,
    chip: 16,
    tag: 12
  },
  screenmd: {
    h1: 48,
    h2: 28,
    h3: 24,
    h4: 22,
    h5: 20,
    h6: 18,
    subtitle1: 18,
    subtitle2: 15,
    body1: 17,
    body2: 16,
    caption: 14,
    overline: 13,
    numericText: 15,
    button: 15,
    buttonsm: 13,
    buttonlg: 18,
    inputLabel: 12,
    inputText: 15,
    helperText: 11,
    tooltip: 13,
    avatarLetter: 16,
    chip: 14,
    tag: 12
  },
  screensm: {
    h1: 38,
    h2: 23,
    h3: 21,
    h4: 20,
    h5: 19,
    h6: 18,
    subtitle1: 17,
    subtitle2: 14,
    body1: 16,
    body2: 14,
    caption: 12,
    overline: 12,
    numericText: 14,
    button: 14,
    buttonsm: 13,
    buttonlg: 16,
    inputLabel: 12,
    inputText: 14,
    helperText: 11,
    tooltip: 12,
    avatarLetter: 16,
    chip: 14,
    tag: 12
  }
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 360,
    md: 960,
    lg: 1280,
    xl: 1600
  }
};

const theme = createTheme({
  spacing: 8,
  breakpoints,
  palette: {
    primary: {
      dark2: Palette.primary.dark2,
      dark: Palette.primary.dark,
      main: Palette.primary.main,
      light: Palette.primary.light,
      light2: Palette.primary.light2,
      light3: Palette.primary.light3
    },
    success: {
      dark2: Palette.success.dark2,
      dark: Palette.success.dark,
      main: Palette.success.main,
      light: Palette.success.light,
      light2: Palette.success.light2,
      light3: Palette.success.light3
    },
    error: {
      dark2: Palette.error.dark2,
      dark: Palette.error.dark,
      main: Palette.error.main,
      light: Palette.error.light,
      light2: Palette.error.light2,
      light3: Palette.error.light3
    },
    alternate: {
      dark2: Palette.alternate.dark2,
      dark: Palette.alternate.dark,
      main: Palette.alternate.main,
      light: Palette.alternate.light,
      light2: Palette.alternate.light2,
      light3: Palette.alternate.light3
    },
    warning: {
      dark2: Palette.warning.dark2,
      main: Palette.warning.main,
      dark: Palette.warning.dark,
      light: Palette.warning.light,
      light2: Palette.warning.light2,
      light3: Palette.warning.light3
    },
    background: {
      paper: Palette.background.paper,
      default: Palette.background.default
    },
    neutral: {
      grey8: Palette.neutral[800],
      grey7: Palette.neutral[700],
      grey6: Palette.neutral[600],
      grey5: Palette.neutral[500],
      grey4: Palette.neutral[400],
      grey3: Palette.neutral[300],
      grey2: Palette.neutral[200],
      grey1: Palette.neutral[100],
      white: Palette.neutral[50],
      components: {
        shadow: Palette.neutral.components.shadow,
        disabled: Palette.neutral.components.disabled
      }
    },
    text: {
      primary: Palette.text.primary,
      success: Palette.text.success,
      dark: Palette.text.dark,
      disabled: Palette.text.disabled,
      red: Palette.text.red,
      white: Palette.text.white,
      lightGrey: Palette.text.lightGrey,
      grey: Palette.text.grey,
      secondary: Palette.text.secondary,
      tertiary: Palette.text.tertiary
    },
    gradients: {
      gradientA: Palette.gradients.gradientA,
      gradientB: Palette.gradients.gradientB,
      gradientC: Palette.gradients.gradientC,
      gradientD: Palette.gradients.gradientD,
      gradientE: Palette.gradients.gradientE,
      gradientF: Palette.gradients.gradientF,
      gradientF30: Palette.gradients.gradientF30
    },
    secondary: {
      light: Palette.secondary.light,
      main: Palette.secondary.main,
      dark: Palette.secondary.dark
    },
    tertiary: {
      light: Palette.tertiary.light,
      main: Palette.tertiary.main,
      dark: Palette.tertiary.dark
    }
  },
  typography: {
    fontFamily: "IBM Plex Sans",
    h1: {
      fontSize: ThemeFonts.screenxl.h1 + "px",
      fontStyle: "normal",
      fontWeight: "200",
      lineHeight: "73px",
      letterSpacing: "0",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h1 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h1 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h1 + "px"
      }
    },
    h2: {
      fontSize: ThemeFonts.screenxl.h2 + "px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "120%",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h2 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h2 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h2 + "px"
      }
    },
    h3: {
      fontSize: ThemeFonts.screenxl.h3 + "px",
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h3 + "px",
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h3 + "px",
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h3 + "px",
        fontWeight: "500"
      }
    },
    h4: {
      fontSize: ThemeFonts.screenxl.h4 + "px",
      fontWeight: "600",
      lineHeight: "120%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h4 + "px",
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h4 + "px",
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h4 + "px",
        fontWeight: "500"
      }
    },
    h5: {
      fontSize: ThemeFonts.screenxl.h5 + "px",
      fontWeight: "500",
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h5 + "px",
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h5 + "px",
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h5 + "px",
        fontWeight: "500"
      }
    },
    h6: {
      fontSize: ThemeFonts.screenxl.h6 + "px",
      fontWeight: "500",
      lineHeight: "140%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h6 + "px",
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h6 + "px",
        fontWeight: "500"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h6 + "px",
        fontWeight: "500"
      }
    },
    subtitle1: {
      fontSize: ThemeFonts.screenxl.subtitle1 + "px",
      fontWeight: "300",
      lineHeight: "120%",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle1 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle1 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle1 + "px"
      }
    },
    subtitle2: {
      fontSize: ThemeFonts.screenxl.subtitle2 + "px",
      fontWeight: "500",
      lineHeight: "150%",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.subtitle2 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.subtitle2 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.subtitle2 + "px"
      }
    },
    body1: {
      fontSize: ThemeFonts.screenxl.body1 + "px",
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.body1 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body1 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body1 + "px"
      }
    },
    body2: {
      fontSize: ThemeFonts.screenxl.body2 + "px",
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.body2 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body2 + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body2 + "px"
      }
    },
    caption: {
      lineHeight: "144%",
      fontSize: ThemeFonts.screenmd.caption + "px",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.caption + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.caption + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.caption + "px"
      }
    },
    overline: {
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "inherit",
      letterSpacing: "0.01em",
      fontSize: ThemeFonts.screenxl.overline + "px",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + "px"
      }
    },
    button: {
      lineHeight: "120%",
      fontWeight: "normal",
      textTransform: "none",
      fontSize: ThemeFonts.screenxl.overline + "px",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.overline + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.overline + "px"
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.overline + "px"
      }
    }
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: Palette.background.default,
          borderRadius: "8px!important",
          padding: "24px",
          borderTop: "none!important",
          margin: "0px!important",
          position: "unset",
          transition: "all .3s ease-out",
          boxShadow:
            "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)",
          "&:hover": {
            boxShadow:
              "0px 36px 65px rgba(106, 167, 197, 0.16), 0px 18.225px 28.3359px rgba(106, 167, 197, 0.12), 0px 7.2px 10.5625px rgba(106, 167, 197, 0.08), 0px 1.575px 3.75781px rgba(106, 167, 197, 0.03)"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            padding: "24px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            padding: "8px",
            ".MuiAccordionSummary-content": {
              display: "block"
            }
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            padding: "8px",
            ".MuiAccordionSummary-content": {
              display: "block"
            }
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: "1px solid " + Palette.neutral[400]
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "24px!important",
          "&.MuiSvgIcon-colorSuccess": {
            fill: Palette.success.dark + "!important"
          }
        },
        fontSizeLarge: {
          fontSize: "36px !important"
        },
        fontSizeSmall: {
          fontSize: "16px !important"
        },
        colorSecondary: {
          fill: Palette.text.lightGrey + "!important"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          wordWrap: "break-word"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          textTransform: "capitalize",
          height: "32px",
          borderRadius: "24px",
          letterSpacing: "0.27px",
          fontSize: ThemeFonts.screenxl.button + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.button + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.button + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.button + "px"
          },
          "&.buttonLink": {
            paddingLeft: "0",
            paddingRight: "0",
            backgroundColor: "transparent",
            border: "1px solid transparent",
            boxShadow: "none!important",
            color: Palette.primary.light2,
            "&:hover": {
              backgroundColor: "transparent",
              border: "1px solid transparent",
              color: Palette.primary.light
            },
            "&:focus, &:active": {
              backgroundColor: "transparent",
              border: "1px solid transparent",
              color: Palette.primary.main
            },
            "&:disabled": {
              backgroundColor: "transparent",
              border: "1px solid transparent",
              color: Palette.primary.light2,
              opacity: "50%"
            }
          }
        },
        sizeLarge: {
          height: "40px",
          fontSize: ThemeFonts.screenxl.buttonlg + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonlg + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonlg + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonlg + "px"
          }
        },
        sizeSmall: {
          height: "28px",
          padding: "4px 24px",
          fontSize: ThemeFonts.screenxl.buttonsm + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonsm + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonsm + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonsm + "px"
          }
        },
        containedPrimary: {
          textTransform: "none",
          backgroundColor: Palette.primary.light2,
          color: Palette.text.white,
          "&:hover": {
            backgroundColor: Palette.secondary.main
          },
          "&:focus, &:active": {
            backgroundColor: Palette.secondary.dark
          },
          "&:disabled": {
            backgroundColor: Palette.secondary.dark,
            color: Palette.text.white,
            opacity: "50%"
          },
          "&.gradientButton": {
            backdropFilter: "blur(5px)",
            background: Palette.gradients.gradientF30,
            color: Palette.text.secondary,
            borderColor: Palette.neutral[50] + "4d",
            transition: "all 300ms ease",
            boxShadow: "none!important",
            filter: "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1))",
            "&:hover, &:focus, &:active": {
              background: Palette.gradients.gradientF,
              borderColor: Palette.neutral[50] + "!important",
              boxShadow: "none!important",
              filter:
                "drop-shadow(0px 8px 17px rgba(106, 167, 197, 0.15)) drop-shadow(0px 1.6px 2.7625px rgba(106, 167, 197, 0.075))"
            },
            "&:focus, &:active": {
              filter:
                "drop-shadow(0px 36px 65px rgba(0, 0, 0, 0.16)) drop-shadow(0px 18.225px 28.3359px rgba(0, 0, 0, 0.12)) drop-shadow(0px 7.2px 10.5625px rgba(0, 0, 0, 0.08)) drop-shadow(0px 1.575px 3.75781px rgba(0, 0, 0, 0.03))!important"
            },
            "&:disabled": {
              opacity: "30%"
            }
          }
        },
        containedSecondary: {
          textTransform: "none",
          backgroundColor: Palette.tertiary.main,
          color: Palette.text.white,
          "&:hover": {
            backgroundColor: Palette.tertiary.dark
          },
          "&:focus, &:active": {
            backgroundColor: Palette.primary.light
          },
          "&:disabled": {
            backgroundColor: Palette.tertiary.main,
            color: Palette.text.white,
            opacity: "50%"
          },
          "&.gradientButton": {
            backdropFilter: "blur(5px)",
            background: Palette.gradients.gradientF30,
            color: Palette.text.secondary,
            borderColor: Palette.neutral[50] + "4d",
            transition: "all 300ms ease",
            boxShadow: "none!important",
            filter: "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1))",
            "&:hover, &:focus, &:active": {
              background: Palette.gradients.gradientF,
              borderColor: Palette.neutral[50] + "!important",
              boxShadow: "none!important",
              filter:
                "drop-shadow(0px 8px 17px rgba(106, 167, 197, 0.15)) drop-shadow(0px 1.6px 2.7625px rgba(106, 167, 197, 0.075))"
            },
            "&:focus, &:active": {
              filter:
                "drop-shadow(0px 36px 65px rgba(0, 0, 0, 0.16)) drop-shadow(0px 18.225px 28.3359px rgba(0, 0, 0, 0.12)) drop-shadow(0px 7.2px 10.5625px rgba(0, 0, 0, 0.08)) drop-shadow(0px 1.575px 3.75781px rgba(0, 0, 0, 0.03))!important"
            },
            "&:disabled": {
              opacity: "30%"
            }
          }
        },
        textPrimary: {
          backgroundColor: Palette.neutral[50],
          border: "1px solid transparent",
          color: Palette.primary.light2,
          boxShadow:
            "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)",
          "&:hover": {
            backgroundColor: Palette.neutral[50],
            border: "1px solid " + Palette.neutral[40] + "!important",
            color: Palette.primary.light2,
            boxShadow:
              "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)"
          },
          "&:focus, &:active": {
            backgroundColor: Palette.neutral[50],
            border: "1px solid " + Palette.neutral[40] + "!important",
            color: Palette.primary.light,
            boxShadow:
              "0px 10px 80px rgba(106, 167, 197, 0.1), 0px 5.0625px 34.875px rgba(106, 167, 197, 0.05), 0px 2px 13px rgba(106, 167, 197, 0.03), 0px 0.4375px 4.625px rgba(106, 167, 197, 0.02)"
          },
          "&:disabled": {
            backgroundColor: Palette.neutral[50],
            border: "1px solid " + Palette.neutral[50],
            color: Palette.primary.light2,
            opacity: "50%"
          }
        },
        outlinedPrimary: {
          border: "unset",
          backgroundColor: Palette.neutral[200],
          textTransform: "none",
          color: Palette.primary.main,
          "&:hover": {
            border: "unset",
            backgroundColor: Palette.primary.light3
          }
        },
        outlined: {
          textTransform: "none"
        }
      },
      variants: [
        {
          props: { variant: "contained", color: "error" },
          style: {
            backgroundColor: Palette.error.main,
            border: "1px solid " + Palette.error.main,
            color: Palette.text.white,
            "&:hover": {
              backgroundColor: Palette.error.dark2,
              border: "1px solid " + Palette.error.dark2,
              color: Palette.text.white
            },
            "&:focus, &:active": {
              backgroundColor: Palette.error.dark,
              border: "1px solid " + Palette.error.dark,
              color: Palette.text.white,
              boxShadow: "none"
            },
            "&:disabled": {
              backgroundColor: Palette.error.main,
              border: "1px solid " + Palette.error.main,
              color: Palette.text.white,
              opacity: "30%"
            }
          }
        }
      ]
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          height: "32px",
          width: "64px",
          borderRadius: "24px",
          display: "flex",
          justifyContent: "center",
          fontSize: ThemeFonts.screenxl.button + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.button + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.button + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.button + "px"
          },
          //Autocomplete textfield
          "&.MuiAutocomplete-popupIndicator, &.MuiAutocomplete-clearIndicator": {
            height: "auto"
          },
          "&.iconButtonText": {
            width: "auto",
            display: "flex",
            alignContent: "center",
            paddingLeft: "28px",
            paddingRight: "28px"
          }
        },
        sizeSmall: {
          height: "28px",
          width: "64px",
          padding: "4px 24px",
          fontSize: ThemeFonts.screenxl.buttonsm + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonsm + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonsm + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonsm + "px"
          },
          svg: {
            fontSize: "16px!important"
          }
        },
        sizeLarge: {
          height: "40px",
          width: "72px",
          fontSize: ThemeFonts.screenxl.buttonlg + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.buttonlg + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.buttonlg + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.buttonlg + "px"
          },
          svg: {
            fontSize: "24px!important"
          }
        },
        //@ts-ignore
        colorPrimary: {
          backgroundColor: Palette.primary.light2,
          color: Palette.text.white,
          "&:hover": {
            backgroundColor: Palette.secondary.main
          },
          "&:focus, &:active": {
            backgroundColor: Palette.secondary.dark
          },
          "&:disabled": {
            backgroundColor: Palette.secondary.dark,
            color: Palette.text.white,
            opacity: "50%"
          }
        },
        colorSecondary: {
          backgroundColor: Palette.tertiary.main,
          color: Palette.text.white,
          "&:hover": {
            backgroundColor: Palette.tertiary.dark
          },
          "&:focus, &:active": {
            backgroundColor: Palette.primary.light
          },
          "&:disabled": {
            backgroundColor: Palette.tertiary.main,
            color: Palette.text.white,
            opacity: "50%"
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: "4px 5px",
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + "px!important"
          },
          ".Mui-disabled+.MuiSwitch-track": {
            opacity: "0.3!important"
          }
        },
        switchBase: {
          color: Palette.neutral[50] + "!important"
        },
        thumb: {
          boxShadow: "none"
        },
        track: {
          borderRadius: "48px",
          opacity: "initial!important",
          backgroundColor: Palette.neutral[600]
        },
        colorPrimary: {
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: Palette.secondary.main + "!important"
          }
        },
        colorSecondary: {
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: Palette.tertiary.main + "!important"
          }
        },
        sizeSmall: {
          padding: 0,
          "&+.MuiFormControlLabel-label": {
            marginLeft: 5
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + "px!important"
          },
          "&.Mui-disabled": {
            color: Palette.neutral[600] + "!important",
            opacity: "0.3"
          }
        },
        colorPrimary: {
          color: Palette.primary.light2,
          "&.Mui-checked": {
            color: Palette.primary.light2
          }
        },
        colorSecondary: {
          color: Palette.secondary.main,
          "&.Mui-checked": {
            color: Palette.secondary.main
          }
        }
      }
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          "&+.MuiFormControlLabel-label": {
            fontSize: ThemeFonts.screenxl.inputLabel + "px!important",
            display: "flex",
            alignItems: "center"
          },
          "&.Mui-disabled": {
            color: Palette.neutral[600] + "!important",
            opacity: "0.3"
          }
        },
        colorPrimary: {
          color: Palette.primary.light2,
          "&.Mui-checked": {
            color: Palette.primary.light2
          }
        },
        colorSecondary: {
          color: Palette.secondary.main,
          "&.Mui-checked": {
            color: Palette.secondary.main
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontSize: ThemeFonts.screenmd.caption + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.caption + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.caption + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.caption + "px"
          },
          padding: "0px 16px",
          minHeight: "54px",
          fontWeight: "normal",
          lineHeight: "144%",
          boxShadow: "none",
          ".MuiAlert-message": {
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            button: {
              margin: "0px 0px 0px 16px"
            },
            a: {
              color: "currentColor"
            }
          },
          ".MuiAlert-action": {
            padding: "0px",
            marginRight: "0px",
            alignItems: "center",
            svg: {
              fontSize: "0.9em",
              stroke: "currentColor"
            }
          },
          ".MuiAlert-icon": {
            alignItems: "center"
          },
          "&.MuiAlert-standardInfo": {
            backgroundColor: Palette.primary.light3 + "!important",
            color: Palette.primary.light + "!important",
            ".MuiAlert-icon": {
              color: Palette.primary.light + "!important"
            },

            filledInfo: {
              backgroundColor: Palette.primary.light3 + "!important",
              color: Palette.primary.light + "!important",
              ".MuiAlert-icon": {
                color: Palette.primary.light + "!important"
              }
            },
            filledSuccess: {
              backgroundColor: Palette.success.light3 + "!important",
              color: Palette.success.dark2 + "!important",
              ".MuiAlert-icon": {
                color: Palette.success.dark2 + "!important"
              }
            },
            filledError: {
              color: Palette.error.dark2 + "!important",
              backgroundColor: Palette.error.light3 + "!important",
              ".MuiAlert-icon": {
                color: Palette.error.dark2 + "!important"
              }
            },
            filledWarning: {
              color: Palette.warning.dark2 + "!important",
              backgroundColor: Palette.warning.light3 + "!important",
              ".MuiAlert-icon": {
                color: Palette.warning.dark2 + "!important"
              }
            }
          },
          "&.MuiAlert-standardSuccess": {
            backgroundColor: Palette.success.light3 + "!important",
            color: Palette.success.dark2 + "!important",
            ".MuiAlert-icon": {
              color: Palette.success.dark2 + "!important"
            }
          },
          "&.MuiAlert-standardError": {
            color: Palette.error.dark2 + "!important",
            backgroundColor: Palette.error.light3 + "!important",
            ".MuiAlert-icon": {
              color: Palette.error.dark2 + "!important"
            }
          },
          "&.MuiAlert-standardWarning": {
            color: Palette.warning.dark2 + "!important",
            backgroundColor: Palette.warning.light3 + "!important",
            ".MuiAlert-icon": {
              color: Palette.warning.dark2 + "!important"
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "4px 16px",
          borderRadius: "8px!important",
          textTransform: "uppercase",
          fontWeight: "500",
          lineHeight: "170%",
          letterSpacing: "0.02em",
          "&.sizeLarge": {
            height: "28px"
          },
          ".MuiChip-deleteIcon": {
            fontSize: "1.25em!important",
            color: Palette.text.primary,
            paddingLeft: "10px",
            marginRight: "0px",
            boxSizing: "initial"
          },
          ".MuiChip-label": {
            padding: "0px"
          },
          fontSize: ThemeFonts.screenxl.tag + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.tag + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.tag + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.tag + "px"
          },
          "&.tagInfo, &.MuiChip-filledDefault": {
            textTransform: "none",
            lineHeight: "140%",
            letterSpacing: "normal",
            fontWeight: "400",
            fontSize: ThemeFonts.screenxl.tooltip + "px",
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.tooltip + "px"
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.tooltip + "px"
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.tooltip + "px"
            }
          },
          "&.tagInfo": {
            padding: "8px",
            minWidth: "fit-content!important"
          }
        },
        //@ts-ignore
        colorDefault: {
          borderRadius: "8px!important",
          backgroundColor: Palette.neutral[400],
          color: Palette.text.dark,
          height: 26,
          //FilterChipCSS
          "&.filterChip": {
            transition: "all 500ms ease",
            backgroundColor: Palette.primary.light3,
            border: "solid 1px" + Palette.primary.light,
            color: Palette.primary.light,
            padding: "5px 10px",
            borderRadius: "16px!important",
            height: 28,
            "&.MuiChip-sizeSmall": {
              height: 24,
              fontSize: ThemeFonts.screenxl.inputLabel + "px",
              [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                fontSize: ThemeFonts.screenlg.inputLabel + "px"
              },
              [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                fontSize: ThemeFonts.screenmd.inputLabel + "px"
              },
              [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                fontSize: ThemeFonts.screensm.inputLabel + "px"
              }
            },
            "&.sizeLarge": {
              height: 32
            },
            ".MuiChip-deleteIcon": {
              fontSize: "1.35em!important",
              color: Palette.primary.light,
              paddingLeft: 5,
              boxSizing: "initial"
            },
            "&.Mui-disabled": {
              backgroundColor: Palette.neutral[300] + "!important",
              border:
                "solid 1px" +
                Palette.neutral.components.disabled +
                "!important",
              color: Palette.neutral.components.disabled,
              opacity: 1,
              ".MuiChip-deleteIcon": {
                color: Palette.neutral.components.disabled + "!important",
                boxSizing: "initial"
              }
            }
          }
        },
        colorSuccess: {
          "&.MuiChip-filledSuccess:not(.tagInfo)": {
            fontSize: "9px",
            backgroundColor: Palette.success.light3,
            color: Palette.success.dark2
          },
          "&.tagInfo": {
            backgroundColor: Palette.success.main,
            color: Palette.text.white
          }
        },
        colorPrimary: {
          "&.MuiChip-filledPrimary:not(.tagInfo)": {
            backgroundColor: Palette.primary.light3,
            color: Palette.primary.main,
            fontSize: "9px"
          }
        },
        colorSecondary: {
          "&.MuiChip-filledSecondary:not(.tagInfo)": {
            backgroundColor: Palette.alternate.light3,
            color: Palette.alternate.dark2,
            fontSize: "9px"
          },
          "&.tagInfo": {
            backgroundColor: Palette.primary.light3,
            color: Palette.text.grey
          }
        },
        colorError: {
          "&.MuiChip-filledError:not(.tagInfo)": {
            backgroundColor: Palette.error.light3,
            fontSize: "9px",
            color: Palette.error.dark2
          }
        },
        colorInfo: {
          "&.MuiChip-filledInfo:not(.tagInfo)": {
            backgroundColor: Palette.neutral[300],
            color: Palette.text.grey,
            fontSize: "9px"
          }
        },
        colorWarning: {
          "&.MuiChip-filledWarning:not(.tagInfo)": {
            backgroundColor: Palette.warning.light3,
            color: Palette.warning.dark2,
            fontSize: "9px"
          }
        },
        sizeMedium: {
          height: "24px"
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: Palette.primary.dark,
          padding: "12px 16px",
          borderRadius: "8px",
          fontWeight: "400",
          textAlign: "center",
          lineHeight: "1.35",
          fontSize: ThemeFonts.screenxl.tooltip + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.tooltip + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.tooltip + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.tooltip + "px"
          },
          span: {
            color: Palette.primary.dark
          },
          p: {
            fontWeight: "600",
            fontSize: ThemeFonts.screenxl.tooltip + "px",
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.tooltip + "px"
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.tooltip + "px"
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.tooltip + "px"
            }
          }
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: ThemeFonts.screenxl.overline + "px",
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenlg.overline + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.overline + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.overline + "px"
          },
          transition: "all 1s ease-out",
          button: {
            position: "relative",
            top: "0.2em",
            padding: "0",
            background: "transparent",
            margin: "0",
            "&:hover": {
              color: Palette.primary.main,
              background: "transparent"
            }
          },
          a: {
            "&:hover": {
              color: Palette.primary.main,
              textDecoration: "none!important"
            }
          }
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          color: Palette.neutral[50],
          background: Palette.tertiary.main
        },
        colorSecondary: {
          color: Palette.neutral[50],
          background: Palette.secondary.dark
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: Palette.text.grey,
          "&.Mui-error": {
            color: Palette.error.dark2
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          height: "44px"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.solidTextfield": {
            margin: "0px",
            ".MuiOutlinedInput-root": {
              borderRadius: "16px!important",
              background: Palette.background.default,
              paddingRight: "14px!important"
            },
            ".MuiOutlinedInput-notchedOutline": {
              borderRadius: "16px!important",
              transition: "all .5s ease-out"
            },
            ".Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: Palette.neutral[400] + "!important"
            },
            ".Mui-disabled svg": {
              opacity: "50%"
            }
          },
          "&.titleTextfield": {
            margin: "0px",
            ".MuiOutlinedInput-root": {
              height: "50px"
            },
            ".MuiInputLabel-root:not(.MuiInputLabel-shrink), .MuiOutlinedInput-input": {
              fontWeight: "500",
              lineHeight: "140%",
              fontSize: ThemeFonts.screenxl.avatarLetter + "px",
              [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                fontSize: ThemeFonts.screenlg.avatarLetter + "px"
              },
              [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                fontSize: ThemeFonts.screenmd.avatarLetter + "px"
              },
              [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                fontSize: ThemeFonts.screensm.avatarLetter + "px"
              }
            },
            ".MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
              top: "-3px!important"
            }
          },
          "&.textfieldWhite": {
            ".MuiOutlinedInput-root": {
              "input, .MuiSelect-select,&.MuiAutocomplete-inputRoot": {
                color: Palette.text.lightGrey
              },
              "&.Mui-focused, &:hover": {
                "input, .MuiSelect-select,&.MuiAutocomplete-inputRoot": {
                  color: Palette.text.white
                }
              },
              ".MuiInputAdornment-positionEnd, .MuiTypography-root": {
                color: Palette.text.lightGrey
              },
              "&.Mui-error": {
                "input, .MuiSelect-select,&.MuiAutocomplete-inputRoot": {
                  color: Palette.error.light
                }
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: Palette.neutral[500]
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline , &:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: Palette.neutral[50] + "!important"
              },
              "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                borderColor: Palette.error.light + "!important"
              },
              "&.Mui-disabled": {
                "input, .MuiSelect-select,&.MuiAutocomplete-inputRoot": {
                  opacity: "30%"
                }
              },
              "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                borderColor: Palette.text.lightGrey + "!important",
                opacity: "30%"
              }
            },
            ".MuiFormLabel-root": {
              color: Palette.text.lightGrey + "!important",
              "&.Mui-focused": {
                color: Palette.text.white + "!important"
              },
              "&.Mui-error": {
                color: Palette.error.light + "!important"
              },
              "&.Mui-disabled": {
                color: Palette.text.lightGrey + "!important",
                opacity: "30%"
              }
            },
            ".MuiFormHelperText-root": {
              color: Palette.text.lightGrey,
              "&.Mui-focused": {
                color: Palette.text.white
              },
              "&.Mui-error": {
                color: Palette.error.light
              },
              "&.Mui-disabled": {
                opacity: "30%"
              }
            }
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "44px",
          //Autocomplete textfield
          "&.MuiAutocomplete-inputRoot": {
            padding: "0px 8px 0px 8px!important"
          }
        },
        multiline: {
          height: "auto"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: Palette.text.grey,
          fontSize: ThemeFonts.screenxl.inputText + "px",
          [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
            fontSize: ThemeFonts.screenlg.inputText + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: ThemeFonts.screenmd.inputText + "px"
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: ThemeFonts.screensm.inputText + "px"
          }
        },
        outlined: {
          top: "-6px!important",
          "&.MuiInputLabel-shrink": {
            top: "0px!important"
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px!important",
          position: "relative",
          "input, .MuiSelect-select,&.MuiAutocomplete-inputRoot": {
            padding: "10.5px 14px",
            color: Palette.text.dark,
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            fontSize: ThemeFonts.screenxl.inputText + "px",
            [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
              fontSize: ThemeFonts.screenlg.inputText + "px"
            },
            [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
              fontSize: ThemeFonts.screenmd.inputText + "px"
            },
            [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
              fontSize: ThemeFonts.screensm.inputText + "px"
            },
            img: {
              borderRadius: "100%",
              height: "20px",
              width: "20px",
              objectFit: "cover",
              marginRight: "10px",
              marginLeft: "5px"
            }
          },
          ".MuiInputAdornment-positionEnd, .MuiTypography-root": {
            color: Palette.neutral.components.disabled
          },
          "&.Mui-error": {
            "input, .MuiSelect-select,&.MuiAutocomplete-inputRoot": {
              color: Palette.error.dark2
            }
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.neutral[500]
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline , &:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.primary.light + "!important",
            borderWidth: 1
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.error.dark2 + "!important"
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.neutral.components.disabled + "!important"
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: Palette.text.grey + "!important",
          "&.Mui-error": {
            color: Palette.error.dark2 + "!important"
          },
          "&.Mui-disabled": {
            color: Palette.neutral.components.disabled + "!important"
          }
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "+ .MuiAutocomplete-popper": {
            "& .MuiAutocomplete-listbox, & .MuiAutocomplete-noOptions": {
              color: Palette.text.dark,
              img: {
                borderRadius: "100%",
                height: "20px",
                width: "20px",
                objectFit: "cover"
              },
              ".MuiAutocomplete-option.Mui-focused": {
                backgroundColor: Palette.neutral[400]
              },
              fontSize: ThemeFonts.screenxl.inputText + "px",
              [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                fontSize: ThemeFonts.screenlg.inputText + "px"
              },
              [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                fontSize: ThemeFonts.screenmd.inputText + "px"
              },
              [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                fontSize: ThemeFonts.screensm.inputText + "px"
              }
            }
          },
          ".MuiAutocomplete-endAdornment": {
            display: "flex",
            ".MuiButtonBase-root": {
              width: "auto",
              height: "auto"
            }
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "24px!important",
          borderRadius: "8px",
          backgroundColor: Palette.background.default,
          "&:not(.cardImageFlag, .cardImage) p": {
            marginTop: "8px"
          },
          "&.cardImage": {
            width: "181px",
            height: "230px",
            paddingLeft: "16px!important",
            paddingRight: "16px!important",
            paddingBottom: "18px!important",
            paddingTop: "0px!important",
            backdropFilter: "blur(5px)",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(247, 250, 252, 0.5) 100%)",
            border: "1px solid " + Palette.neutral[50],
            textAlign: "center",
            borderRadius: "20px",
            overflow: "visible",
            marginTop: "32px",
            ".MuiAvatar-root": {
              width: "140px",
              height: "140px",
              border: "none",
              background:
                "linear-gradient(180deg, #023365 -6.07%, #4498EE 103.47%);",
              filter:
                "drop-shadow(0px 8px 17px rgba(106, 167, 197, 0.15)) drop-shadow(0px 1.6px 2.7625px rgba(106, 167, 197, 0.075))",
              margin: "-32px auto 12px auto",
              img: {
                objectFit: "cover",
                width: "140px",
                height: "140px"
              }
            },
            ".iconBox": {
              padding: "11px 12px",
              borderRadius: "16px",
              backgroundColor: Palette.neutral[500] + "cc",
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              maxWidth: "138px",
              margin: "8px auto auto auto",
              border: "1px solid " + Palette.neutral[50],
              svg: {
                color: Palette.neutral[500],
                backgroundColor: Palette.neutral[50],
                borderRadius: "8px",
                padding: "3px"
              }
            },
            "&.cSmall": {
              width: "149px",
              height: "193px",
              marginTop: "28px",
              ".MuiAvatar-root": {
                width: "120px",
                height: "120px",
                margin: "-28px auto 8px auto",
                img: {
                  width: "120px",
                  height: "120px"
                }
              },
              ".cHeader": {
                fontSize: ThemeFonts.screenxl.h6 + "px",
                fontWeight: "500",
                lineHeight: "140%",
                fontStyle: "normal",
                [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                  fontSize: ThemeFonts.screenlg.h6 + "px",
                  fontWeight: "500"
                },
                [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                  fontSize: ThemeFonts.screenmd.h6 + "px",
                  fontWeight: "500"
                },
                [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                  fontSize: ThemeFonts.screensm.h6 + "px",
                  fontWeight: "500"
                }
              },
              ".cContent": {
                lineHeight: "120%",
                fontWeight: "normal",
                textTransform: "inherit",
                letterSpacing: "0.01em",
                fontSize: ThemeFonts.screenxl.overline + "px",
                [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                  fontSize: ThemeFonts.screenlg.overline + "px"
                },
                [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                  fontSize: ThemeFonts.screenmd.overline + "px"
                },
                [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                  fontSize: ThemeFonts.screensm.overline + "px"
                }
              },
              ".iconBox": {
                maxWidth: "112px",
                margin: "8px auto auto auto",
                svg: {
                  fontSize: "16px!important"
                }
              }
            },
            "&.cLarge": {
              width: "226px",
              height: "283px",
              marginTop: "42px",
              ".MuiAvatar-root": {
                width: "180px",
                height: "180px",
                margin: "-42px auto 10px auto",
                img: {
                  width: "180px",
                  height: "180px"
                }
              },
              ".cHeader": {
                fontSize: ThemeFonts.screenxl.h4 + "px",
                fontWeight: "600",
                lineHeight: "120%",
                fontStyle: "normal",
                [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                  fontSize: ThemeFonts.screenlg.h4 + "px",
                  fontWeight: "500"
                },
                [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                  fontSize: ThemeFonts.screenmd.h4 + "px",
                  fontWeight: "500"
                },
                [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                  fontSize: ThemeFonts.screensm.h4 + "px",
                  fontWeight: "500"
                }
              },
              ".cContent": {
                fontSize: ThemeFonts.screenxl.body2 + "px",
                fontWeight: "normal",
                lineHeight: "150%",
                [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                  fontSize: ThemeFonts.screenlg.body2 + "px"
                },
                [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                  fontSize: ThemeFonts.screenmd.body2 + "px"
                },
                [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                  fontSize: ThemeFonts.screensm.body2 + "px"
                }
              },
              ".iconBox": {
                maxWidth: "172px",
                //margin: "8px auto auto auto",
                svg: {
                  fontSize: "36px!important"
                }
              }
            }
          },
          "&.cardImageFlag": {
            maxWidth: "272px",
            paddingLeft: "16px!important",
            paddingRight: "16px!important",
            backdropFilter: "blur(10px)",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(247, 250, 252, 0.5) 100%);",
            border: "1px solid " + Palette.neutral[50],
            ".MuiAvatar-root": {
              width: "130px",
              height: "120px",
              borderRadius: "15px!important",
              border: "none"
            },
            h5: {
              paddingTop: "24px"
            },
            h6: {
              paddingBottom: "24px"
            },
            ".textBox": {
              padding: "12px",
              borderRadius: "8px",
              minHeight: "80px"
            }
          },
          "&.cardBlog": {
            padding: "0!important",
            boxShadow: "none!important",
            borderRadius: "0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            ".MuiCardMedia-root": {
              height: "170px"
            }
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          boxShadow: "none"
        },
        elevation1: {
          boxShadow:
            "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075);" //noPalletcolor
        },
        elevation2: {
          boxShadow:
            "0px 36px 65px rgba(106, 167, 197, 0.16), 0px 18.225px 28.3359px rgba(106, 167, 197, 0.12), 0px 7.2px 10.5625px rgba(106, 167, 197, 0.08), 0px 1.575px 3.75781px rgba(106, 167, 197, 0.03);" //noPalletcolor
        },
        elevation3: {
          boxShadow:
            "0px 143px 100px rgba(106, 167, 197, 0.18), 0px 84.1984px 52.16px rgba(106, 167, 197, 0.15), 0px 43.2432px 24.48px rgba(106, 167, 197, 0.11), 0px 17.3888px 10.72px rgba(106, 167, 197, 0.07), 0px 3.8896px 4.64px rgba(106, 167, 197, 0.03);" //noPalletcolor
        },
        elevation4: {
          boxShadow:
            "20px 0px 80px rgba(106, 167, 197, 0.1), 7.7037px 0px 25.4815px rgba(106, 167, 197, 0.0607407), 1.62963px 0px 6.51852px rgba(106, 167, 197, 0.0392593)" //noPalletcolor
        },
        root: {
          "&.MuiMenu-paper": {
            "& .MuiMenu-list, & .MuiMenuItem-root": {
              color: Palette.text.dark,
              img: {
                borderRadius: "100%",
                height: "20px",
                width: "20px",
                objectFit: "cover",
                marginRight: "10px"
              },
              ".Mui-selected": {
                backgroundColor: Palette.neutral[400]
              },
              fontSize: ThemeFonts.screenxl.inputText + "px",
              [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
                fontSize: ThemeFonts.screenlg.inputText + "px"
              },
              [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
                fontSize: ThemeFonts.screenmd.inputText + "px"
              },
              [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
                fontSize: ThemeFonts.screensm.inputText + "px"
              }
            }
          },
          "&.MuiMenu-paper, &.MuiAutocomplete-paper": {
            boxShadow:
              "0px 8px 17px rgb(106 167 197 / 15%), 0px 1.6px 2.7625px rgb(106 167 197 / 8%)",
            backgroundColor: Palette.background.default + "!important"
          }
        }
      }
    },
    MuiModal: {
      styleOverrides: {
        root: {
          ".MuiBackdrop-root:not(.MuiBackdrop-invisible)": {
            backgroundColor: Palette.primary.dark2 + "64!important"
          },
          "&.modalBoxContent": {
            ".modalContainer": {
              borderRadius: 0,
              width: "506px",
              padding: "40px",
              textAlign: "center",
              ".iconBox": {
                ".closeButton": {
                  float: "right",
                  marginBottom: 40
                }
              },
              img: {
                marginTop: 32,
                marginBottom: 72
              },
              ".modalHeader": {
                padding: 0
              }
            }
          },
          ".modalContainer": {
            // position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "775px",
            minHeight: "233px",
            backgroundColor: Palette.background.default,
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            ".modalHeader": {
              padding: 40,
              ".closeButton": {
                position: "absolute",
                right: 25,
                top: 25
              }
            },
            ".dividerHeader": {
              margin: "32px 0"
            },
            ".modalFooter": {
              padding: "32px 40px",
              display: "flex",
              justifyContent: "end",
              backgroundColor: Palette.background.paper,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
              button: {
                marginLeft: 16
              }
            }
          }
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          textAlign: "left",
          backgroundColor: Palette.background.default
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: Palette.neutral[400],
          fontWeight: "500",
          textAlign: "left",
          fontSize: "14px",
          header: Palette.primary.light,
          lineHeight: "120%",
          height: "45px!important"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "120%",
          paddingLeft: "24px",
          verticalAlign: "middle",
          paddingRight: "24px"
        },
        body: {
          height: "64px",
          color: Palette.neutral[600],
          borderBottom: "none",
          ".MuiChip-root": {
            minWidth: "74px",
            textalign: "center",
            alignItems: "center"
          },
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px!important",
          lineHeight: "120%",
          letterSpacing: "0.0015em"
        },
        head: {
          borderBottom: "none",
          height: "45px",
          color: Palette.text.primary
        }
      }
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          "&.groupChoice": {
            justifyContent: "center"
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            fontSize: "40px!important"
          },
          width: "46px",
          height: "46px",
          background: Palette.primary.light,
          border: "2px solid " + Palette.success.main,
          "&.small": {
            width: "36px",
            height: "36px"
          },
          "&.large": {
            width: "56px",
            height: "56px"
          }
        }
      }
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          background: Palette.neutral[400],
          "&:not(.MuiSkeleton-circular)": {
            borderRadius: 2
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&:not(.Mui-selected, .Mui-disabled)": {
            color: Palette.neutral[600]
          }
        }
      }
    }
  }
});

export default theme;