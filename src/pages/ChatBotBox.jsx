import * as React from "react";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import ChatBot from 'react-simple-chatbot';
import SearchGlosary from '../components/SearchGlosary/SearchGlosary';
import headKaiImg from '../content/images/kai-head.svg'
import {
  Button,
  IconButton,
  Box
} from "@mui/material";
import theme from '../styles/thememui'

const Chatbot = styled(ChatBot)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "relative",
  ".rsc-container": {
    background: theme.palette.background.paper,
    height: "80vh",
    width: "576px",
    boxShadow: "0px 8px 17px rgba(106, 167, 197, 0.15), 0px 1.6px 2.7625px rgba(106, 167, 197, 0.075)",
    borderRadius: "40px",
    padding: "32px 24px",
    ".rsc-os-option-element": {
      background: theme.palette.gradients.gradientE,
      padding: "6px 32px",
      border: "1px solid" + theme.palette.tertiary.dark,
      boxShadow: "none",
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
      lineHeight: theme.typography.subtitle2.lineHeight,
      color: theme.palette.text.primary,
      cursor: "pointer",
      "&:focus": {
        background: theme.palette.tertiary.main,
        borderColor: theme.palette.tertiary.main,
        color: theme.palette.text.white,
        opacity: "100%",
      }
    },
    ".rsc-header": {
      display: "none",
    },
    ".rsc-content": {
      height: "calc(78vh - 112px)",
    },
    ".rsc-footer": {
      marginTop: "10vh",
    },
    ".rsc-ts-bubble": {
      backgroundColor: theme.palette.neutral.white,
      boxShadow: "none",
      color: theme.palette.text.primary + "!important",
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.body2.fontWeight,
      lineHeight: theme.typography.body2.lineHeight,
      borderRadius: "24px",
      overflow: "visible",
      filter: "drop-shadow(0px 8px 17px rgba(106, 167, 197, 0.15)) drop-shadow(0px 1.6px 2.7625px rgba(106, 167, 197, 0.075))",
    },
    ".rsc-ts-bot": {
      ".rsc-ts-bubble": {
        "&:before": {
          content: `" "`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='44' height='39' viewBox='0 0 44 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-1.14441e-05 38.1666C-1.14441e-05 38.1666 11.3588 30.403 11.3588 0.870178L43.6177 24.0824C43.6177 24.0824 30.8959 39.9271 -1.14441e-05 38.1666Z' fill='white'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          bottom: "-8px",
          position: "absolute",
          width: "48px",
          height: "28px",
          left: "-8px",
        }
      },
    },
    ".rsc-ts-user": {
      position: "relative",
      columnGap: "16px",
      ".rsc-ts-bubble": {
        "&:after": {
          content: `" "`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='44' height='39' viewBox='0 0 44 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_146_18888)'%3E%3Cpath d='M44 38.1665C44 38.1665 32.6412 30.4029 32.6412 0.870117L0.38229 24.0823C0.38229 24.0823 13.1041 39.927 44 38.1665Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_146_18888'%3E%3Crect width='44' height='39' fill='white' transform='matrix(-1 0 0 1 44 0)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          bottom: "-7px",
          position: "absolute",
          width: "48px",
          height: "28px",
          right: "-24px",
        }
      },
    },
    ".rsc-ts-image-container": {
      padding: 0,
      fontSize: "initial",
      borderRadius: "100%",
      height: "45px",
      width: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "3px solid " + theme.palette.neutral.white,
      ".rsc-ts-image": {
        boxShadow: "none",
        padding: "0",
        height: "50px",
        width: "50px",
        objectFit: "contain",
        overflow: "visible",
      },
    },
    ".rsc-ts-bot:not(:first-of-type)": {
      columnGap: "16px",
      position: "relative",
      ".rsc-ts-image-container": {
        background: theme.palette.secondary.main,
      },

    },
    ".rsc-ts-bot:first-of-type": {
      columnGap: "16px",
      position: "relative",
      paddingBottom: "16px",
      marginBottom: "16px",
      "&:after": {
        content: `" "`,
        borderBottom: "1px solid" + theme.palette.tertiary.dark,
        height: "24px",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
      },
      ".rsc-ts-image-container": {
        padding: 0,
        fontSize: "initial",
        width: "initial",
        height: "initial",
        border: "none",
        ".rsc-ts-image": {
          height: "75px",
          width: "75px",
          objectFit: "contain",
          boxShadow: "none",
          padding: "0",
        },
      },

      ".rsc-ts-bubble": {
        color: theme.palette.text.primary + "!important",
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
        lineHeight: theme.typography.h4.lineHeight,
        minHeight: "62px",
        display: "flex",
        alignItems: "center",
        minWidth: "329px",
        justifyContent: "center",
      }

    },
    ".rsc-input": {
      borderRadius: "24px",
      border: "1px solid " + theme.palette.neutral.grey5,
      padding: "11px 16px",
      fontSize: theme.typography.body2.fontSize,
      fontWeight: 400,
      lineHeight: theme.typography.body2.lineHeight,
      "&:placeholder": {
        color: theme.palette.text.grey + "!important",
      },
      "&:focus, &:hover": {
        borderColor: theme.palette.primary.light,
      },
      "&:not(:disabled)": {
        color: theme.palette.text.grey + "!important",
      }
    },
    ".rsc-input:disabled": {
      border: "1px solid " + theme.palette.text.lightGrey,
      color: theme.palette.text.lightGrey + "!important",
      opacity: 0.4,
      "&:placeholder": {
        color: theme.palette.text.lightGrey + "!important",
      },
    },
    ".rsc-submit-button:disabled": {
      opacity: 0.3,
    }
  },
  "@media screen and (max-width: 600px)": {
    alignItems: "center",
    width: "100%",
    ".rsc-ts-bubble": {
      fontSize: theme.typography.caption.fontSize + "!important",
      fontWeight: theme.typography.caption.fontWeight + "!important",
      lineHeight: theme.typography.caption.lineHeight + "!important",
    },
    ".rsc-container": {
      padding: "32px 20px!important",
      ".rsc-ts.rsc-ts-bot:not(:first-of-type), .rsc-ts.rsc-ts-user:not(:first-of-type)": {
        columnGap: "8px!important"
      },
    },
    ".rsc-ts-image-container": {
      ".rsc-ts-image": {
        height: "35px!important",
        width: "35px!important",
      },
    },
    ".rsc-ts-bot:first-of-type": {
      ".rsc-ts-image-container": {
        ".rsc-ts-image": {
          height: "60px!important",
          width: "60px!important",
        },
      },
      ".rsc-ts-bubble": {
        fontSize: theme.typography.h6.fontSize + "!important",
        fontWeight: theme.typography.h6.fontWeight + "!important",
        lineHeight: theme.typography.h6.lineHeight + "!important",
        padding: "4px 6px!important",
        width: "fit-content",
        minWidth: "fit-content!important",
      }

    },
  },
}));

