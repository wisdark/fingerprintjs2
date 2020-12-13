import { toInt } from '../utils/data'

const w = window

export default function getAvailableScreenResolution(): [number, number] | undefined {
  if (w.screen.availWidth && w.screen.availHeight) {
    // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
    // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
    const dimensions = [toInt(w.screen.availWidth), toInt(w.screen.availHeight)] as [number, number]
    dimensions.sort().reverse()
    return dimensions
  }
  return undefined
}
