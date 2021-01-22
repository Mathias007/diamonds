import { Common, HIDDEN_SCREEN } from "./Common.esm.js";

const SETTINGS_SCREEN_ID = "js-settings-screen";
const MUSIC_ON_OF_BUTTON_ID = "js-music-on-off";
const MUSIC_VOLUME_INCREASE_BUTTON_ID = "js-music-volume-increase";
const MUSIC_VOLUME_DECREASE__BUTTON_ID = "js-music-volume-decrease";
const SOUND_ON_OFF__BUTTONID = "js-sound-on-off";
const SOUND_VOLUME_INCREASE_BUTTON_ID = "js-sound-volume-increase";
const SOUND_VOLUME_DECREASE_BUTTON_ID = "js-sound-volume-decrease";
const SETTINGS_SCREEN_EXIT_BUTTON_ID = "js-settings-screen-exit-button";

class Settings extends Common {
    constructor() {
        super(SETTINGS_SCREEN_ID);
        this.bindToElements();
    }

    bindToElements() {
        const exitSettingsElement = this.bindToElements(
            SETTINGS_SCREEN_EXIT_BUTTON_ID
        );

        exitSettingsElement.addEventListener("click", () =>
            this.changeVisibilityScreen(this.element, HIDDEN_SCREEN)
        );
    }
}

export const settings = new Settings();
