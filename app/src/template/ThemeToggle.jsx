import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {
    CodeIcon as LightbulbOutlineIcon,
    CodeIcon as LightbulbFullIcon,
    // FIXME! 
    // LightbulbOutline as LightbulbOutlineIcon,
    // LightbulbFull as LightbulbFullIcon,
    // } from '@material-ui/docs';
} from "@material-ui/icons/Code";

import Store from "./Store";


export function ThemeToggle(props) {
    return null; // FIXME! 



    const { themeOptions } = props;
    if (!themeOptions) return null;

    const paletteLight = (themeOptions.type === "light");

    function handleTogglePaletteType() {
        const otherPaletteType = paletteLight ? "dark" : "light";
        Store.dispatch({ type: "UPDATE_THEME", changes: { type: otherPaletteType } });
    }

    return <Tooltip title={"Toggle Dark/ Light"} enterDelay={300}>
        <div>
            <IconButton onClick={handleTogglePaletteType}>
                {paletteLight ? (<LightbulbOutlineIcon />) : (<LightbulbFullIcon />)}
            </IconButton>
        </div>
    </Tooltip>;
}

const mapStateToProps = state => {
    if (!state.theme) return { themeOptions: null };
    return { themeOptions: state.theme.options };
};

export default Store.connect(mapStateToProps)(ThemeToggle);
