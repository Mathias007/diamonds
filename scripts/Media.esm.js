class Media {
    constructor() {
        this._backgroundImage = null;
        this._diamondsSprite = null;
        this.musicVolume = 0.3;
        this.soundVolume = 0.5;
        this.allowedMusic = true;
        this.allowedSound = true;
        this._swapSound = null;
        this._backgoundMusic = null;
        this.isInLevel = false;
    }

    increaseMusicVolume() {
        this.musicVolume += 0.1;
        if (this.musicVolume > 1) {
            this.musicVolume = 1;
        }

        this._backgoundMusic.volume = this.musicVolume;
    }

    decreaseMusicVolume() {
        this.musicVolume -= 0.1;
        if (this.musicVolume < 0) {
            this.musicVolume = 0;
        }

        this._backgoundMusic = this.musicVolume;
    }

    increaseSoundVolume() {
        this.soundVolume += 0.1;
        if (this.soundVolume > 1) {
            this.soundVolume = 1;
        }

        this._swapSound.volume = this.soundVolume;
    }

    decreaseSoundVolume() {
        this.soundVolume -= 0.1;
        if (this.soundVolume < 0) {
            this.soundVolume = 0;
        }

        this._swapSound.volume = this.soundVolume;
    }

    playBackgroundMusic() {
        if (!this.allowedMusic) {
            return;
        }

        this._backgoundMusic.loop = true;
        this._backgoundMusic.play();
    }

    stopBackgroundMusic() {
        this._backgoundMusic.pause();
    }

    playSwapSound() {
        if (!this.allowedSound) {
            return;
        }

        this._swapSound.play();
    }

    set swapSound(sound) {
        this._swapSound = sound;
        this._swapSound.volume = this.soundVolume;
    }

    set backgoundMusic(music) {
        this._backgoundMusic = music;
        this._backgoundMusic.volume = this.musicVolume;
    }

    get swapSound() {
        return !!this._swapSound;
    }

    get backgoundMusic() {
        return !!this._backgoundMusic;
    }

    set backgroundImage(imageObject) {
        if (!imageObject instanceof Image) {
            return;
        }
        this._backgroundImage = imageObject;
    }

    get backgroundImage() {
        return this._backgroundImage;
    }

    set diamondsSprite(imageObject) {
        if (!imageObject instanceof Image) {
            return;
        }

        this._diamondsSprite = imageObject;
    }

    get diamondsSprite() {
        return this._diamondsSprite;
    }

    toggleMusicOnOff() {
        if (this.allowedMusic) {
            this.allowedMusic = false;
            this.stopBackgroundMusic();
        } else {
            this.allowedMusic = true;
            this.playBackgroundMusic();
        }
    }
}

export const media = new Media();
