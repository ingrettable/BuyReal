import * as React from "react";
import { SvgIcon } from "@material-ui/core";
import LogoBuyReal from './buyreal.svg';

export default function IconLogo(props) {
  return (
    <SvgIcon {...props} >
      component={LogoBuyReal}
    </SvgIcon>
  );
}