const ButtonKai = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "576px",
  margin: "auto",
  button: {
    position: "absolute",
    zIndex: "999",
    bottom: "140px",
    textTransform: "none",
    height: "48px",
    "&:hover": {
      "&:after": {
        transform: "rotate(30deg)",
        transition: "all 0.5s ease-out;"
      }
    },
    "&:after": {
      content: `" "`,
      backgroundImage: `url("https://raw.githubusercontent.com/Belico-hackaton-2023/kai-chatbot/c445f10d2367ae27ec12335c600f06be75bd67b6/src/content/images/kai-moonsvg.svg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      bottom: "23px",
      position: "absolute",
      width: "55px",
      height: "35px",
      right: "-30px",
    }
  },
  "@media screen and (max-width: 600px)": {
    button: {
      left: "30px",
    },
  },
}));

const steps = [
  {
    id: '1',
    message: '¿Para qué soy bueno?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Glosario', trigger: '3' },
      // { value: 2, label: 'Beneficios', trigger: '4' },
      // { value: 3, label: 'Areas', trigger: '5' },
    ],
  },
  {
    id: '3',
    message: 'Escribe alguna palabra que no sepas de kushki',
    trigger: 'word',
  },
  {
    id: 'word',
    user: true,
    trigger: 'definition',
  },
  {
    id: 'definition',
    component: <SearchGlosary />,
    asMessage: true,
  },
];

export default function ChatBotBox() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Chatbot steps={steps} botAvatar={headKaiImg} />
        <ButtonKai>
          <Button variant="text" size="small">
            KAI mejor consulta <br /> a  un especialista
          </Button>
        </ButtonKai>
      </ThemeProvider>
    </React.Fragment>
  );
}
