export default class MenuTimer {
  #menuTime;
  constructor() {
    if (MenuTimer.instance) return MenuTimer.instance;
    MenuTimer.instance = this;
  }

  setClearTime() {
    clearTimeout(this.#menuTime);
  }

  setTime(setMenu) {
    if (this.#menuTime) this.setClearTime();
    this.#menuTime = setTimeout(() => {
      setMenu(false);
    }, 3000);
  }
}
