export class Stereo {
  on() {
    console.log('Stereo is on');
  }

  off() {
    console.log('Stereo is off');
  }

  setCd(cd: string) {
    console.log(`Stereo is set for ${cd} CD`);
  }

  setDvd(dvd: string) {
    console.log(`Stereo is set for ${dvd} DVD`);
  }

  setRadio(radio: string) {
    console.log(`Stereo is set for ${radio} radio`);
  }

  setVolume(volume: number) {
    console.log(`Stereo is set volume to ${volume}`);
  }
}
