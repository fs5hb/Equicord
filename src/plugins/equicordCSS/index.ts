/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// Import required modules and components
import { definePluginSettings, migratePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

// Importing the style managed fixes on and off switch
import betterauthapps from "./css/betterauthapps.css?managed";
import betterstatuspicker from "./css/betterstatuspicker.css?managed";
import equicord from "./css/equicord.css?managed";
import graidentbuttons from "./css/graidentbuttons.css?managed";
import nitrothemesfix from "./css/nitrothemesfix.css?managed";
import settingsicons from "./css/settingsicons.css?managed";
import userreimagined from "./css/userreimagined.css?managed";

const settings = definePluginSettings({
    betterAuthApps: {
        type: OptionType.BOOLEAN,
        description: "Enable Better Auth Apps CSS",
        restartNeeded: false,
        default: false
    },
    betterStatusPicker: {
        type: OptionType.BOOLEAN,
        description: "Enable Better Status Picker CSS",
        restartNeeded: false,
        default: false
    },
    equicord: {
        type: OptionType.BOOLEAN,
        description: "Enable Equicords CSS",
        restartNeeded: false,
        default: false
    },
    graidentButtons: {
        type: OptionType.BOOLEAN,
        description: "Enable Graident Buttons CSS",
        restartNeeded: false,
        default: false
    },
    nitroThemesFix: {
        type: OptionType.BOOLEAN,
        description: "Enable Fix Nitro Themes CSS",
        restartNeeded: false,
        default: false
    },
    settingsIcons: {
        type: OptionType.BOOLEAN,
        description: "Enable Settings Icons CSS",
        restartNeeded: false,
        default: false
    },
    userReimagined: {
        type: OptionType.BOOLEAN,
        description: "Enable User Reimagined CSS",
        restartNeeded: false,
        default: false
    }
});

// Define the Vencord plugin
migratePluginSettings("EquicordCSS", "EquicordBuiltIn");
export default definePlugin({
    name: "EquicordCSS",
    description: "CSS for Equicord users. You will need to look at the settings.",
    authors: [Devs.FoxStorm1, Devs.thororen],
    dependencies: ["ThemeAttributes"],
    settings,
    start() {
        if (settings.store.betterAuthApps) return enableStyle(betterauthapps);
        if (settings.store.betterStatusPicker) return enableStyle(betterstatuspicker);
        if (settings.store.equicord) return enableStyle(equicord);
        if (settings.store.graidentButtons) return enableStyle(graidentbuttons);
        if (settings.store.nitroThemesFix) return enableStyle(nitrothemesfix);
        if (settings.store.settingsIcons) return enableStyle(settingsicons);
        if (settings.store.userReimagined) return enableStyle(userreimagined);
    },
    stop() {
        if (settings.store.betterAuthApps) return disableStyle(betterauthapps);
        if (settings.store.betterStatusPicker) return disableStyle(betterstatuspicker);
        if (settings.store.equicord) return disableStyle(equicord);
        if (settings.store.graidentButtons) return disableStyle(graidentbuttons);
        if (settings.store.nitroThemesFix) return disableStyle(nitrothemesfix);
        if (settings.store.settingsIcons) return disableStyle(settingsicons);
        if (settings.store.userReimagined) return disableStyle(userreimagined);
    }
});
