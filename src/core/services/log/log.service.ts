import { configs } from "core/configs/config";

export function log(info: unknown): void {
  if (configs.app.appIsDev) {
    // eslint-disable-next-line no-console
    console.log(info);
  }
}
