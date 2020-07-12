import Index from "./views/index/index";

class Router implements IRouter {
  routes: IRoute[] = [];
  interval: number;
  constructor() {
    this.listen();
  }
  go(where: string) {
    window.history.pushState(
      null,
      null,
      `http://${window.location.host}/${where}`
    );
  }
  listen() {
    clearInterval(this.interval);
    this.interval = setInterval(this.onListen, 100);
  }
  onListen: TimerHandler = () => {
    console.log(window.location.pathname);
  };
}

export default Router;

interface IRoute {
  url: string;
  view: any;
}
interface IRouter {
  routes: IRoute[];
  interval: number;
  go(where: string): void;
  listen(): void;
}
