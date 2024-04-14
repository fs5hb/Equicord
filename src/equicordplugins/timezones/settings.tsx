/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export enum CustomTimezonePreference {
    Never,
    Secondary,
    Always
}

export default definePluginSettings({
    preference: {
        type: OptionType.SELECT,
        description: "When to use custom timezones over TimezoneDB.",
        options: [
            {
                label: "Never use custom timezones.",
                value: CustomTimezonePreference.Never,
            },
            {
                label: "Prefer custom timezones over TimezoneDB",
                value: CustomTimezonePreference.Secondary,
                default: true,
            },
            {
                label: "Always use custom timezones.",
                value: CustomTimezonePreference.Always,
            },
        ],
        default: CustomTimezonePreference.Secondary,
    },
    showTimezonesInChat: {
        type: OptionType.BOOLEAN,
        description: "Show timezones in chat",
        default: true,
    },
    showTimezonesInProfile: {
        type: OptionType.BOOLEAN,
        description: "Show timezones in profile",
        default: true,
    },
});
